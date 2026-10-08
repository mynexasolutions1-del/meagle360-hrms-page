/**
 * Quick script: read the blog post content for free-employee-database-template
 * and print the section around "Documents checklist"
 */
import pg from "pg";
import { readFileSync } from "fs";

const envContent = readFileSync(".env.local", "utf8");
const env = {};
for (const line of envContent.split("\n")) {
  const t = line.trim();
  if (!t || t.startsWith("#")) continue;
  const i = t.indexOf("=");
  if (i === -1) continue;
  env[t.slice(0, i)] = t.slice(i + 1);
}

const client = new pg.Client({ connectionString: env.SUPABASE_DB_URL });
await client.connect();

const result = await client.query("SELECT content FROM posts WHERE slug = 'free-employee-database-template'");
if (result.rows.length > 0) {
  const content = result.rows[0].content;
  // Find "Documents checklist" section
  const idx = content.toLowerCase().indexOf("documents checklist");
  if (idx !== -1) {
    // Print 500 chars before and 1000 chars after
    const start = Math.max(0, idx - 200);
    const end = Math.min(content.length, idx + 1500);
    console.log("=== CONTENT AROUND 'Documents checklist' ===");
    console.log(content.slice(start, end));
    console.log("\n=== END ===");
  } else {
    console.log("'Documents checklist' not found in content. Printing first 3000 chars:");
    console.log(content.slice(0, 3000));
  }
} else {
  console.log("Blog post not found.");
}

await client.end();
