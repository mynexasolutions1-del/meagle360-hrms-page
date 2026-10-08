/**
 * One-shot script: upload employee-database-template.xlsx to ImageKit
 * under the /hr-templates/ folder, then print the resulting URL.
 *
 * Usage:  node scripts/upload-employee-db-template.mjs
 */
import ImageKit from "imagekit";
import { readFileSync } from "fs";

// Read .env.local manually since dotenv isn't installed
const envContent = readFileSync(".env.local", "utf8");
const envVars = {};
for (const line of envContent.split("\n")) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const eqIdx = trimmed.indexOf("=");
  if (eqIdx === -1) continue;
  envVars[trimmed.slice(0, eqIdx)] = trimmed.slice(eqIdx + 1);
}

const imagekit = new ImageKit({
  publicKey: envVars.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
  privateKey: envVars.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: envVars.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
});

const filePath = "employee-database-template.xlsx";
const fileBuffer = readFileSync(filePath);

console.log(`Uploading ${filePath} to ImageKit...`);

const result = await imagekit.upload({
  file: fileBuffer,
  fileName: "Employee_Database_Template.xlsx",
  folder: "/hr-templates/",
  useUniqueFileName: true,
});

console.log("Upload successful!");
console.log("URL:", result.url);
console.log("FileId:", result.fileId);
console.log("Name:", result.name);
