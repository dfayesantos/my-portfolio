import { NextResponse } from 'next/server';
import { Resend } from 'resend';


type RequestBody = {
  name: string;
  email: string;
  message: string;
  website?: string; // honeypot
};

const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const DIANNE_EMAIL = process.env.DIANNE_EMAIL || '';
const resend = new Resend(RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as RequestBody;

    // Honeypot: if filled, treat as spam
    if (body.website && body.website.trim() !== '') {
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
    }

  // Simple in-memory rate limiter (per-IP). Note: this is ephemeral and not suitable for multi-instance production.
    // Limit: 5 submissions per hour per IP
    const ip = (req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown') as string;
    const now = Date.now();
    const WINDOW_MS = 60 * 60 * 1000; // 1 hour
    const MAX_REQUESTS = 5;

  // store requests in a global map on the module so it survives across calls in the same lambda/container
  type RateInfo = { count: number; firstRequestAt: number };
  const g = globalThis as unknown as { __contactRateMap?: Map<string, RateInfo> };
  if (!g.__contactRateMap) g.__contactRateMap = new Map<string, RateInfo>();
  const rateMap: Map<string, RateInfo> = g.__contactRateMap as Map<string, RateInfo>;

    const entry = rateMap.get(ip);
    if (entry) {
      if (now - entry.firstRequestAt > WINDOW_MS) {
        // reset window
        rateMap.set(ip, { count: 1, firstRequestAt: now });
      } else {
        if (entry.count >= MAX_REQUESTS) {
          return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
        }
        entry.count += 1;
        rateMap.set(ip, entry);
      }
    } else {
      rateMap.set(ip, { count: 1, firstRequestAt: now });
    }

    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!RESEND_API_KEY) {
      return NextResponse.json({ error: 'Vercel Email API key not configured' }, { status: 500 });
    }

    // sanitize inputs to avoid header injection and trim values
    const name = String(body.name).replace(/[\r\n]/g, ' ').trim();
    const email = String(body.email).replace(/[\r\n]/g, ' ').trim();
    const messageText = String(body.message).trim();


    const res = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: DIANNE_EMAIL,
    subject: `Portfolio contact request from ${name}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><hr/><p>${messageText.replace(/\n/g, '<br/>')}</p>`,
    });

    if (res.error) {
      const text = await res.error.message;
      console.error('Vercel Email error', res.error.statusCode, text);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error('Error sending email via Vercel', err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message || 'Unknown error' }, { status: 500 });
  }
}
