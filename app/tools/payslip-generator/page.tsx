import type { Metadata } from "next";
import Image from "next/image";
import { SiteChrome } from "../../components/SiteChrome";
import { FaqAccordion } from "../../components/FaqAccordion";
import { PayslipGeneratorTool } from "../../components/PayslipGeneratorTool";
import { TemplateAccessGate } from "../../components/TemplateAccessGate";

const TITLE = "Free Salary Slip Generator & Payslip Generator";
const DESCRIPTION =
  "Generate professional payslips and salary slips online for free. Add earnings and deductions, then download a ready-to-share PDF in seconds.";
const SITE_URL = "https://www.meagle360.com";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/tools/payslip-generator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/tools/payslip-generator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  keywords: [
    "payslip generator",
    "salary slip generator online",
    "free payslip maker",
    "create payslip PDF",
    "online salary slip generator"
  ],
};

const STEPS = [
  { title: "Enter company details", desc: "Company name, logo, and address" },
  { title: "Add employee information", desc: "Name, employee ID, designation, and pay period" },
  { title: "Input earnings", desc: "Basic Salary, HRA, DA, Special Allowance, and any other components" },
  { title: "Input deductions", desc: "PF, Professional Tax, TDS, and other applicable deductions" },
  { title: "Preview and download", desc: "Check the calculated gross and net salary, then download as PDF" },
];

const WHY_USE = [
  {
    tint: "tint-emerald",
    title: "No formula errors",
    desc: "Deductions and totals calculate automatically — no broken spreadsheet formulas.",
    icon: <><path d="M20 6L9 17l-5-5" /></>,
  },
  {
    tint: "tint-sky",
    title: "Consistent formatting",
    desc: "Every payslip looks professional and uniform, every single time.",
    icon: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 9h8M8 13h5" /></>,
  },
  {
    tint: "tint-amber",
    title: "Faster",
    desc: "No need to rebuild a spreadsheet template every month.",
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>,
  },
  {
    tint: "tint-violet",
    title: "Compliant",
    desc: "Includes all statutory components (PF, PT, TDS) a legally valid payslip requires.",
    icon: <><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /></>,
  },
];

const FAQS = [
  {
    q: "Is a salary slip the same as a payslip?",
    a: "Yes, \"salary slip\" and \"payslip\" refer to the same document. The terms are used interchangeably across India, and this tool works the same way regardless of which term you search for.",
  },
  {
    q: "Can I create a salary slip online for free?",
    a: "Yes, this tool is completely free to use with no signup required.",
  },
  {
    q: "Can I generate a salary slip in Excel format?",
    a: "This tool generates a ready-to-download PDF payslip. Excel-format export is not currently supported.",
  },
  {
    q: "Is this payslip generator free to use?",
    a: "Yes, the tool is completely free with no signup required. Enter the details, preview the payslip, and download it as a PDF.",
  },
  {
    q: "Is a payslip generated online legally valid?",
    a: "Yes, as long as it accurately reflects the actual salary breakup and statutory deductions like PF, PT, and TDS for the employee, a digitally generated payslip is a valid wage document under Indian labor law.",
  },
  {
    q: "Can I download the payslip as a PDF?",
    a: "Yes, once you preview your entries, you can download the payslip as a PDF or share it directly.",
  },
  {
    q: "What details do I need to generate a payslip?",
    a: "You'll need company details such as name and address, employee details such as name, ID, and designation, the pay period, all earnings components like Basic, HRA, DA, and allowances, and applicable deductions like PF, PT, and TDS — everything needed for a monthly pay slip or a one-off company pay slip.",
  },
  {
    q: "Can I use this to generate payslips for my whole team?",
    a: "This free tool is best suited for individual or occasional payslips. For generating and distributing each employee's pay slip automatically for an entire team every month, Meagle 360's payroll software handles this at scale.",
  },
];

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Meagle 360 Salary Slip Generator & Payslip Generator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  description: "Free online salary slip generator and payslip generator to create and download professional salary slips as PDF.",
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
    { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_URL}/tools/payslip-generator` },
    { "@type": "ListItem", position: 3, name: "Payslip Generator", item: `${SITE_URL}/tools/payslip-generator` },
  ],
};

export default function PayslipGeneratorPage() {
  return (
    <SiteChrome>
      <section className="payslip-hero-v3" style={{ background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f9f0 100%)', textAlign: 'center' }}>
        <div className="container payslip-hero-v3-inner">
          <div className="payslip-hero-v3-card">
            <div className="hero-v3-card-content" style={{ flex: 1 }}>
              <h1 className="payslip-hero-v3-title" style={{ marginBottom: '24px' }}>
                Free Salary Slip Generator — Create &amp; Download Payslips Online
              </h1>
              <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.5 }}>
                Create a salary slip online for free — enter earnings and deductions, and get a professional payslip in minutes.<br/>No sign-up required.
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <a href="#generator" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
                  Generate Now
                </a>
                <svg viewBox="0 0 100 50" fill="none" style={{ width: '60px', height: '30px', color: 'var(--primary)' }}>
                  <path d="M10 10 Q 50 10, 80 40 M 80 40 L 70 30 M 80 40 L 60 45" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="hero-v3-card-img" style={{ flex: 1 }}>
              <Image
                src="/payslip-generator-hero.webp"
                alt="Payslip generator tool interface"
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

      <section className="section payslip-tool-section-v2">
        <div className="container" style={{ maxWidth: '1360px' }}>
          <PayslipGeneratorTool />
        </div>
      </section>

      <section className="section section-how-it-works" style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow-v2" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: 14, textTransform: 'uppercase', letterSpacing: 1 }}>Simple Process</span>
          <h2 style={{ fontSize: '36px', color: '#111', marginTop: 8, marginBottom: 64 }}>How It Works<div style={{ width: 40, height: 3, background: 'var(--primary)', margin: '16px auto 0' }} /></h2>
          
          <div className="process-steps-v2">
            <div className="process-step-v2" style={{ flex: 1, position: 'relative' }}>
              <div className="step-badge-v2" style={{ position: 'absolute', top: -16, left: 16, background: 'var(--primary)', color: '#fff', width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', zIndex: 2 }}>1</div>
              <div className="step-card-v2" style={{ background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 10px 40px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
                <svg viewBox="0 0 100 80" fill="none" className="step-icon-v2" style={{ width: '100%', height: 100 }}><rect x="10" y="20" width="80" height="50" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/><circle cx="30" cy="40" r="8" fill="var(--primary)"/><rect x="45" y="36" width="35" height="4" rx="2" fill="#e2e8f0"/><rect x="45" y="46" width="25" height="4" rx="2" fill="#e2e8f0"/></svg>
              </div>
              <h3 style={{ fontSize: 18, marginTop: 24, marginBottom: 8, color: '#111', fontWeight: 600 }}>Enter Details</h3>
              <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.5 }}>Fill in employee and salary information.</p>
            </div>
            
            <div className="process-arrow-v2" style={{ color: 'var(--primary)', opacity: 0.8 }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 24, height: 24 }}><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            
            <div className="process-step-v2" style={{ flex: 1, position: 'relative' }}>
              <div className="step-badge-v2" style={{ position: 'absolute', top: -16, left: 16, background: 'var(--primary)', color: '#fff', width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', zIndex: 2 }}>2</div>
              <div className="step-card-v2" style={{ background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 10px 40px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
                <svg viewBox="0 0 100 80" fill="none" className="step-icon-v2" style={{ width: '100%', height: 100 }}><rect x="25" y="10" width="50" height="60" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/><rect x="35" y="20" width="30" height="8" rx="2" fill="#22c55e"/><rect x="35" y="34" width="30" height="4" rx="2" fill="#93c5fd"/><rect x="35" y="42" width="20" height="4" rx="2" fill="#e2e8f0"/><rect x="35" y="50" width="30" height="12" rx="2" fill="#bfdbfe"/></svg>
              </div>
              <h3 style={{ fontSize: 18, marginTop: 24, marginBottom: 8, color: '#111', fontWeight: 600 }}>Customise</h3>
              <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.5 }}>Choose template and customise as per your needs.</p>
            </div>
            
            <div className="process-arrow-v2" style={{ color: 'var(--primary)', opacity: 0.8 }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 24, height: 24 }}><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>

            <div className="process-step-v2" style={{ flex: 1, position: 'relative' }}>
              <div className="step-badge-v2" style={{ position: 'absolute', top: -16, left: 16, background: 'var(--primary)', color: '#fff', width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', zIndex: 2 }}>3</div>
              <div className="step-card-v2" style={{ background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 10px 40px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
                <svg viewBox="0 0 100 80" fill="none" className="step-icon-v2" style={{ width: '100%', height: 100 }}><rect x="25" y="10" width="50" height="60" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/><rect x="35" y="25" width="30" height="3" rx="1.5" fill="#e2e8f0"/><rect x="35" y="35" width="25" height="3" rx="1.5" fill="#e2e8f0"/><rect x="35" y="45" width="30" height="3" rx="1.5" fill="#e2e8f0"/><circle cx="70" cy="60" r="12" fill="var(--primary)"/><circle cx="70" cy="60" r="4" fill="#fff"/></svg>
              </div>
              <h3 style={{ fontSize: 18, marginTop: 24, marginBottom: 8, color: '#111', fontWeight: 600 }}>Preview</h3>
              <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.5 }}>Review payslip details and make changes if needed.</p>
            </div>
            
            <div className="process-arrow-v2" style={{ color: 'var(--primary)', opacity: 0.8 }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 24, height: 24 }}><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>

            <div className="process-step-v2" style={{ flex: 1, position: 'relative' }}>
              <div className="step-badge-v2" style={{ position: 'absolute', top: -16, left: 16, background: 'var(--primary)', color: '#fff', width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', zIndex: 2 }}>4</div>
              <div className="step-card-v2" style={{ background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 10px 40px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
                <svg viewBox="0 0 100 80" fill="none" className="step-icon-v2" style={{ width: '100%', height: 100 }}><rect x="25" y="10" width="50" height="60" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/><rect x="35" y="25" width="30" height="3" rx="1.5" fill="#e2e8f0"/><rect x="35" y="35" width="25" height="3" rx="1.5" fill="#e2e8f0"/><rect x="35" y="45" width="30" height="3" rx="1.5" fill="#e2e8f0"/><circle cx="70" cy="60" r="14" fill="#10b981"/><path d="M70 54v9M66 60l4 4 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 style={{ fontSize: 18, marginTop: 24, marginBottom: 8, color: '#111', fontWeight: 600 }}>Download</h3>
              <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.5 }}>Download your salary slip PDF instantly, ready to share.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '48px 0', background: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <div className="section-head" style={{ textAlign: "center", marginBottom: 24 }}>
            <h2 style={{ fontSize: 28 }}>Prefer a Blank Template Instead?</h2>
            <p>Skip the generator and fill in a payslip template by hand — free in Word, PDF and Excel.</p>
          </div>
          <TemplateAccessGate source="/tools/payslip-generator" />
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div className="section-head" style={{ textAlign: "center", marginBottom: 48, marginLeft: "auto", marginRight: "auto" }}>
            <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#f3e8ff', color: '#6d28d9', padding: '6px 16px', borderRadius: 20, fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 24, justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              PAYSLIP BREAKDOWN
            </span>
            <h2 style={{ fontSize: '36px', color: '#111', fontWeight: 800, marginBottom: 16 }}>What Goes Into a Payslip</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b' }}>A standard payslip includes two sides, here&apos;s what belongs on each.</p>
          </div>
          
          <div className="payslip-breakdown-grid">
            {/* Earnings Card */}
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 24, padding: 40, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(220,252,231,0.4) 0%, rgba(255,255,255,0) 100%)', zIndex: 0 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: 64, height: 64, background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" style={{ width: 32, height: 32 }}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
                </div>
                <h3 style={{ fontSize: 28, color: '#111', fontWeight: 700, margin: '0 0 16px 0' }}>Earnings</h3>
                <div style={{ height: 2, width: 40, background: '#16a34a', marginBottom: 24 }} />
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    "Basic Salary",
                    "House Rent Allowance (HRA)",
                    "Dearness Allowance (DA)",
                    "Special Allowance",
                    "Any bonus or incentive for the period"
                  ].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: '#334155', borderBottom: '1px dashed rgba(0,0,0,0.1)', paddingBottom: 16 }}>
                      <svg viewBox="0 0 24 24" fill="#22c55e" stroke="#fff" strokeWidth="2" style={{ width: 20, height: 20, flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><path d="M8 12.5l3 3 5-6"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Deductions Card */}
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 24, padding: 40, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(254,226,226,0.4) 0%, rgba(255,255,255,0) 100%)', zIndex: 0 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: 64, height: 64, background: '#ffe4e6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" style={{ width: 32, height: 32 }}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <h3 style={{ fontSize: 28, color: '#111', fontWeight: 700, margin: '0 0 16px 0' }}>Deductions</h3>
                <div style={{ height: 2, width: 40, background: '#e11d48', marginBottom: 24 }} />
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    "Provident Fund (PF)",
                    "Professional Tax (PT)",
                    "TDS (Tax Deducted at Source)",
                    "ESI (if applicable)",
                    "Any loan/advance recovery"
                  ].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: '#334155', borderBottom: '1px dashed rgba(0,0,0,0.1)', paddingBottom: 16 }}>
                      <svg viewBox="0 0 24 24" fill="#f43f5e" stroke="#fff" strokeWidth="2" style={{ width: 20, height: 20, flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><path d="M8 12.5l3 3 5-6"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Info Box */}
          <div className="payslip-info-box">
            <div style={{ width: 40, height: 40, background: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 4 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" style={{ width: 16, height: 16 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            </div>
            <p style={{ margin: 0, fontSize: '1.1rem', color: '#475569', lineHeight: 1.6 }}>
              The difference between total earnings and total deductions is the <strong style={{ color: '#2563eb' }}>net salary</strong>, which is the actual amount paid to the employee.<br/>
              For a full breakdown of what each component means, see our <a href="/blog/salary-slip-format" style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'none' }}>Salary Slip Format guide</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div className="section-head" style={{ textAlign: "center", marginBottom: 48, marginLeft: "auto", marginRight: "auto" }}>
            <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#f3e8ff', color: '#6d28d9', padding: '6px 16px', borderRadius: 20, fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 24, justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Why This, Not a Template
            </span>
            <h2 style={{ fontSize: '36px', color: '#111', fontWeight: 800, marginBottom: 16 }}>Why Use a <span style={{ color: 'var(--primary)' }}>Payslip Generator</span></h2>
            <p style={{ textAlign: 'center', color: '#555', fontSize: '1.05rem', maxWidth: 640, margin: '0 auto' }}>
              Whether you call it a payslip generator or a salary slip generator, it's the same
              tool doing the same job: turning salary components into a clean, downloadable document.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, marginBottom: 24 }}>
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 20, padding: 32, display: 'flex', flexDirection: 'column', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <div style={{ width: 48, height: 48, background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, border: '1px solid #bbf7d0' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" style={{ width: 24, height: 24 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginBottom: 12 }}>No formula errors</h3>
              <div style={{ height: 2, width: 40, background: '#16a34a', marginBottom: 16 }} />
              <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>Deductions and totals calculate automatically, eliminating manual mistakes.</p>
            </div>
            
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 20, padding: 32, display: 'flex', flexDirection: 'column', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <div style={{ width: 48, height: 48, background: '#e0e7ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, border: '1px solid #c7d2fe' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" style={{ width: 24, height: 24 }}><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginBottom: 12 }}>Consistent formatting</h3>
              <div style={{ height: 2, width: 40, background: '#4f46e5', marginBottom: 16 }} />
              <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>Every payslip looks professional and uniform, every single time.</p>
            </div>
            
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 20, padding: 32, display: 'flex', flexDirection: 'column', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <div style={{ width: 48, height: 48, background: '#fef3c7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, border: '1px solid #fde68a' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" style={{ width: 24, height: 24 }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginBottom: 12 }}>Faster</h3>
              <div style={{ height: 2, width: 40, background: '#d97706', marginBottom: 16 }} />
              <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>No need to rebuild a spreadsheet template every month.</p>
            </div>
            
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 20, padding: 32, display: 'flex', flexDirection: 'column', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <div style={{ width: 48, height: 48, background: '#f3e8ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, border: '1px solid #e9d5ff' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2" style={{ width: 24, height: 24 }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginBottom: 12 }}>Compliant</h3>
              <div style={{ height: 2, width: 40, background: '#9333ea', marginBottom: 16 }} />
              <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>Includes all statutory components (PF, PT, TDS) a legally valid payslip.</p>
            </div>
          </div>
          
          {/* Info Box */}
          <div className="payslip-info-box">
            <div style={{ width: 40, height: 40, background: '#6366f1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 4 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" style={{ width: 20, height: 20 }}><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2v1"/><path d="M12 6a4 4 0 0 1 4 4c0 1.5-1.5 3-1.5 4H9.5C8 13 6.5 11.5 6.5 10a4 4 0 0 1 4-4z"/></svg>
            </div>
            <p style={{ margin: 0, fontSize: '1.1rem', color: '#475569', lineHeight: 1.6 }}>
              For a single employee or occasional use, this free tool works well.<br/>
              For processing payslips across an entire team every month automatically, <a href="/pricing" style={{ color: '#4f46e5', fontWeight: 600, textDecoration: 'none' }}>Meagle 360&apos;s payroll software</a> generates and distributes them in bulk, with tax calculations handled automatically.
            </p>
          </div>
        </div>
      </section>



      <section className="section section-hr-benefits" style={{ padding: '80px 0', background: '#fafafa' }}>
        <div className="container">
          <div className="hr-benefits-grid">
            <div className="hr-benefits-img" style={{ flex: 1 }}>
              <Image
                src="/built-for-hr.webp"
                alt="HR professional using payslip generator"
                width={1536}
                height={1024}
                sizes="(max-width: 900px) 90vw, 500px"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '0 auto', display: 'block' }}
              />
            </div>
            <div className="hr-benefits-content" style={{ flex: 1 }}>
              <span className="eyebrow-v2" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: 14, textTransform: 'uppercase', letterSpacing: 1 }}>Built For HR Professionals</span>
              <h2 style={{ fontSize: '40px', lineHeight: 1.2, color: '#111', marginTop: 12, marginBottom: 32, fontWeight: 700 }}>
                Why HR Teams Love<br/>Our <span style={{ color: 'var(--primary)' }}>Free Payslip Generator</span>
              </h2>
              <ul className="hr-benefits-list" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  'Saves hours of manual work',
                  'Reduces errors and ensures accuracy',
                  'Perfect for startups, SMEs & HR teams',
                  'Works on any device, anytime'
                ].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 18, color: '#334155', fontWeight: 500 }}>
                    <div style={{ background: 'var(--primary)', color: '#fff', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ width: 14, height: 14 }}><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" style={{ textAlign: "center", marginBottom: 40, marginLeft: "auto", marginRight: "auto" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      <section className="section" style={{ padding: "0 0 96px" }}>
        <div className="container">
          <div className="payslip-cta">
            <h2>Need payslips generated automatically for your whole team, every month?</h2>
            <p style={{ fontSize: '1.1rem' }}>Meagle 360 handles payroll and payslip generation end-to-end, with tax calculations built in.</p>
            <a href="/demo" className="btn btn-white">Book a free demo</a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </SiteChrome>
  );
}
