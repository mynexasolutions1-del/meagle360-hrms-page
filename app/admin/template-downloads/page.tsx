import { getTemplateDownloadsForAdmin } from "../../../lib/template-downloads";
import { DeleteTemplateDownloadButton } from "../../components/admin/DeleteTemplateDownloadButton";

// Older leads (the free-employee-database-template gate) store just a blog
// slug in `source`; newer leads (the /templates library gate) store a full
// path like "/templates/offer-letter" so it's self-describing either way.
function sourceHref(source: string) {
  return source.startsWith("/") ? source : `/blog/${source}`;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default async function AdminTemplateDownloadsPage() {
  const downloads = await getTemplateDownloadsForAdmin();

  return (
    <div className="admin-container">
      <div className="admin-header-row">
        <h1>Template Downloads</h1>
        <span className="admin-count-badge">
          {downloads.length} {downloads.length === 1 ? "lead" : "leads"}
        </span>
      </div>

      <div className="admin-card">
        {downloads.length === 0 ? (
          <div className="admin-empty">No template downloads yet.</div>
        ) : (
          <div className="admin-table-scroll">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Work Email</th>
                  <th>Phone</th>
                  <th>Company Size</th>
                  <th>Source Page</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {downloads.map((d) => (
                  <tr key={d.id}>
                    <td className="admin-title-cell">{d.name}</td>
                    <td>
                      <a href={`mailto:${d.work_email}`}>{d.work_email}</a>
                    </td>
                    <td>{d.phone ? <a href={`tel:${d.phone}`}>{d.phone}</a> : "-"}</td>
                    <td>{d.company_size || "-"}</td>
                    <td>
                      <a href={sourceHref(d.source)} target="_blank" rel="noreferrer">
                        {d.source}
                      </a>
                    </td>
                    <td>{formatDate(d.created_at)}</td>
                    <td>
                      <div className="admin-row-actions">
                        <DeleteTemplateDownloadButton id={d.id} name={d.name} />
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
