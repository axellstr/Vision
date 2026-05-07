import type { APIRoute } from 'astro';
export const runtime = 'node';
import { Resend } from 'resend';

const resendApiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;
const ownerEmail = (import.meta.env.CONTACT_OWNER_EMAIL || process.env.CONTACT_OWNER_EMAIL || 'parisa@parisajewellery.com').toString();
const fromEmail = (import.meta.env.CONTACT_FROM_EMAIL || process.env.CONTACT_FROM_EMAIL || 'parisa@parisajewellery.com').toString();
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Optional: allow-list production origins to reduce cross-site posts
const allowedOrigins = [
  'https://parisajewellery.com',
  'https://www.parisajewellery.com'
];

// ============================================================================
// Rate Limiting
// ============================================================================
// Simple in-memory rate limiter (per serverless instance)
// For high-traffic production, consider using Redis or Vercel KV
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 contact submissions per minute per IP

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

// ============================================================================
// Input Sanitization
// ============================================================================
/**
 * Escape HTML entities to prevent XSS attacks in email templates
 */
function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };
  return text.replace(/[&<>"'`=/]/g, (char) => htmlEntities[char] || char);
}

/**
 * Sanitize and validate email address
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Sanitize text input - removes potentially dangerous characters
 * and limits length
 */
function sanitizeText(text: string, maxLength: number = 1000): string {
  return text
    .trim()
    .substring(0, maxLength)
    // Remove null bytes and other control characters
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
}

export const POST: APIRoute = async ({ request, url }) => {
  try {
    // Rate limiting check
    const clientIP = getClientIP(request);
    if (isRateLimited(clientIP)) {
      const accept = request.headers.get('accept') || '';
      if (accept.includes('application/json')) {
        return new Response(
          JSON.stringify({ ok: false, error: 'Too many requests. Please try again later.' }), 
          { 
            status: 429, 
            headers: { 
              'Content-Type': 'application/json',
              'Retry-After': '60'
            } 
          }
        );
      }
      return new Response('Too many requests. Please try again later.', { 
        status: 429,
        headers: { 'Retry-After': '60' }
      });
    }

    if (!resend) {
      return new Response('Email service not configured', { status: 500 });
    }

    // Basic origin check (skip on localhost)
    const origin = request.headers.get('origin') || '';
    if (url.hostname !== 'localhost' && origin && !allowedOrigins.some(o => origin.startsWith(o))) {
      return new Response('Forbidden', { status: 403 });
    }

    const form = await request.formData();
    
    // Sanitize all inputs
    const name = sanitizeText((form.get('name') || '').toString(), 100);
    const email = sanitizeText((form.get('email') || '').toString(), 254);
    const subject = sanitizeText((form.get('subject') || '').toString(), 200);
    const message = sanitizeText((form.get('message') || '').toString(), 5000);

    // Honeypot (do not drop silently; mark as potential spam)
    const company = (form.get('company') || '').toString().trim();
    const isSpam = Boolean(company);

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response('Missing required fields', { status: 400 });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return new Response('Invalid email address', { status: 400 });
    }

    // Escape HTML for safe rendering in email templates
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    // Send email to your inbox
    const ownerHtml = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#0d1716;background:#ffffff;padding:24px">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;margin:0 auto;border:1px solid #e5eceb;border-radius:12px;overflow:hidden">
          <tr>
            <td style="background:#0d1716;color:#ffffff;padding:16px 20px;font-weight:600;font-size:16px">New contact submission</td>
          </tr>
          <tr>
            <td style="padding:20px">
              <p style="margin:0 0 8px"><strong>Name:</strong> ${safeName}</p>
              <p style="margin:0 0 8px"><strong>Email:</strong> ${safeEmail}</p>
              <p style="margin:0 0 16px"><strong>Subject:</strong> ${safeSubject}</p>
              <div style="border-top:1px solid #e5eceb;margin:16px 0"></div>
              <p style="margin:0 0 8px;font-weight:600">Message</p>
              <pre style="white-space:pre-wrap;margin:0;background:#f7fbfa;padding:12px;border:1px solid #e5eceb;border-radius:4px">${safeMessage}</pre>
            </td>
          </tr>
        </table>
      </div>`;

    const { error: ownerError } = await resend.emails.send({
      from: `Parisa London <${fromEmail}>`,
      to: [ownerEmail],
      replyTo: email, // Use original email for reply-to
      subject: `${isSpam ? '[SPAM?] ' : ''}[Contact] ${subject} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        '',
        message
      ].join('\n'),
      html: ownerHtml
    });
    
    if (ownerError && import.meta.env.DEV) {
      console.warn('Owner email send error:', ownerError);
    }

    // Auto-reply to the customer
    try {
      const customerHtml = `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#0d1716;background:#ffffff;padding:24px">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;margin:0 auto;border:1px solid #e5eceb;border-radius:12px;overflow:hidden">
            <tr>
              <td style="background:#0d1716;color:#ffffff;padding:16px 20px;font-weight:600;font-size:16px">We received your message</td>
            </tr>
            <tr>
              <td style="padding:20px">
                <p style="margin:0 0 8px">Hi ${safeName || 'there'},</p>
                <p style="margin:0 0 16px">Thanks for contacting Parisa London. We've received your message and will get back to you within 1 business day.</p>
                <div style="border-top:1px solid #e5eceb;margin:16px 0"></div>
                <p style="margin:0 0 8px;font-weight:600">Your message</p>
                <pre style="white-space:pre-wrap;margin:0;background:#f7fbfa;padding:12px;border:1px solid #e5eceb;border-radius:4px">${safeMessage}</pre>
                <p style="margin:16px 0 0">Warm regards,<br/>Parisa London</p>
              </td>
            </tr>
          </table>
        </div>`;

      const { error: autoError } = await resend.emails.send({
        from: `Parisa London <${fromEmail}>`,
        to: [email],
        subject: 'We received your message — Parisa London',
        text: [
          `Hi ${name || 'there'},`,
          '',
          'Thanks for contacting Parisa London. We have received your message and will get back to you within 1 business day.',
          '',
          'Your message:',
          message,
          '',
          'Warm regards,',
          'Parisa London'
        ].join('\n'),
        html: customerHtml
      });
      
      if (autoError && import.meta.env.DEV) {
        console.warn('Auto-reply send error:', autoError);
      }
    } catch (e) {
      // Do not fail the request if auto-reply fails
      if (import.meta.env.DEV) {
        console.warn('Auto-reply failed:', e);
      }
    }

    // Respond based on request type: JSON for fetch clients, redirect for standard form posts
    const accept = request.headers.get('accept') || '';
    if (accept.includes('application/json')) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const redirectTo = new URL('/contact?sent=1', url).toString();
    return new Response(null, { status: 303, headers: { Location: redirectTo } });
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('Contact API error:', error);
    }
    
    const accept = request.headers.get('accept') || '';
    if (accept.includes('application/json')) {
      return new Response(JSON.stringify({ ok: false, error: 'Failed to send message' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return new Response('Failed to send message', { status: 500 });
  }
};
