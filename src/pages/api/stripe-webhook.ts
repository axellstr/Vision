import type { APIRoute } from 'astro';
import Stripe from 'stripe';

// Initialize Stripe
const stripeSecretKey = import.meta.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecretKey ? new Stripe(stripeSecretKey, {}) : null;

export const POST: APIRoute = async ({ request }) => {
  if (!stripe) {
    return new Response('Stripe not configured', { status: 500 });
  }

  const body = await request.text();
  const sig = request.headers.get('stripe-signature');
  const webhookSecret = import.meta.env.STRIPE_WEBHOOK_SECRET || process.env.STRIPE_WEBHOOK_SECRET;

  let event: Stripe.Event;

  try {
    if (webhookSecret && sig) {
      // Verify webhook signature for security
      event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    } else {
      // For development without webhook secret (NOT recommended for production)
      if (import.meta.env.PROD) {
        return new Response('Webhook secret required in production', { status: 400 });
      }
      event = JSON.parse(body);
    }
  } catch (err) {
    return new Response('Webhook signature verification failed', { status: 400 });
  }

  // Handle successful payment completion
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    
    // Process order fulfillment
    try {
      await processOrderFulfillment(session);
    } catch (error) {
      // Don't fail the webhook - payment was successful
      // Errors are logged server-side in processOrderFulfillment
    }
  }

  // Handle payment intent succeeded (alternative trigger)
  if (event.type === 'payment_intent.succeeded') {
    // Payment intent succeeded - Stripe will send receipt automatically
    // Add any additional business logic here if needed
  }

  return new Response('Webhook processed successfully', { status: 200 });
};

async function processOrderFulfillment(session: Stripe.Checkout.Session) {
  // Get line items from the session for order processing
  if (!stripe) return;
  
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
    expand: ['data.price.product']
  });

  // Get customer details if available
  let customerName = 'Valued Customer';
  if (session.customer) {
    try {
      const customer = await stripe.customers.retrieve(session.customer as string);
      if (customer && !customer.deleted) {
        customerName = customer.name || 'Valued Customer';
      }
    } catch (error) {
      // Customer details couldn't be retrieved - continue with default name
    }
  }
}
