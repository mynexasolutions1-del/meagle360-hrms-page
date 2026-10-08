import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteChrome } from "../../components/SiteChrome";
import { FaqAccordion } from "../../components/FaqAccordion";
import { TemplateAccessGate } from "../../components/TemplateAccessGate";
import { getHrTemplateBySlug } from "../../../lib/hr-templates";
import { sanitizePostContent } from "../../../lib/sanitize";

export const revalidate = 60;

const SITE_URL = "https://www.meagle360.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = await getHrTemplateBySlug(slug);
  if (!t) return {};

  const title = t.seo_title || t.title;
  const description = t.seo_description || undefined;

  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `/templates/${t.slug}` },
  };
}

export default async function HrTemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = await getHrTemplateBySlug(slug);
  if (!t) notFound();

  const pageUrl = `${SITE_URL}/templates/${t.slug}`;
  const cleanContent = sanitizePostContent(t.content);

  const faqJsonLd =
    t.faq_json && t.faq_json.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: t.faq_json.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }
      : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "HR Templates", item: `${SITE_URL}/templates` },
      { "@type": "ListItem", position: 3, name: t.title, item: pageUrl },
    ],
  };

  return (
    <SiteChrome>
      <section className="blog-post-banner">
        <div className="container blog-post-banner-inner">
          <nav className="breadcrumb-trail" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-sep">/</span>
            <a href="/templates">HR Templates</a>
            <span className="breadcrumb-sep">/</span>
            <span aria-current="page">{t.title}</span>
          </nav>
          <header className="blog-post-header">
            <div className="blog-post-badges">
              <span className="blog-meta-badge">{t.category}</span>
            </div>
            <h1 className="blog-post-title">{t.title}</h1>
          </header>
        </div>
      </section>

      <section className="section blog-post-body-section">
        <div className="container blog-post-container">
          <div className="blog-article-wrapper">
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: sanitizePostContent(t.intro) }} />

            <TemplateAccessGate source={`/templates/${t.slug}`} />

            <div className="blog-content" dangerouslySetInnerHTML={{ __html: cleanContent }} />

            {t.related_links && t.related_links.length > 0 && (
              <div className="template-related-links">
                <p>
                  <strong>Related:</strong>{" "}
                  {t.related_links.map((l, i) => (
                    <span key={l.href}>
                      <a href={l.href}>{l.label}</a>
                      {i < t.related_links!.length - 1 ? " · " : ""}
                    </span>
                  ))}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {t.faq_json && t.faq_json.length > 0 && (
        <section className="section section-alt" style={{ padding: "48px 0" }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <h2 style={{ textAlign: "center", marginBottom: 32 }}>Frequently asked questions</h2>
            <FaqAccordion items={t.faq_json} />
          </div>
        </section>
      )}

      <section className="section" style={{ padding: "0 0 96px" }}>
        <div className="container">
          <div className="payslip-cta">
            <h2>Need this automated instead of filled in by hand?</h2>
            <p>Meagle 360 generates and tracks HR records like this automatically, for every employee.</p>
            <a href="/demo" className="btn btn-white">
              Book a free demo
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
    </SiteChrome>
  );
}
