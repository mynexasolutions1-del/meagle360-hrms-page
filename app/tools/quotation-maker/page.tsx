import { Metadata } from "next";
import Image from "next/image";
import { SiteChrome } from "../../components/SiteChrome";
import { QuotationMakerTool } from "../../components/QuotationMakerTool";
import { FaqAccordion } from "../../components/FaqAccordion";

const SITE_URL = "https://www.meagle360.com";

export const metadata: Metadata = {
  title: "Free Quotation Maker & Online Quotation Generator",
  description: "Create professional quotations online free. Our quotation maker lets you add items, pricing, and terms, then download a ready PDF in seconds. No signup needed.",
  alternates: {
    canonical: `${SITE_URL}/tools/quotation-maker`,
  },
  openGraph: {
    title: "Free Quotation Maker & Online Quotation Generator",
    description: "Create professional quotations online free. Our quotation maker lets you add items, pricing, and terms, then download a ready PDF in seconds. No signup needed.",
    url: `${SITE_URL}/tools/quotation-maker`,
    siteName: "Meagle 360",
    images: [
      {
        url: `${SITE_URL}/quotation-maker.webp`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  keywords: [
    "quotation maker",
    "free quote generator",
    "online quotation tool",
    "business quotation maker",
    "invoice and quotation generator",
  ],
};

const STEPS = [
  { 
    title: "Enter Business Details", 
    desc: "Add your company name, contact info, and tax ID if applicable.",
    tint: "tint-primary",
    icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>
  },
  { 
    title: "Add Client Info", 
    desc: "Specify who the quotation is for, including their address and email.",
    tint: "tint-emerald",
    icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>
  },
  { 
    title: "List Line Items", 
    desc: "Add services or products, specify quantities, and set the rates.",
    tint: "tint-rose",
    icon: <><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></>
  },
  { 
    title: "Save & Send", 
    desc: "Review the live preview, apply taxes, and download as a PDF.",
    tint: "tint-amber",
    icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>
  },
];

const USE_CASES = [
  {
    tint: "tint-primary",
    title: "Freelancers",
    desc: "Send professional, branded quotes to clients for design, writing, or consulting projects.",
    icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
  },
  {
    tint: "tint-emerald",
    title: "Agencies & B2B",
    desc: "Draft service proposals for enterprise clients with standard tax and discount fields.",
    icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
  },
  {
    tint: "tint-amber",
    title: "Small Businesses",
    desc: "Quickly generate quotes for bulk orders or specialized products without expensive software.",
    icon: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>,
  },
];

const FAQS = [
  {
    q: "Is this quotation maker free to use?",
    a: "Yes, this tool is completely free with no signup required. You do not need to create an account or provide credit card details.",
  },
  {
    q: "Can I use the quotation maker on my phone?",
    a: "Yes, the tool works in any mobile browser, no separate app download required.",
  },
  {
    q: "What details can I include in a quotation?",
    a: "You can add your company details and logo, your GSTIN, client details, a quote number, line items with quantity and rate, plus payment terms and notes — everything needed for a professional, ready-to-send quotation.",
  },
  {
    q: "How do I save the quotation as a PDF?",
    a: "Click the 'Download / Print Quotation' button at the bottom of the tool. In the browser print dialog that appears, select 'Save as PDF' as your printer destination.",
  },
  {
    q: "Is my data stored on your servers?",
    a: "No, this tool works entirely in your browser. The details you enter are never uploaded or saved on our servers, ensuring your business data remains completely private.",
  },
];

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Meagle 360 Quotation Maker & Online Quotation Generator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  description: "Free online quotation maker and quotation generator to create and download professional business quotations as PDF.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_URL}/tools/quotation-maker` },
    { "@type": "ListItem", position: 3, name: "Free Quotation Maker", item: `${SITE_URL}/tools/quotation-maker` },
  ],
};

export default function QuotationMakerPage() {
  return (
    <SiteChrome>
      <section className="payslip-hero-v3 no-print" style={{ background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f9f0 100%)', textAlign: 'center' }}>
        <div className="container payslip-hero-v3-inner">
          <div className="payslip-hero-v3-card">
            <div className="hero-v3-card-content" style={{ flex: 1 }}>
              <h1 className="payslip-hero-v3-title" style={{ marginBottom: '24px' }}>
                Free Quotation Maker — Create &amp; Download Quotations Online
              </h1>
              <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.5 }}>
                An online quotation maker for generating accurate, branded quotations in minutes.<br/>Add pricing, taxes, and client details easily—no design software needed.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <a href="#generator" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
                  Try the Free Quotation Generator
                </a>
                <svg viewBox="0 0 100 50" fill="none" style={{ width: '60px', height: '30px', color: 'var(--primary)' }}>
                  <path d="M10 10 Q 50 10, 80 40 M 80 40 L 70 30 M 80 40 L 60 45" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className="hero-v3-card-img" style={{ flex: 1 }}>
              <Image
                src="/quotation-maker.webp"
                alt="Quotation maker tool interface"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 900px) 90vw, 400px"
                style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '0 auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section payslip-tool-section-v2" id="generator" style={{ paddingTop: '20px' }}>
        <div className="container">
          <QuotationMakerTool />
        </div>
      </section>

      <section className="section section-alt no-print">
        <div className="container">
          <div className="section-head" style={{ textAlign: "center", marginBottom: 48, marginLeft: "auto", marginRight: "auto" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>How It Works</span>
            <h2>How This Quotation Generator Online Works</h2>
          </div>
          <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {STEPS.map((step, i) => (
              <div className="feature-card" key={step.title} style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 24, right: 24, fontSize: '4rem', fontWeight: 800, color: '#f1f5f9', zIndex: 0, lineHeight: 1 }}>{i + 1}</div>
                <div className={`icon-badge ${step.tint}`} style={{ position: 'relative', zIndex: 1, marginBottom: 20 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{step.icon}</svg>
                </div>
                <h3 style={{ position: 'relative', zIndex: 1, marginBottom: 12 }}>{step.title}</h3>
                <p style={{ position: 'relative', zIndex: 1, flex: 1 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section no-print">
        <div className="container">
          <div className="section-head" style={{ textAlign: "center", marginBottom: 48, marginLeft: "auto", marginRight: "auto" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Who It's For</span>
            <h2>Who Uses This Tool?</h2>
          </div>
          <div className="feature-grid feature-grid-3">
            {USE_CASES.map((item) => (
              <div className="feature-card" key={item.title}>
                <div className={`icon-badge ${item.tint}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{item.icon}</svg>
                </div>
                <h3 style={{ marginBottom: 12 }}>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt no-print">
        <div className="container">
          <div className="section-head" style={{ textAlign: "center", marginBottom: 40, marginLeft: "auto", marginRight: "auto" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      <section className="section no-print" style={{ padding: "0 0 96px" }}>
        <div className="container">
          <div className="payslip-cta">
            <h2>Managing your growing business takes more than quotes</h2>
            <p style={{ fontSize: '1.1rem' }}>Meagle 360 handles your team's attendance, leave and payroll in one place, so your HR runs as smoothly as your sales pipeline.</p>
            <a href="/demo" className="btn btn-white">Book a free demo</a>
          </div>
        </div>
      </section>

      {/* JSON-LD scripts */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </SiteChrome>
  );
}
