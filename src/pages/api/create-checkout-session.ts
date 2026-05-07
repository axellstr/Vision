import type { APIRoute } from 'astro';
import Stripe from 'stripe';
import { getPromoByNormalizedCode, normalizePromoCode } from '../../data/promo-codes';

// Get Stripe secret key from environment
const stripeSecretKey = import.meta.env.STRIPE_SECRET_KEY;

// Initialize Stripe with secret key
const stripe = stripeSecretKey ? new Stripe(stripeSecretKey, {}) : null;

// ============================================================================
// Rate Limiting
// ============================================================================
// Simple in-memory rate limiter (per serverless instance)
// For high-traffic production, consider using Redis or Vercel KV
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10; // Max 10 checkout attempts per minute per IP

function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  // Clean up expired entries periodically
  if (rateLimitMap.size > 10000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    // First request or window expired
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  record.count++;
  return false;
}

function getClientIP(request: Request): string {
  // Try various headers for client IP (Vercel, Cloudflare, etc.)
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }
  const cfIP = request.headers.get('cf-connecting-ip');
  if (cfIP) {
    return cfIP;
  }
  return 'unknown';
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Rate limiting check
    const clientIP = getClientIP(request);
    if (isRateLimited(clientIP)) {
      return new Response(
        JSON.stringify({ 
          error: 'Too many requests',
          details: 'Please wait a moment before trying again'
        }),
        { 
          status: 429,
          headers: { 
            'Content-Type': 'application/json',
            'Retry-After': '60'
          }
        }
      );
    }

    // Check if Stripe is properly initialized
    if (!stripe) {
      return new Response(
        JSON.stringify({ 
          error: 'Payment system not configured',
          details: 'Stripe secret key is missing from environment variables'
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    const body = await request.json();
    
    // Extract checkout data from request
    const {
      contact,
      shippingAddress,
      billingAddress,
      deliveryMethod,
      cart,
      notes,
      promoCode,
    } = body;

    // Validate required data - only cart is required since Stripe will collect customer details
    if (!cart?.items?.length) {
      return new Response(
        JSON.stringify({ error: 'Cart is empty' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Transform cart items to Stripe line items
    const lineItems = cart.items.map((item: any) => {
      // Validate item data
      if (!item.name || !item.price || !item.quantity) {
        throw new Error(`Invalid cart item: ${JSON.stringify(item)}`);
      }

      // Generate image URL for Stripe
      // Note: Stripe requires publicly accessible URLs. Localhost URLs won't work.
      const origin = new URL(request.url).origin;
      const isLocalhost = origin.includes('localhost') || origin.includes('127.0.0.1');
      
      let imageUrl: string | undefined;
      
      if (item.image) {
        if (item.image.startsWith('http')) {
          // Already a full URL
          imageUrl = item.image;
        } else if (isLocalhost) {
          // For localhost development, use publicly hosted placeholder images
          const placeholders = {
            'rings': 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center',
            'necklaces': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop&crop=center', 
            'earrings': 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&crop=center'
          };
          
          // Use category-specific placeholder or default jewelry image
          imageUrl = placeholders[item.category as keyof typeof placeholders] || 
                    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center';
        } else {
          // Production: use full URL
          imageUrl = `${origin}${item.image}`;
        }
      }

      return {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: item.name,
            description: item.size ? `Size: ${item.size}` : undefined,
            images: imageUrl ? [imageUrl] : undefined,
            metadata: {
              sku: item.sku || '',
              category: item.category || '',
              collection: item.collection || ''
            }
          },
          unit_amount: Math.round(item.price * 100), // Convert to pence
        },
        quantity: item.quantity,
      };
    });

    // Add shipping as a line item if it has a cost
    if (deliveryMethod?.cost && deliveryMethod.cost > 0) {
      lineItems.push({
        price_data: {
          currency: 'gbp',
          product_data: {
            name: `${deliveryMethod.type === 'express' ? 'Express' : deliveryMethod.type === 'next-day' ? 'Next Day' : 'Standard'} Delivery`,
            description: deliveryMethod.type === 'express' ? '2-3 business days' : 
                        deliveryMethod.type === 'next-day' ? 'Next business day' : 
                        '5-7 business days'
          },
          unit_amount: Math.round(deliveryMethod.cost * 100), // Convert to pence
        },
        quantity: 1,
      });
    }

    // Prepare session metadata (limited to 500 chars per value)
    const metadata: Record<string, string> = {
      order_type: 'online_purchase',
      delivery_method: deliveryMethod?.type || 'standard',
      customer_phone: contact?.phone?.substring(0, 500) || '',
      shipping_country: shippingAddress?.country?.substring(0, 500) || '',
    };

    // Add notes if provided (truncate to fit metadata limits)
    if (notes) {
      metadata.order_notes = notes.substring(0, 500);
    }

    // Add billing address if different from shipping
    if (billingAddress) {
      metadata.billing_different = 'true';
      metadata.billing_address = JSON.stringify({
        firstName: billingAddress.firstName,
        lastName: billingAddress.lastName,
        address1: billingAddress.address1,
        address2: billingAddress.address2,
        city: billingAddress.city,
        postcode: billingAddress.postcode,
        country: billingAddress.country,
        region: billingAddress.region
      }).substring(0, 500);
    }

    const discounts: Stripe.Checkout.SessionCreateParams['discounts'] = [];
    if (promoCode && typeof promoCode === 'string') {
      const promo = getPromoByNormalizedCode(normalizePromoCode(promoCode));
      if (promo) {
        discounts.push({ coupon: promo.stripeCouponId });
      }
    }

    // Create Stripe checkout session
    // Explicitly specify payment methods: Card (Visa/Mastercard), Apple Pay, Google Pay, Revolut Pay
    // Note: Apple Pay and Google Pay automatically appear when 'card' is enabled
    // and they're configured in the Stripe Dashboard (only on compatible devices)
    const sessionConfig: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ['card', 'revolut_pay'],
      line_items: lineItems,
      ...(discounts.length > 0 ? { discounts } : {}),
      mode: 'payment',
      customer_creation: 'always',
      billing_address_collection: 'required',
      shipping_address_collection: {
        // All countries supported by Stripe Checkout
        allowed_countries: [
          'AC', 'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AT', 'AU', 'AW', 'AX', 'AZ',
          'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ',
          'CA', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ',
          'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ',
          'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET',
          'FI', 'FJ', 'FK', 'FO', 'FR',
          'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY',
          'HK', 'HN', 'HR', 'HT', 'HU',
          'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IS', 'IT',
          'JE', 'JM', 'JO', 'JP',
          'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KY', 'KZ',
          'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY',
          'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MK', 'ML', 'MM', 'MN', 'MO', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ',
          'NA', 'NC', 'NE', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ',
          'OM',
          'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PY',
          'QA',
          'RE', 'RO', 'RS', 'RU', 'RW',
          'SA', 'SB', 'SC', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SZ',
          'TA', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ',
          'UA', 'UG', 'US', 'UY', 'UZ',
          'VA', 'VC', 'VE', 'VG', 'VN', 'VU',
          'WF', 'WS',
          'XK',
          'YE', 'YT',
          'ZA', 'ZM', 'ZW'
        ],
      },
      phone_number_collection: {
        enabled: true,
      },
      success_url: `${new URL(request.url).origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${new URL(request.url).origin}/checkout`,
      metadata,
      invoice_creation: {
        enabled: true,
      },
      automatic_tax: {
        enabled: false, // Set to true if you want tax calculation
      },
      payment_intent_data: {
        description: `Order from Parisa London - ${cart.items.length} item(s)`,
        metadata: {
          ...metadata,
          cart_items: JSON.stringify(cart.items.map((item: any) => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price
          }))).substring(0, 500)
        }
      },
      custom_text: {
        submit: {
          message: 'Thank you for choosing Parisa London! You will receive a receipt email shortly after payment.'
        }
      }
    };

    // Add customer email if provided (otherwise Stripe will collect it)
    if (contact?.email) {
      sessionConfig.customer_email = contact.email;
      if (sessionConfig.payment_intent_data) {
        sessionConfig.payment_intent_data.receipt_email = contact.email;
      }
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return new Response(
      JSON.stringify({ 
        url: session.url,
        sessionId: session.id 
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    // Log error in development only
    if (import.meta.env.DEV) {
      console.error('Stripe checkout error:', error);
    }
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to create checkout session',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
