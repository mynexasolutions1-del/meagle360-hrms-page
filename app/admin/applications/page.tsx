import { getApplicationsForAdmin, getAllJobsForAdmin } from "../../../lib/jobs";
import { DeleteApplicationButton } from "../../components/admin/DeleteApplicationButton";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function getJobTitle(app: { jobs: unknown }): string {
  const jobs = app.jobs as { title: string } | { title: string }[] | null;
  if (!jobs) return "Unknown Job";
  return (Array.isArray(jobs) ? jobs[0]?.title : jobs.title) || "Unknown Job";
}

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default async function AdminApplicationsPage({ searchParams }: { searchParams: { job_id?: string } }) {
  const applications = await getApplicationsForAdmin(searchParams.job_id);
  const jobs = await getAllJobsForAdmin();

  return (
    <div className="admin-container">
      <div className="admin-header-row">
        <h1>Applications</h1>
        <span className="admin-count-badge">
          {applications.length} {applications.length === 1 ? "application" : "applications"}
        </span>
      </div>

      <form
        method="GET"
        action="/admin/applications"
        className="admin-filter-row"
      >
        <select
          name="job_id"
          defaultValue={searchParams.job_id || ""}
          className="admin-filter-select"
        >
          <option value="">All Jobs</option>
          {jobs.map(job => (
            <option key={job.id} value={job.id}>{job.title}</option>
          ))}
        </select>
        <button type="submit" className="btn btn-outline" style={{ padding: "10px 20px" }}>Filter</button>
      </form>

      <div className="admin-card">
        {applications.length === 0 ? (
          <div className="admin-empty">No applications found.</div>
        ) : (
          <div className="admin-table-scroll">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Applicant</th>
                  <th>Job</th>
                  <th>Expected Salary</th>
                  <th>Date Applied</th>
                  <th>CV</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id}>
                    <td>
                      <div className="admin-applicant-cell">
                        <div className="admin-applicant-avatar">{initials(app.name)}</div>
                        <div>
                          <div className="admin-title-cell" style={{ fontSize: 15 }}>{app.name}</div>
                          <div style={{ fontSize: 13, color: "var(--text-2)" }}>{app.email}</div>
                          {app.phone && <div style={{ fontSize: 13, color: "var(--text-2)" }}>{app.phone}</div>}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="admin-job-badge">{getJobTitle(app)}</span>
                    </td>
                    <td>{app.expected_salary || "-"}</td>
                    <td>{formatDate(app.created_at)}</td>
                    <td>
                      <a
                        href={app.cv_url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline"
                        style={{ padding: "4px 8px", fontSize: 12 }}
                      >
                        View PDF
                      </a>
                    </td>
                    <td>
                      <div className="admin-row-actions">
                        <DeleteApplicationButton id={app.id} name={app.name} />
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
