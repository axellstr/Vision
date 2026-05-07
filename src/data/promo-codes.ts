/**
 * Server-side promo definitions. Keep in sync with Stripe Coupon IDs.
 * @see docs/STRIPE_PROMO_SETUP.md
 */
export type PromoDefinition = {
  percentOff: number;
  /** Stripe Coupon ID from Dashboard → Coupons */
  stripeCouponId: string;
};

export const PROMO_CODES: Record<string, PromoDefinition> = {
  PROMO15: { percentOff: 15, stripeCouponId: 'PROMO15' },
};

export function normalizePromoCode(code: string): string {
  return code.trim().toUpperCase();
}

export function getPromoByNormalizedCode(normalizedCode: string): PromoDefinition | undefined {
  return PROMO_CODES[normalizedCode];
}
