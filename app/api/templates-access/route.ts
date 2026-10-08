import { NextResponse } from "next/server";
import { waitUntil } from "@vercel/functions";
import { createClient } from "../../../utils/supabase/server";
import { escapeHtml, isEmailConfigured, sendLeadEmail } from "../../../lib/lead-email";
import { getHrTemplateBySlug } from "../../../lib/hr-templates";
import { PAYSLIP_TEMPLATE_FILES } from "../../../lib/payslip-template-files";

async function getFilesForSource(source: string) {
  if (source.startsWith("/templates/")) {
    const slug = source.replace("/templates/", "");
    const t = await getHrTemplateBySlug(slug);
    return t ? t.files : [];
  }
  if (source === "/tools/payslip-generator" || source === "/blog/salary-slip-format") {
    return PAYSLIP_TEMPLATE_FILES;
  }
  return [];
}

export async function POST(request: Request) {
  let body: { name?: string; email?: string; phone?: string; source?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const source = (body.source || "/templates").trim();

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Name, email, and phone are required." }, { status: 400 });
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  const files = await getFilesForSource(source);
  if (files.length === 0) {
    return NextResponse.json({ error: "No download is available for this page." }, { status: 404 });
  }

  let saved = false;
  try {
    const supabase = await createClient();
    const { error: dbError } = await supabase.from("template_downloads").insert({
      name,
      work_email: email,
      phone,
      source,
    });
    if (dbError) console.error("Failed to save HR templates access lead:", dbError);
    else saved = true;
  } catch (err) {
    console.error("Failed to save HR templates access lead:", err);
  }

  if (!saved) {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 502 });
  }

  if (isEmailConfigured()) {
    const internalEmail = sendLeadEmail({
      replyTo: email,
      subject: `New HR templates library access: ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`, `Source: ${source}`].join("\n"),
      html: `
        <h2>New HR templates library access</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Source:</strong> ${escapeHtml(source)}</p>
      `,
    });
    internalEmail.catch((err) => console.error("Failed to send internal lead email:", err));
    waitUntil(internalEmail.catch(() => {}));
  }

  // No cookie, no persisted access — this unlock is only for the current
  // page view. A fresh visit (reload, back button, returning later) always
  // shows the gate again.
  return NextResponse.json({ ok: true, files });
}
