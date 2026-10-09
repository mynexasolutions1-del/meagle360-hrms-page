"use client";

import { useEffect, useState } from "react";

export const COOKIE_CONSENT_KEY = "cookie-consent";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      // No stored choice yet — show the banner. If storage can't be read
      // (private browsing, blocked), show it too rather than assuming consent.
      if (!localStorage.getItem(COOKIE_CONSENT_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function handleChoice(choice: "accepted" | "declined") {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, choice);
    } catch {
      // ignore — worst case the banner reappears next visit
    }
    setVisible(false);
    if (choice === "accepted") {
      // Lets GoogleAnalytics (already mounted) start loading immediately,
      // without needing a page reload.
      window.dispatchEvent(new Event("cookie-consent-accepted"));
    }
  }

  if (!visible) return null;

  return (
    <div className="cookie-consent-card" role="dialog" aria-label="Cookie settings" aria-live="polite">
      <div className="cookie-consent-header">
        <div className="cookie-consent-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <circle cx="8.5" cy="10.5" r="0.75" fill="currentColor" stroke="none" />
            <circle cx="13" cy="15" r="0.75" fill="currentColor" stroke="none" />
            <circle cx="9" cy="16" r="0.75" fill="currentColor" stroke="none" />
          </svg>
        </div>
        <p className="cookie-consent-title">Cookie Settings</p>
      </div>

      <p className="cookie-consent-desc">
        We use cookies to improve your experience and understand how visitors use our site. You decide
        which cookies you're okay with.
      </p>

      <div className="cookie-consent-links">
        <a href="/privacy">Privacy Policy ↗</a>
      </div>

      <div className="cookie-consent-actions">
        <button type="button" className="btn btn-outline" onClick={() => handleChoice("declined")}>
          Essential Only
        </button>
        <button type="button" className="btn btn-primary" onClick={() => handleChoice("accepted")}>
          Accept All
        </button>
      </div>
    </div>
  );
}
