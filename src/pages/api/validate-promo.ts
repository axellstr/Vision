import type { APIRoute } from 'astro';
import { getPromoByNormalizedCode, normalizePromoCode } from '../../data/promo-codes';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { code } = body as { code?: unknown };

    if (!code || typeof code !== 'string') {
      return new Response(JSON.stringify({ valid: false, error: 'No code provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const normalizedCode = normalizePromoCode(code);
    const promo = getPromoByNormalizedCode(normalizedCode);

    if (promo) {
      return new Response(
        JSON.stringify({
          valid: true,
          code: normalizedCode,
          percentOff: promo.percentOff,
          stripeCouponId: promo.stripeCouponId,
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } },
      );
    }

    return new Response(JSON.stringify({ valid: false, error: 'Invalid promo code' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ valid: false, error: 'Validation failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
