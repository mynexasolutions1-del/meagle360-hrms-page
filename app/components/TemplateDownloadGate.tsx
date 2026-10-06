"use client";

import { useEffect, useState } from "react";

type Links = { xlsxUrl: string | null; xlsxFilename: string; sheetsUrl: string | null };

const COMPANY_SIZES = ["1-10", "11-50", "51-200", "201-500", "500+"];

function storageKey(source: string) {
  return `template-download:${source}`;
}

export function TemplateDownloadGate({ source, heading }: { source: string; heading?: string }) {
  const [links, setLinks] = useState<Links | null>(null);
  const [name, setName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [companySize, setCompanySize] = useState(COMPANY_SIZES[0]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // If another instance of this gate on the same page already unlocked the
  // download (or the visitor unlocked it earlier this session), skip the
  // form and go straight to the links — no reason to ask twice.
  useEffect(() => {
    try {
      const cached = sessionStorage.getItem(storageKey(source));
      if (cached) setLinks(JSON.parse(cached));
    } catch {
      // sessionStorage can throw in private-browsing contexts — fine to ignore.
    }
    function onUnlock(e: Event) {
      const detail = (e as CustomEvent<{ source: string; links: Links }>).detail;
      if (detail?.source === source) setLinks(detail.links);
    }
    window.addEventListener("template-download-unlocked", onUnlock);
    return () => window.removeEventListener("template-download-unlocked", onUnlock);
  }, [source]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/template-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, work_email: workEmail, company_size: companySize, source }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
      const unlocked: Links = { xlsxUrl: data.xlsxUrl, xlsxFilename: data.xlsxFilename, sheetsUrl: data.sheetsUrl };
      setLinks(unlocked);
      try {
        sessionStorage.setItem(storageKey(source), JSON.stringify(unlocked));
      } catch {
        // ignore
      }
      window.dispatchEvent(
        new CustomEvent("template-download-unlocked", { detail: { source, links: unlocked } })
      );
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setSubmitting(false);
  }

  if (links) {
    return (
      <div className="template-gate template-gate-unlocked">
        <p className="template-gate-title">✓ Your download is ready</p>
        <div className="template-gate-links">
          {links.xlsxUrl && (
            <a href={links.xlsxUrl} download={links.xlsxFilename} className="btn btn-primary">
              Download .xlsx
            </a>
          )}
          {links.sheetsUrl && (
            <a href={links.sheetsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Make a copy in Google Sheets
            </a>
          )}
        </div>
        <p className="template-gate-hint">We've also emailed these links to you.</p>
      </div>
    );
  }

  return (
    <div className="template-gate">
      <p className="template-gate-title">{heading || "Get the free template"}</p>
      <form className="template-gate-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Work email"
          required
          value={workEmail}
          onChange={(e) => setWorkEmail(e.target.value)}
        />
        <select value={companySize} onChange={(e) => setCompanySize(e.target.value)}>
          {COMPANY_SIZES.map((size) => (
            <option key={size} value={size}>
              {size} employees
            </option>
          ))}
        </select>
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? "Sending..." : "Get the template"}
        </button>
      </form>
      {error && <p className="template-gate-error">{error}</p>}
      <p className="template-gate-consent">
        By submitting, you agree to be contacted about Meagle 360. See our{" "}
        <a href="/privacy">privacy policy</a>.
      </p>
    </div>
  );
}
