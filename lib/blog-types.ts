export type Post = {
  id: string;
  title: string;
  slug: string;
  category: string | null;
  content: string;
  cover_image_url: string | null;
  cover_image_alt: string | null;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;
  canonical_url: string | null;
  faq_json: { q: string; a: string }[] | null;
  download_xlsx_url: string | null;
  download_xlsx_filename: string | null;
  download_sheets_url: string | null;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export function calculateReadingTime(content: string): number {
  if (!content) return 1;
  const words = content.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
