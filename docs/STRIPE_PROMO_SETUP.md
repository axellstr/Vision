# Stripe coupon for PROMO15

The checkout API applies the Stripe **Coupon** whose ID is referenced in [`src/data/promo-codes.ts`](../src/data/promo-codes.ts) (default: `PROMO15`).

## One-time setup (Stripe Dashboard)

1. Open [Stripe Dashboard](https://dashboard.stripe.com/) → **Product catalog** → **Coupons** (or **Billing** → **Coupons**, depending on dashboard version).
2. **Create coupon**:
   - **ID**: `PROMO15` (must match the `stripeCouponId` in code, or update the code to match your coupon ID)
   - **Type**: Percentage
   - **Percent off**: `15`
   - **Duration**: Once (applies to this checkout only)

3. Save. No separate customer-facing promotion code is required if you attach the coupon by ID in the Checkout Session (`discounts: [{ coupon: 'PROMO15' }]`).

## Test mode

Create the same coupon in **Test mode** so local/dev checkouts work with test keys.
