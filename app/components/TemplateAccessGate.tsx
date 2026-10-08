"use client";

import { useState } from "react";

type AccessFile = { format: string; label: string; url: string; filename: string };

export function TemplateAccessGate({ source }: { source: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  // Revealed files live only in this component's state — nothing is stored
  // (no cookie, no localStorage), so a reload or a later visit always shows
  // the form again.
  const [files, setFiles] = useState<AccessFile[] | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/templates-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, source }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
      setFiles(data.files || []);
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setSubmitting(false);
  }

  if (files) {
    return (
      <div className="template-gate template-gate-unlocked">
        <p className="template-gate-title">✓ You have access — download below</p>
        <div className="template-gate-links">
          {files.map((f) => (
            <a key={f.url} href={f.url} download={f.filename} className="btn btn-primary">
              {f.label}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="template-gate">
      <p className="template-gate-title">Get free access to the HR templates library</p>
      <p className="template-gate-subtitle">
        One quick form unlocks every template on Meagle 360 — not just this one.
      </p>
      <form className="template-gate-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your name" required value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="tel" placeholder="Phone number" required value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? "Unlocking..." : "Get free access"}
        </button>
      </form>
      {error && <p className="template-gate-error">{error}</p>}
      <p className="template-gate-consent">
        By submitting, you agree to be contacted about Meagle 360. See our <a href="/privacy">privacy policy</a>.
      </p>
    </div>
  );
}
