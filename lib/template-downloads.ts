import { createClient } from "../utils/supabase/server";

export type TemplateDownload = {
  id: string;
  name: string;
  work_email: string;
  company_size: string | null;
  phone: string | null;
  source: string;
  created_at: string;
};

export async function getTemplateDownloadsForAdmin(): Promise<TemplateDownload[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("template_downloads")
    .select("id, name, work_email, company_size, phone, source, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching template downloads:", error);
    return [];
  }
  return data;
}
