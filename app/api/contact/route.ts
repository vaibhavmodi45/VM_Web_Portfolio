import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const webhookUrl = process.env.CONTACT_SHEET_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: 'Missing CONTACT_SHEET_WEBHOOK_URL environment variable.' },
      { status: 500 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  const name = String(payload.name || '').trim();
  const email = String(payload.email || '').trim();
  const message = String(payload.message || '').trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: 'Name, email, and message are required.' },
      { status: 400 }
    );
  }

  const sheetResponse = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
      source: 'portfolio-contact-form',
    }),
  });

  if (!sheetResponse.ok) {
    const errorText = await sheetResponse.text().catch(() => 'Unable to read error response.');

    return NextResponse.json(
      { ok: false, error: errorText || 'Failed to store contact message.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}