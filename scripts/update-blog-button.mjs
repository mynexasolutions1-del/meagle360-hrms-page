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
  let content = result.rows[0].content;
  
  const searchStr = `<li>Offer letter issued (Y/N)</li>\n</ul>`;
  const insertStr = `\n<p><a href="/templates/employee-database-template" class="btn btn-primary" style="margin-top: 16px; display: inline-block;">View and download the template</a></p>`;
  
  if (content.includes(searchStr)) {
    content = content.replace(searchStr, searchStr + insertStr);
    
    await client.query("UPDATE posts SET content = $1 WHERE slug = 'free-employee-database-template'", [content]);
    console.log("Successfully updated the blog post content.");
  } else {
    console.log("Could not find the target string to replace.");
  }
} else {
  console.log("Blog post not found.");
}

await client.end();
