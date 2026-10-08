import { createClient } from "../utils/supabase/server";

export type HrTemplateFile = {
  format: string; // "docx" | "pdf" | "xlsx" | "csv"
  label: string; // "Word (.docx)"
  url: string;
  filename: string;
};

export type HrTemplateRelatedLink = { label: string; href: string };

export type HrTemplate = {
  id: string;
  slug: string;
  title: string;
  category: string;
  seo_title: string | null;
  seo_description: string | null;
  intro: string;
  content: string;
  faq_json: { q: string; a: string }[] | null;
  files: HrTemplateFile[];
  related_links: HrTemplateRelatedLink[] | null;
  published: boolean;
  created_at: string;
  updated_at: string;
};

export async function getPublishedHrTemplates(): Promise<HrTemplate[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("hr_templates")
    .select("*")
    .eq("published", true)
    .order("title", { ascending: true });

  if (error) {
    console.error("Error fetching hr_templates:", error);
    return [];
  }
  return data;
}

export async function getHrTemplateBySlug(slug: string): Promise<HrTemplate | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("hr_templates")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error) {
    console.error("Error fetching hr_template:", error);
    return null;
  }
  return data;
}
