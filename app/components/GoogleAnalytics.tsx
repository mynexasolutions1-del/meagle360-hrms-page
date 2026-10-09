"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { COOKIE_CONSENT_KEY } from "./CookieConsentBanner";

// Loads gtag.js only once the visitor has accepted the cookie banner —
// either already (stored from a previous visit) or just now, in which case
// CookieConsentBanner dispatches "cookie-consent-accepted" and this picks
// it up without needing a page reload. Declining, or not having answered
// yet, means gtag.js never loads at all.
export function GoogleAnalytics({ gaId, adsId }: { gaId: string; adsId?: string }) {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted") setConsented(true);
    } catch {
      // can't read storage — stay unconsented, same as "not answered yet"
    }
    function onAccept() {
      setConsented(true);
    }
    window.addEventListener("cookie-consent-accepted", onAccept);
    return () => window.removeEventListener("cookie-consent-accepted", onAccept);
  }, []);

  if (!consented) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
          ${adsId ? `gtag('config', '${adsId}');` : ""}
        `}
      </Script>
    </>
  );
}
