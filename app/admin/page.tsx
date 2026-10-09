import { getAllPostsForAdmin } from "../../lib/posts";
import { DeletePostButton } from "../components/admin/DeletePostButton";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function AdminDashboardPage() {
  const posts = await getAllPostsForAdmin();

  return (
    <div className="admin-container">
      <div className="admin-header-row">
        <h1>Blog posts</h1>
        <a href="/admin/posts/new" className="btn btn-primary" style={{ borderRadius: 10 }}>
          New Post
        </a>
      </div>

      <div className="admin-card">
        {posts.length === 0 ? (
          <div className="admin-empty">No posts yet. Create your first one.</div>
        ) : (
          <div className="admin-table-scroll">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Created</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td className="admin-title-cell">
                      <a href={`/admin/posts/${post.id}/edit`} style={{ textDecoration: "none", color: "inherit" }}>
                        {post.title}
                      </a>
                    </td>
                    <td>
                      <span className={`admin-status ${post.published ? "published" : "draft"}`}>
                        {post.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td style={{ whiteSpace: "nowrap", color: "var(--text-2)", fontSize: "14px" }}>
                      {formatDate(post.created_at)}
                    </td>
                    <td>
                      <div className="admin-row-actions">
                        <a href={`/admin/posts/${post.id}/edit`}>Edit</a>
                        {post.published && (
                          <a href={`/blog/${post.slug}`} target="_blank" rel="noreferrer">
                            View
                          </a>
                        )}
                        <DeletePostButton id={post.id} slug={post.slug} title={post.title} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
