/**
 * One-shot script: insert the "Employee Database Template" into the
 * hr_templates table in Supabase, and update the blog post
 * "free-employee-database-template" with the download URL.
 *
 * Usage:  node scripts/insert-employee-db-template.mjs
 */
import pg from "pg";
import { readFileSync } from "fs";

// Read .env.local
const envContent = readFileSync(".env.local", "utf8");
const env = {};
for (const line of envContent.split("\n")) {
  const t = line.trim();
  if (!t || t.startsWith("#")) continue;
  const i = t.indexOf("=");
  if (i === -1) continue;
  env[t.slice(0, i)] = t.slice(i + 1);
}

const dbUrl = env.SUPABASE_DB_URL;
if (!dbUrl) { console.error("SUPABASE_DB_URL not found in .env.local"); process.exit(1); }

const client = new pg.Client({ connectionString: dbUrl });
await client.connect();
console.log("Connected to Supabase.");

const IMAGEKIT_URL = "https://ik.imagekit.io/njhzvqrx2/hr-templates/Employee_Database_Template_0VG951VyM.xlsx";

// ── 1. Insert into hr_templates ──
const slug = "employee-database-template";
const title = "Free Employee Database Template (Excel & Google Sheets)";
const category = "Trackers & Forms";
const seo_title = "Free Employee Database Template (Excel & Google Sheets) — Download Now";
const seo_description =
  "Download a free employee database template in Excel (.xlsx). Track employee details, departments, documents, and more — ready to use in Excel or Google Sheets.";
const intro = `<p><strong>An employee database template organizes every employee's core information — personal details, department, designation, joining date, contact information, and document status — in one spreadsheet, so you're not searching through email threads and scattered files when you need someone's details.</strong> Download the free Excel version below, or read on for what it should include and when to move beyond a spreadsheet.</p>`;

const content = `
<h2>What This Template Includes</h2>
<ul>
<li>Employee details: full name, employee ID, date of birth, gender, contact number, personal and work email</li>
<li>Employment info: department, designation, date of joining, employment type (full-time, contract, intern), reporting manager</li>
<li>Compensation: CTC, bank account details (for payroll reference)</li>
<li>Emergency contact: name, relationship, phone number</li>
<li>Documents checklist: ID proof submitted (Y/N), address proof submitted (Y/N), educational certificates submitted (Y/N), offer letter issued (Y/N)</li>
<li>Status: Active / Resigned / Terminated, with last working date where applicable</li>
</ul>

<h2>How to Use This Template</h2>
<ol>
<li>Download the Excel file and fill in your current employees' details — start with the fields that matter most for day-to-day HR operations (name, department, contact, joining date)</li>
<li>Use the documents checklist columns to track onboarding paperwork completion — this is especially useful during the first week of a new hire</li>
<li>Keep the employee ID column consistent with whatever internal numbering you already use (or start one if you haven't)</li>
<li>Update the status column promptly when someone leaves — an employee database that still shows resigned employees as "Active" quickly becomes untrustworthy</li>
<li>If you're using Google Sheets, upload this file to Google Drive and open it as a Google Sheet for real-time collaboration</li>
</ol>

<h2>Who This Template Is For</h2>
<p>This template is built for Indian startups and small businesses (typically 5–100 employees) that need a central employee register but aren't ready for a full HRMS yet. It's also useful as a migration checklist when you <em>are</em> moving to software — you can fill this in first, then import it.</p>

<h2>Documents Checklist: What to Track</h2>
<p>The template includes a built-in documents checklist so you can track onboarding paperwork status for each employee at a glance:</p>
<ul>
<li><strong>ID proof submitted (Y/N)</strong> — Aadhaar, PAN, passport, or voter ID</li>
<li><strong>Address proof submitted (Y/N)</strong> — utility bill, bank statement, or Aadhaar</li>
<li><strong>Educational certificates submitted (Y/N)</strong> — degree certificates, marksheets</li>
<li><strong>Offer letter issued (Y/N)</strong> — confirms the formal offer has been sent and accepted</li>
</ul>
<p>Keeping these columns updated means you'll never have to chase an employee three months after joining for a document you should have collected in week one.</p>

<h2>When a Spreadsheet Stops Being Enough</h2>
<p>This template works well up to about 50–80 employees. Beyond that, or once multiple people need to update it simultaneously, version conflicts and accidental overwrites start becoming a real problem. That's the point where a proper <a href="/features/employee-database-software">employee database system</a> — one that connects to attendance, leave and payroll automatically — starts saving more time than a spreadsheet costs. See our <a href="/blog/free-employee-database-template">detailed guide</a> for a longer breakdown of when to make that switch.</p>

<p><em>Disclaimer: this is a general template, not legal advice. Review it against your company policy and applicable law before use.</em></p>`;

const faq = [
  {
    q: "What should an employee database include?",
    a: "At minimum: employee name, ID, department, designation, date of joining, contact details, employment type, reporting manager, and current status (active/resigned). Adding a documents checklist (ID proof, address proof, certificates, offer letter) helps track onboarding completion.",
  },
  {
    q: "Can I use this template in Google Sheets?",
    a: "Yes — download the Excel file, upload it to Google Drive, and open it with Google Sheets. All columns and formatting carry over. You can then share it with your team for real-time editing.",
  },
  {
    q: "How many employees can this spreadsheet handle?",
    a: "It works well for teams up to about 50–80 employees. Beyond that, version conflicts and the need for connected systems (attendance, leave, payroll) usually make a proper HRMS more practical.",
  },
  {
    q: "Is this template suitable for Indian companies?",
    a: "Yes, it's designed with Indian HR requirements in mind — including fields for PAN, Aadhaar reference, CTC structure, and document types commonly collected during onboarding in India.",
  },
  {
    q: "How do I track document submission status?",
    a: "The template includes Y/N columns for ID proof, address proof, educational certificates, and offer letter. Mark each as Y once the document has been received and verified — this gives you an at-a-glance view of onboarding completeness.",
  },
];

const files = [
  {
    format: "xlsx",
    label: "Excel (.xlsx)",
    url: IMAGEKIT_URL,
    filename: "Employee Database Template.xlsx",
  },
];

const related_links = [
  { label: "Employee Database Software", href: "/features/employee-database-software" },
  { label: "Onboarding Checklist Template", href: "/templates/onboarding-checklist" },
  { label: "Appointment Letter Template", href: "/templates/appointment-letter" },
];

// Check if already exists
const existing = await client.query("SELECT id FROM hr_templates WHERE slug = $1", [slug]);
if (existing.rows.length > 0) {
  console.log("Template already exists, updating...");
  await client.query(
    `UPDATE hr_templates
     SET title = $1, category = $2, seo_title = $3, seo_description = $4,
         intro = $5, content = $6, faq_json = $7, files = $8,
         related_links = $9, published = true, updated_at = now()
     WHERE slug = $10`,
    [title, category, seo_title, seo_description, intro, content, JSON.stringify(faq), JSON.stringify(files), JSON.stringify(related_links), slug]
  );
  console.log("✅ hr_templates row updated.");
} else {
  await client.query(
    `INSERT INTO hr_templates (slug, title, category, seo_title, seo_description, intro, content, faq_json, files, related_links, published)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, true)`,
    [slug, title, category, seo_title, seo_description, intro, content, JSON.stringify(faq), JSON.stringify(files), JSON.stringify(related_links)]
  );
  console.log("✅ hr_templates row inserted.");
}

// ── 2. Update the blog post to include the download URL ──
const blogSlug = "free-employee-database-template";
const blogResult = await client.query("SELECT id, download_xlsx_url FROM posts WHERE slug = $1", [blogSlug]);
if (blogResult.rows.length > 0) {
  const current = blogResult.rows[0];
  if (!current.download_xlsx_url) {
    await client.query(
      `UPDATE posts
       SET download_xlsx_url = $1, download_xlsx_filename = $2, updated_at = now()
       WHERE slug = $3`,
      [IMAGEKIT_URL, "Employee Database Template.xlsx", blogSlug]
    );
    console.log("✅ Blog post download_xlsx_url updated.");
  } else {
    console.log(`ℹ️  Blog post already has download_xlsx_url: ${current.download_xlsx_url}`);
  }
} else {
  console.log("⚠️  Blog post with slug 'free-employee-database-template' not found.");
}

await client.end();
console.log("\nDone!");
