"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "../../../utils/supabase/server";

export async function deleteTemplateDownload(id: string): Promise<{ error?: string }> {
  const supabase = await createClient();
  const { error } = await supabase.from("template_downloads").delete().eq("id", id);

  if (error) return { error: error.message };

  revalidatePath("/admin/template-downloads");
  return {};
}
