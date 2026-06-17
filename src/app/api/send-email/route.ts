import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const TO_EMAIL = "sal@growwithnextify.com";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, requirements } = (await req.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      requirements?: string;
    };

    // Validation
    const cleanName = (name ?? "").trim();
    const cleanEmail = (email ?? "").trim();
    const cleanPhone = (phone ?? "").trim();
    const cleanRequirements = (requirements ?? "").trim();

    if (!cleanRequirements) {
      return NextResponse.json(
        { ok: false, error: "Please describe your project requirements." },
        { status: 400 }
      );
    }

    if (!cleanEmail && !cleanPhone) {
      return NextResponse.json(
        { ok: false, error: "Please provide either an email or a phone number so we can reach you." },
        { status: 400 }
      );
    }

    if (cleanEmail && !isValidEmail(cleanEmail)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // SMTP transporter — config from env
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "587", 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || user;

    if (!host || !user || !pass) {
      console.error("SMTP environment variables are not configured.");
      return NextResponse.json(
        { ok: false, error: "Email service is not configured. Please contact us directly." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const subject = `New Lead — ${cleanName || cleanEmail || cleanPhone}`;

    const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>${escapeHtml(subject)}</title></head>
<body style="margin:0;padding:24px;background:#F1F5F9;font-family:Arial,Helvetica,sans-serif;color:#0F172A;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
    <tr>
      <td style="background:#196d24;padding:20px 28px;">
        <h1 style="margin:0;color:#ffffff;font-size:18px;font-weight:700;letter-spacing:0.3px;">New Lead</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:28px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          <tr><td style="padding:6px 0;color:#64748B;font-size:13px;font-weight:600;width:80px;">Name</td><td style="padding:6px 0;font-size:14px;color:#0F172A;">${escapeHtml(cleanName || "—")}</td></tr>
          <tr><td style="padding:6px 0;color:#64748B;font-size:13px;font-weight:600;">Email</td><td style="padding:6px 0;font-size:14px;">${cleanEmail ? `<a href="mailto:${escapeHtml(cleanEmail)}" style="color:#1E5D99;text-decoration:none;">${escapeHtml(cleanEmail)}</a>` : `<span style="color:#0F172A;">—</span>`}</td></tr>
          <tr><td style="padding:6px 0;color:#64748B;font-size:13px;font-weight:600;">Phone</td><td style="padding:6px 0;font-size:14px;">${cleanPhone ? `<a href="tel:${escapeHtml(cleanPhone)}" style="color:#1E5D99;text-decoration:none;">${escapeHtml(cleanPhone)}</a>` : `<span style="color:#0F172A;">—</span>`}</td></tr>
        </table>
        <p style="margin:22px 0 8px;color:#64748B;font-size:13px;font-weight:600;">Requirements</p>
        <div style="background:#F8FAFC;border-left:3px solid #196d24;padding:14px 16px;font-size:14px;line-height:1.6;color:#0F172A;white-space:pre-wrap;border-radius:4px;">${escapeHtml(cleanRequirements)}</div>
      </td>
    </tr>
    <tr>
      <td style="padding:14px 28px;background:#F8FAFC;border-top:1px solid #E2E8F0;font-size:11px;color:#94A3B8;text-align:center;">
        Sent from growwithnextify.com
      </td>
    </tr>
  </table>
</body>
</html>`;

    const text = [
      "New Project Inquiry — GrowWithNextify",
      "",
      `Name:  ${cleanName || "—"}`,
      `Email: ${cleanEmail || "—"}`,
      `Phone: ${cleanPhone || "—"}`,
      "",
      "Project Requirements:",
      cleanRequirements,
    ].join("\n");

    await transporter.sendMail({
      from,
      to: TO_EMAIL,
      replyTo: cleanEmail || undefined,
      subject,
      html,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("send-email error:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send your message. Please try again later." },
      { status: 500 }
    );
  }
}
