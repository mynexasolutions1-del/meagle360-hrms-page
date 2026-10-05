"use client";

import { useTransition } from "react";
import { deleteLead } from "../../admin/leads/actions";

export function DeleteLeadButton({ id, name }: { id: string; name: string }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm(`Delete the lead from "${name}"? This cannot be undone.`)) {
      startTransition(async () => {
        const res = await deleteLead(id);
        if (res.error) alert(res.error);
      });
    }
  }

  return (
    <button
      type="button"
      className="admin-icon-btn danger"
      disabled={isPending}
      onClick={handleDelete}
      aria-label={`Delete lead from ${name}`}
      title="Delete"
    >
      {isPending ? (
        <span className="admin-icon-btn-spinner" aria-hidden="true" />
      ) : (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
          <path d="M10 11v6" />
          <path d="M14 11v6" />
          <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
        </svg>
      )}
    </button>
  );
}
