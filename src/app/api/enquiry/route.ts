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

  const fields = Object.entries(body).filter(
    ([k, v]) => !["website", "elapsedMs"].includes(k) && v != null && v !== "",
  );

  // Plain-text fallback (multipart with the HTML below).
  const lines = fields.map(([k, v]) => `${k}: ${String(v)}`).join("\n");

  // Tidy, on-brand HTML email. Values are user input — escape before embedding.
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const label = (k: string) =>
    k.replace(/[_-]/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (c) => c.toUpperCase());
  const rows = fields
    .map(
      ([k, v]) =>
        `<tr><td style="padding:9px 0;color:#82683f;font-weight:bold;width:38%;vertical-align:top">${esc(label(k))}</td><td style="padding:9px 0;border-bottom:1px solid #f0ece2;color:#292621">${esc(String(v))}</td></tr>`,
    )
    .join("");
  const heading = mode === "rooms" ? "New room rental enquiry" : "New personal training enquiry";
  const html = `<!doctype html><html><body style="margin:0;background:#f7f4ed"><div style="background:#f7f4ed;padding:24px 16px;font-family:Arial,Helvetica,sans-serif">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e3dccd">
      <div style="background:#1c1712;padding:22px 28px">
        <div style="color:#c9ad7d;font-size:11px;letter-spacing:3px;text-transform:uppercase">KD Personal Training</div>
        <div style="color:#f7f4ed;font-size:19px;margin-top:6px">${heading}</div>
      </div>
      <div style="padding:22px 28px">
        <table style="width:100%;border-collapse:collapse;font-size:15px">${rows}</table>
        <p style="margin:18px 0 0;font-size:13px;color:#524d45">Reply to this email to respond to ${esc(String(body.name))} directly.</p>
      </div>
      <div style="background:#f7f4ed;padding:14px 28px;border-top:1px solid #e3dccd;font-size:12px;color:#8a8175">Sent from the kdpersonaltraining.co.uk enquiry form</div>
    </div>
  </div></body></html>`;

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
        html,
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
