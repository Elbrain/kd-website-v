import { NextResponse } from "next/server";

/**
 * Enquiry endpoint for both conversion flows (personal training + rooms).
 * Anti-spam: honeypot field + minimum-fill-time gate.
 *
 * Delivery: if RESEND_API_KEY + CONTACT_FORM_TO are configured the enquiry is
 * emailed via Resend; otherwise it is logged server-side (visible in Vercel
 * function logs) so the site works out of the box without secrets.
 */

interface EnquiryPayload {
  mode?: "pt" | "rooms";
  website?: string; // honeypot
  elapsedMs?: number;
  name?: string;
  email?: string;
  [key: string]: unknown;
}

export async function POST(req: Request) {
  let body: EnquiryPayload;
  try {
    body = (await req.json()) as EnquiryPayload;
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  // Honeypot filled or form submitted implausibly fast → pretend success.
  if (body.website || (typeof body.elapsedMs === "number" && body.elapsedMs < 3000)) {
    return NextResponse.json({ ok: true });
  }

  if (!body.name || !body.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(body.email))) {
    return NextResponse.json({ error: "Name and a valid email are required" }, { status: 400 });
  }

  const mode = body.mode === "rooms" ? "rooms" : "pt";
  const subject =
    mode === "rooms"
      ? `Room rental enquiry — ${body.name}`
      : `Personal training enquiry — ${body.name}`;

  const lines = Object.entries(body)
    .filter(([k]) => !["website", "elapsedMs"].includes(k))
    .map(([k, v]) => `${k}: ${String(v)}`)
    .join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_FORM_TO;

  if (apiKey && to) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FORM_FROM ?? "enquiries@kdpersonaltraining.co.uk",
        to: [to],
        reply_to: body.email,
        subject,
        text: lines,
      }),
    });
    if (!res.ok) {
      console.error("Resend delivery failed", res.status, await res.text());
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    }
  } else {
    // No email provider configured — log for retrieval and succeed.
    console.log(`[enquiry:${mode}] ${subject}\n${lines}`);
  }

  return NextResponse.json({ ok: true });
}
