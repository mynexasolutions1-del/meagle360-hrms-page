import { NextResponse } from "next/server";
import { waitUntil } from "@vercel/functions";
import { createClient } from "../../../utils/supabase/server";
import { getPublishedPostBySlug } from "../../../lib/posts";
import { escapeHtml, isEmailConfigured, sendLeadEmail, sendVisitorEmail } from "../../../lib/lead-email";

export async function POST(request: Request) {
  let body: {
    name?: string;
    work_email?: string;
    company_size?: string;
    source?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const workEmail = (body.work_email || "").trim();
  const companySize = (body.company_size || "").trim();
  const source = (body.source || "").trim();

  if (!name || !workEmail || !source) {
    return NextResponse.json({ error: "Name, work email, and source are required." }, { status: 400 });
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(workEmail)) {
    return NextResponse.json({ error: "Enter a valid work email." }, { status: 400 });
  }

  // The actual file links come from the post record itself, looked up by
  // slug server-side — never trust a client-supplied download URL.
  const post = await getPublishedPostBySlug(source);
  if (!post || (!post.download_xlsx_url && !post.download_sheets_url)) {
    return NextResponse.json({ error: "No download is available for this page." }, { status: 404 });
  }

  const links = {
    xlsxUrl: post.download_xlsx_url,
    xlsxFilename: post.download_xlsx_filename || "template.xlsx",
    sheetsUrl: post.download_sheets_url,
  };

  let saved = false;
  try {
    const supabase = await createClient();
    const { error: dbError } = await supabase.from("template_downloads").insert({
      name,
      work_email: workEmail,
      company_size: companySize || null,
      source,
    });
    if (dbError) console.error("Failed to save template download lead:", dbError);
    else saved = true;
  } catch (err) {
    console.error("Failed to save template download lead:", err);
  }

  if (!saved) {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 502 });
  }

  // Both emails are best-effort — the visitor already gets the links in the
  // response either way, so a slow/failed email shouldn't block or fail the request.
  if (isEmailConfigured()) {
    const internalEmail = sendLeadEmail({
      replyTo: workEmail,
      subject: `New template download: ${name}`,
      text: [
        `Name: ${name}`,
        `Work email: ${workEmail}`,
        `Company size: ${companySize || "-"}`,
        `Source: ${source}`,
      ].join("\n"),
      html: `
        <h2>New template download</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Work email:</strong> ${escapeHtml(workEmail)}</p>
        <p><strong>Company size:</strong> ${escapeHtml(companySize || "-")}</p>
        <p><strong>Source:</strong> ${escapeHtml(source)}</p>
      `,
    });
    internalEmail.catch((err) => console.error("Failed to send internal lead email:", err));
    waitUntil(internalEmail.catch(() => {}));

    const linkRows = [
      links.xlsxUrl ? `Excel template: ${links.xlsxUrl}` : null,
      links.sheetsUrl ? `Google Sheets copy: ${links.sheetsUrl}` : null,
    ].filter(Boolean);
    const linkRowsHtml = [
      links.xlsxUrl ? `<p><a href="${links.xlsxUrl}">Download the Excel template</a></p>` : "",
      links.sheetsUrl ? `<p><a href="${links.sheetsUrl}">Make your own copy in Google Sheets</a></p>` : "",
    ].join("");
    const visitorEmail = sendVisitorEmail({
      to: workEmail,
      subject: "Your free employee database template",
      text: `Hi ${name},\n\nHere's your download, as requested:\n\n${linkRows.join("\n")}\n\n— Meagle 360`,
      html: `<p>Hi ${escapeHtml(name)},</p><p>Here's your download, as requested:</p>${linkRowsHtml}<p>— Meagle 360</p>`,
    });
    visitorEmail.catch((err) => console.error("Failed to send visitor download email:", err));
    waitUntil(visitorEmail.catch(() => {}));
  }

  return NextResponse.json({ ok: true, ...links });
}
