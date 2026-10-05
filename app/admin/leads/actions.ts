"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "../../../utils/supabase/server";

export async function deleteLead(id: string): Promise<{ error?: string }> {
  const supabase = await createClient();
  const { error } = await supabase.from("contact_submissions").delete().eq("id", id);

  if (error) return { error: error.message };

  revalidatePath("/admin/leads");
  return {};
}
