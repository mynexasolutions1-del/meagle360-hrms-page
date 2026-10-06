import { createClient } from "../../utils/supabase/server";
import { logout } from "./actions";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="admin-main">
      <aside className="admin-sidebar">
        <a href="/" className="brand">
          <img src="/logo.png" alt="Meagle 360 logo" className="brand-mark" />
          Meagle<span>360</span>
        </a>
        {user && (
          <div className="admin-sidebar-nav">
            <span className="admin-user-email">{user.email}</span>
            <a href="/admin" style={{ color: "var(--primary)", fontWeight: 600 }}>
              Blog Posts
            </a>
            <a href="/admin/jobs" style={{ color: "var(--primary)", fontWeight: 600 }}>
              Jobs
            </a>
            <a href="/admin/applications" style={{ color: "var(--primary)", fontWeight: 600 }}>
              Applications
            </a>
            <a href="/admin/leads" style={{ color: "var(--primary)", fontWeight: 600 }}>
              Leads
            </a>
            <a href="/admin/template-downloads" style={{ color: "var(--primary)", fontWeight: 600 }}>
              Template Downloads
            </a>
            <form action={logout} style={{ marginTop: "auto" }}>
              <button type="submit" className="btn btn-outline" style={{ padding: "8px 16px", width: "100%" }}>
                Log out
              </button>
            </form>
          </div>
        )}
      </aside>
      <div className="admin-content">
        {children}
      </div>
    </div>
  );
}
