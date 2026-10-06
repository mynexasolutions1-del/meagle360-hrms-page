import nodemailer from "nodemailer";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@meagle360.com";

// Reused across requests on a warm server so repeat sends skip the
// connect/TLS/auth handshake.
let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter | null {
  if (transporter) return transporter;
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) return null;
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    pool: true,
  });
  return transporter;
}

export function isEmailConfigured(): boolean {
  return getTransporter() !== null;
}

export function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendLeadEmail(mail: {
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}) {
  const t = getTransporter();
  if (!t) throw new Error("Missing SMTP configuration environment variables.");
  const fromName = process.env.SMTP_FROM_NAME || "Meagle 360 Website";
  const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;
  await t.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: TO_EMAIL,
    replyTo: mail.replyTo,
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
  });
}

// Unlike sendLeadEmail (always sent to the internal team inbox), this sends
// outward to the visitor themselves — used for "email me the download
// links" style flows, where the recipient is whoever just filled the form.
export async function sendVisitorEmail(mail: {
  to: string;
  subject: string;
  text: string;
  html: string;
}) {
  const t = getTransporter();
  if (!t) throw new Error("Missing SMTP configuration environment variables.");
  const fromName = process.env.SMTP_FROM_NAME || "Meagle 360";
  const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;
  await t.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: mail.to,
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
  });
}
