import type { Metadata } from "next";
import { SiteChrome } from "../components/SiteChrome";
import { getPublishedHrTemplates } from "../../lib/hr-templates";

const TITLE = "Free HR Templates — Letters, Policies, Forms & Checklists";
const DESCRIPTION =
  "Free, ready-to-use HR templates for Indian companies: offer and relieving letters, leave and WFH policies, job descriptions, onboarding checklists, and more. Word, PDF and Excel downloads.";

export const revalidate = 60;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/templates" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/templates", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const CATEGORY_ORDER = ["Letters", "Policies", "Job Descriptions", "Hiring Forms", "Checklists", "Trackers & Forms"];

const CATEGORY_META: Record<string, { desc: string; icon: React.ReactNode; color: string; bg: string }> = {
  Letters: {
    desc: "Professional letter templates for common HR communication needs.",
    color: "#4f46e5",
    bg: "#eef2ff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    ),
  },
  Policies: {
    desc: "HR policy templates to build a strong and compliant workplace.",
    color: "#059669",
    bg: "#ecfdf5",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
      </svg>
    ),
  },
  "Job Descriptions": {
    desc: "Ready-to-use job descriptions to attract the right talent.",
    color: "#2563eb",
    bg: "#eff6ff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
  },
  "Hiring Forms": {
    desc: "Essential forms for a smooth recruitment process.",
    color: "#ea580c",
    bg: "#fff7ed",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  Checklists: {
    desc: "Comprehensive checklists for onboarding, offboarding, and more.",
    color: "#dc2626",
    bg: "#fef2f2",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"></polyline>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
      </svg>
    ),
  },
  "Trackers & Forms": {
    desc: "Organize employee data with our easy-to-use trackers and forms.",
    color: "#7c3aed",
    bg: "#f5f3ff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
        <line x1="3" x2="21" y1="9" y2="9"></line>
        <line x1="9" x2="9" y1="21" y2="9"></line>
      </svg>
    ),
  },
};

const CARD_COLORS = [
  { color: "#2563eb", bg: "#eff6ff" }, // blue
  { color: "#059669", bg: "#ecfdf5" }, // green
  { color: "#d97706", bg: "#fffbeb" }, // yellow
  { color: "#dc2626", bg: "#fef2f2" }, // red
  { color: "#7c3aed", bg: "#f5f3ff" }, // purple
  { color: "#0891b2", bg: "#ecfeff" }, // cyan
];

function getCardColor(index: number) {
  return CARD_COLORS[index % CARD_COLORS.length];
}

const CardIcon = ({ title, index }: { title: string, index: number }) => {
  const { color, bg } = getCardColor(index);
  
  let icon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" x2="8" y1="13" y2="13"></line>
      <line x1="16" x2="8" y1="17" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );

  const t = title.toLowerCase();
  if (t.includes('appointment') || t.includes('schedule') || t.includes('calendar')) {
    icon = (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
        <line x1="16" x2="16" y1="2" y2="6"></line>
        <line x1="8" x2="8" y1="2" y2="6"></line>
        <line x1="3" x2="21" y1="10" y2="10"></line>
      </svg>
    );
  } else if (t.includes('handbook') || t.includes('book')) {
    icon = (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
      </svg>
    );
  } else if (t.includes('team') || t.includes('employee') || t.includes('attendance')) {
    icon = (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    );
  }

  return (
    <div style={{
      width: 52,
      height: 52,
      borderRadius: 14,
      backgroundColor: bg,
      color: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }}>
      {icon}
    </div>
  );
};

export default async function HrTemplatesHubPage() {
  const templates = await getPublishedHrTemplates();

  const byCategory = new Map<string, typeof templates>();
  for (const t of templates) {
    if (!byCategory.has(t.category)) byCategory.set(t.category, []);
    byCategory.get(t.category)!.push(t);
  }
  const categories = [...byCategory.keys()].sort((a, b) => {
    const ai = CATEGORY_ORDER.indexOf(a);
    const bi = CATEGORY_ORDER.indexOf(b);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });

  return (
    <SiteChrome>
      <section className="blog-post-banner">
        <div className="container blog-post-banner-inner" style={{ textAlign: "center" }}>
          <header className="blog-post-header">
            <h1 className="blog-post-title">Free HR Templates for Indian Companies</h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", maxWidth: 680, margin: "16px auto 0" }}>
              {templates.length}+ ready-to-use letters, policies, forms and checklists — Word, PDF and Excel
              downloads, free after a quick sign-up.
            </p>
          </header>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 64, paddingBottom: 64, backgroundColor: 'var(--bg-gray)' }}>
        <div className="container">
          {categories.map((category) => {
            const meta = CATEGORY_META[category] || {
              desc: "Explore our collection of templates.",
              color: "#64748b",
              bg: "#f1f5f9",
              icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            };

            return (
              <div key={category} style={{ marginBottom: 80 }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 20, 
                  marginBottom: 32,
                  padding: '24px 32px',
                  backgroundColor: meta.bg,
                  borderRadius: 24,
                  border: '1px solid rgba(0,0,0,0.03)'
                }}>
                  <div style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    backgroundColor: 'var(--bg-white)',
                    color: meta.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                  }}>
                    {meta.icon}
                  </div>
                  <div>
                    <h2 style={{ margin: '0 0 6px', fontSize: 26, fontWeight: 700, color: meta.color, letterSpacing: '-0.02em' }}>{category}</h2>
                    <p style={{ margin: 0, fontSize: 16, color: 'var(--text-1)' }}>{meta.desc}</p>
                  </div>
                </div>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
                  gap: 24 
                }}>
                  {byCategory.get(category)!.map((t, i) => (
                    <a key={t.slug} href={`/templates/${t.slug}`} className="template-card-hover" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 18,
                      padding: 24,
                      borderRadius: 16,
                      border: '1px solid var(--border)',
                      backgroundColor: 'var(--bg-white)',
                      transition: 'all 0.2s var(--ease)',
                      textDecoration: 'none',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                    }}>
                      <CardIcon title={t.title} index={i} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h3 style={{ margin: '0 0 6px', fontSize: 18, fontWeight: 600, color: 'var(--text-1)', lineHeight: 1.4 }}>
                          {t.title.split(':')[0]}
                        </h3>
                        <p style={{ margin: '0 0 12px', fontSize: 14.5, color: 'var(--text-3)' }}>
                          {t.title.includes('Free Template') ? 'Free Template' : 'Template'} (Word & PDF)
                        </p>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                          {t.files.map((f) => {
                            const ext = f.format.toLowerCase();
                            let badgeBg = '#f1f5f9';
                            let badgeColor = '#475569';
                            if (ext === 'docx') {
                              badgeBg = '#eff6ff';
                              badgeColor = '#2563eb';
                            } else if (ext === 'pdf') {
                              badgeBg = '#fef2f2';
                              badgeColor = '#dc2626';
                            } else if (ext === 'xlsx') {
                              badgeBg = '#f0fdf4';
                              badgeColor = '#16a34a';
                            }
                            return (
                              <span key={f.format} style={{
                                fontSize: 11,
                                fontWeight: 700,
                                padding: '4px 8px',
                                borderRadius: 6,
                                backgroundColor: badgeBg,
                                color: badgeColor,
                                letterSpacing: '0.03em'
                              }}>
                                {f.format.toUpperCase()}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section" style={{ padding: "0 0 96px", backgroundColor: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="payslip-cta">
            <h2>Tired of filling these in by hand, one employee at a time?</h2>
            <p>Meagle 360 automates offer letters, payslips, leave records and more for your whole team.</p>
            <a href="/demo" className="btn btn-white">
              Book a free demo
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
