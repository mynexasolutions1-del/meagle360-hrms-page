import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import { CookieConsentBanner } from "./components/CookieConsentBanner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const SITE_URL = "https://www.meagle360.com";
const SITE_TITLE = "HRMS & HRIS Software in India for Growing Businesses | Meagle 360";
const SITE_DESCRIPTION =
  "All-in-one HRMS (HRIS) for attendance, leave, payroll and employee self-service. Flat ₹149/user/month, no setup fee, live in 5 days. Book a free demo.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Meagle 360",
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: "Nexa Solutions", url: "https://nexa-solutions.in" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Meagle 360",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: "/hrms-image.png", width: 1200, height: 630, alt: "Meagle 360 HRMS dashboard" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/hrms-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <body>
        {children}
        {/* Loads gtag.js only when a real GA4 ID is configured AND the
            visitor has accepted cookies via CookieConsentBanner below — see
            .env.example. Conversion events themselves fire from /thank-you
            via lib/analytics.ts, which is already a safe no-op pre-consent. */}
        {GA_ID && <GoogleAnalytics gaId={GA_ID} adsId={ADS_ID} />}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
