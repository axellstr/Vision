# Stripe Checkout Integration Setup

This guide explains how to configure and use the Stripe checkout integration for your Parisa London e-commerce site.

## Prerequisites

- Stripe account ([Sign up here](https://dashboard.stripe.com/register))
- Node.js environment variables setup

## Setup Instructions

### 1. Get Your Stripe API Keys

1. Log into your [Stripe Dashboard](https://dashboard.stripe.com/)
2. Navigate to **Developers > API keys**
3. Copy your **Publishable key** (starts with `pk_`)
4. Copy your **Secret key** (starts with `sk_`)

### 2. Configure Environment Variables

Create a `.env` file in your project root with your Stripe keys:

```env
# Stripe API Keys
STRIPE_PUBLIC_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here

# Environment
NODE_ENV=development
```

**Quick Test Setup:**
If you want to test immediately, you can use these test keys (they won't process real payments):
- `STRIPE_PUBLIC_KEY=pk_test_51234567890abcdef`
- `STRIPE_SECRET_KEY=sk_test_51234567890abcdef`

**Important:** Never commit your `.env` file to version control. The `.env.example` file shows the required structure.

### 3. Test Your Integration

1. Add items to your cart
2. Go to `/checkout`
3. Fill in all required information
4. Click "Proceed to Payment"
5. You'll be redirected to Stripe's secure checkout page

## How It Works

### Customer Journey

1. **Cart → Checkout**: Customer reviews items and enters shipping information
2. **Payment Button**: Clicking "Proceed to Payment" creates a Stripe checkout session
3. **Stripe Checkout**: Customer is redirected to Stripe's secure payment page
4. **Success**: After payment, customer returns to `/checkout/success`
5. **Cart Cleared**: Local cart is automatically cleared on successful payment

### Technical Flow

1. **Form Validation**: Client-side validation ensures all required fields are filled
2. **API Call**: Form data and cart contents are sent to `/api/create-checkout-session`
3. **Stripe Session**: Server creates a Stripe checkout session with:
   - Line items from cart
   - Customer information
   - Shipping costs
   - Success/cancel URLs
4. **Redirect**: Customer is redirected to Stripe's hosted checkout page
5. **Payment Processing**: Stripe handles secure payment processing
6. **Return**: Customer returns to success page after payment

### Supported Features

- ✅ Product line items with images and metadata
- ✅ Variable shipping costs based on delivery method
- ✅ Customer information collection
- ✅ Billing address (separate from shipping if needed)
- ✅ Order notes and special instructions
- ✅ Multiple payment methods (cards, Apple Pay, Google Pay, etc.)
- ✅ International shipping to 16+ countries
- ✅ Mobile-responsive checkout experience
- ✅ Invoice generation
- ✅ Cart clearing after successful payment

## Customization Options

### Supported Countries

Currently configured for:
- United Kingdom (GB) - Default
- United States (US)
- Canada (CA)
- Australia (AU)
- European Union countries
- And more...

### Payment Methods

Stripe automatically shows relevant payment methods based on:
- Customer's location
- Order amount
- Available methods in your Stripe account

### Delivery Options

Three shipping tiers are supported:
- **Standard**: Free, 5-7 business days
- **Express**: £15, 2-3 business days  
- **Next Day**: £25, Next business day

## Testing

### Test Mode

Use test API keys (starting with `pk_test_` and `sk_test_`) for development.

### Test Cards

Use Stripe's test card numbers:
- **Success**: `4242 4242 4242 4242`
- **Declined**: `4000 0000 0000 0002`
- **3D Secure**: `4000 0000 0000 3220`

Any future expiry date and any 3-digit CVC will work with test cards.

## Production Deployment

### 1. Get Live Keys

1. Complete Stripe account activation
2. Get live API keys from Stripe Dashboard
3. Update environment variables with live keys

### 2. Update Environment Variables

```env
STRIPE_PUBLIC_KEY=pk_live_your_live_publishable_key
STRIPE_SECRET_KEY=sk_live_your_live_secret_key
NODE_ENV=production
```

### 3. Test Live Integration

- Use real payment methods
- Verify order fulfillment process
- Test customer support workflows

## Security Notes

- API keys are server-side only (secret key never exposed to client)
- Payment processing happens entirely on Stripe's secure servers
- Customer payment information never touches your servers
- PCI compliance handled by Stripe

## Troubleshooting

### Common Issues

1. **"No checkout URL received"**
   - Check Stripe API keys are correctly set
   - Verify network connectivity to Stripe

2. **"Cart is empty"**
   - Ensure items are added to cart before checkout
   - Check localStorage persistence

3. **"Missing required customer information"**
   - All form fields marked with * are required
   - Verify form validation is working

### Debug Mode

Check browser console for detailed error messages and API response logs.

## Support

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Support](https://support.stripe.com/)
- Check the browser console for error details

## Webhooks (Optional)

For production, consider implementing Stripe webhooks to:
- Handle successful payments
- Process refunds
- Update order status
- Send confirmation emails

Webhook endpoint would be: `/api/webhooks/stripe`
