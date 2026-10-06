import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteChrome } from "../../components/SiteChrome";
import { FaqAccordion } from "../../components/FaqAccordion";
import { FEATURE_PAGES, getFeaturePage } from "../../../lib/features-data";
import { getPublishedPostBySlug } from "../../../lib/posts";
import { PRICING_FEATURES } from "../../../lib/pricing-data";

const SITE_URL = "https://www.meagle360.com";

const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export function generateStaticParams() {
  return FEATURE_PAGES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeaturePage(slug);
  if (!feature) return {};

  return {
    title: feature.metaTitle,
    description: feature.metaDescription,
    alternates: {
      canonical: `/features/${feature.slug}`,
    },
    openGraph: {
      title: feature.metaTitle,
      description: feature.metaDescription,
      url: `/features/${feature.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: feature.metaTitle,
      description: feature.metaDescription,
    },
  };
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feature = getFeaturePage(slug);
  if (!feature) notFound();

  const relatedPosts = (
    await Promise.all(feature.relatedBlogSlugs.map((s) => getPublishedPostBySlug(s)))
  ).filter((p): p is NonNullable<typeof p> => p !== null);

  const pageUrl = `${SITE_URL}/features/${feature.slug}`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: feature.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Features", item: `${SITE_URL}/features` },
      { "@type": "ListItem", position: 3, name: feature.h1, item: pageUrl },
    ],
  };

  return (
    <SiteChrome>
      <section
        className="feature-banner"
        style={{ display: "flex", alignItems: "center", minHeight: "280px" }}
      >
        <div className="container" style={{ textAlign: "center", maxWidth: 780, margin: "0 auto" }}>
          <span className="feature-banner-badge">Module Spotlight</span>
          <h1 className="blog-post-title" style={{ margin: "0 0 16px" }}>
            {feature.h1}
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", margin: "0 0 28px" }}>
            {feature.heroSubhead}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/demo" className="btn btn-white">
              Book a 15-min demo
            </a>
            {feature.heroSecondaryCta && (
              <a href={feature.heroSecondaryCta.href} className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}>
                {feature.heroSecondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: "48px 0" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="dashboard-frame" style={{ maxWidth: 760, margin: "0 auto", borderRadius: "16px", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,0.05)", overflow: "hidden" }}>
            <Image
              src={feature.heroImage || "/hrms-image.png"}
              alt={`${feature.h1} — Meagle 360 dashboard`}
              width={feature.heroImage ? 1672 : 1536}
              height={feature.heroImage ? 941 : 1024}
              sizes="(max-width: 900px) 90vw, 760px"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ padding: "48px 0" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 style={{ textAlign: "center", marginBottom: 12 }}>
            The real cost of doing this manually
          </h2>
          <p style={{ textAlign: "center", color: "var(--text-2)", marginBottom: 32, fontSize: 18 }}>
            {feature.painIntro}
          </p>
          <ul className="check-list" style={{ maxWidth: 640, margin: "0 auto" }}>
            {feature.painPoints.map((point) => (
              <li key={point}>
                <div className="ico">{CHECK}</div>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" style={{ padding: "48px 0" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h2 style={{ textAlign: "center", marginBottom: 12 }}>
            How Meagle 360 handles it
          </h2>
          <p style={{ textAlign: "center", color: "var(--text-2)", marginBottom: 40, fontSize: 18 }}>
            {feature.capabilitiesIntro}
          </p>
          <div className="feature-capability-grid">
            {feature.capabilities.map((cap) => (
              <div className="feature-capability-card" key={cap.title}>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ padding: "48px 0" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 style={{ textAlign: "center", marginBottom: 24 }}>{feature.builtForTitle}</h2>
          {feature.builtForParagraphs.map((p) => (
            <p key={p} style={{ color: "var(--text-2)", fontSize: 18, lineHeight: 1.7 }}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {feature.extraSection && (
        <section className="section" style={{ padding: "48px 0" }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <h2 style={{ textAlign: "center", marginBottom: 12 }}>
              {feature.extraSection.title}
            </h2>
            <p style={{ textAlign: "center", color: "var(--text-2)", marginBottom: 32, fontSize: 18 }}>
              {feature.extraSection.intro}
            </p>
            <ul className="check-list" style={{ maxWidth: 640, margin: "0 auto" }}>
              {feature.extraSection.bullets.map((bullet) => (
                <li key={bullet}>
                  <div className="ico">{CHECK}</div>
                  {bullet}
                </li>
              ))}
            </ul>
            {feature.extraSection.closingText && (
              <p style={{ textAlign: "center", color: "var(--text-2)", marginTop: 24, fontSize: 18 }}>
                {feature.extraSection.closingText}{" "}
                {feature.extraSection.closingLinkHref && (
                  <a href={feature.extraSection.closingLinkHref}>
                    {feature.extraSection.closingLinkLabel}
                  </a>
                )}
              </p>
            )}
          </div>
        </section>
      )}

      <section className="section" style={{ padding: "48px 0" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 style={{ textAlign: "center", marginBottom: 24 }}>Getting started</h2>
          <p style={{ color: "var(--text-2)", fontSize: 18, lineHeight: 1.7 }}>
            Setting this up doesn&apos;t mean a multi week implementation project.
            Most teams are fully onboarded onto Meagle 360 including this
            module within 3 to 5 business days, with our team handling data
            migration and configuration rather than leaving you to figure it out
            from documentation alone.
          </p>
          <p style={{ color: "var(--text-2)", fontSize: 18, lineHeight: 1.7 }}>
            You can also start with a 14 day free trial and full access before
            committing to anything, with no credit card required to begin. If
            you&apos;d rather see it running on your own data first, a 15 minute
            demo is the fastest way to find out whether it actually fits how
            your team works.
          </p>
        </div>
      </section>

      <section className="section section-alt" style={{ padding: "48px 0" }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 48 }}>
            <div>
              <h2 style={{ marginBottom: 12 }}>What&apos;s included with every plan</h2>
              <p style={{ color: "var(--text-2)", marginBottom: 32, fontSize: 18 }}>
                {feature.h1} isn&apos;t a paid add on bolted onto a cheaper base
                plan it&apos;s one of the modules included the moment you sign
                up, alongside everything else on Meagle 360.
              </p>
              <ul className="check-list">
                {PRICING_FEATURES.map((f) => (
                  <li key={f}>
                    <div className="ico">{CHECK}</div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 style={{ marginBottom: 12 }}>Simple, flat pricing</h2>
              <p style={{ color: "var(--text-2)", marginBottom: 24, fontSize: 18 }}>
                {feature.h1} is included in Meagle 360&apos;s single plan a flat ₹149
                per user, per month, with every module included. No setup fee, no
                minimum seats.
              </p>
              <a href="/pricing" className="btn btn-primary">
                See full pricing →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ padding: "48px 0" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h2 style={{ textAlign: "center", marginBottom: 12 }}>How Meagle 360 compares</h2>
          <p style={{ textAlign: "center", color: "var(--text-2)", marginBottom: 32, fontSize: 18 }}>
            {feature.comparisonIntro}
          </p>
          <div className="pricing-compare-scroll">
            <table className="pricing-compare-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Meagle 360</th>
                  <th>Keka</th>
                  <th>greytHR</th>
                </tr>
              </thead>
              <tbody>
                {feature.comparisonRows.map((row) => (
                  <tr key={row.capability} className={row.capability === "Starting price" ? "pricing-compare-highlight" : ""}>
                    <td data-label="Capability">{row.capability}</td>
                    <td data-label="Meagle 360">{row.meagle}</td>
                    <td data-label="Keka">{row.keka}</td>
                    <td data-label="greytHR">{row.greythr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 18, color: "var(--text-3)", marginTop: 16, textAlign: "center" }}>
            Keka and greytHR figures are drawn from each vendor&apos;s own
            product/help center pages and public pricing breakdowns as of
            August 2026 verify current details on{" "}
            <a href="https://www.keka.com" target="_blank" rel="noopener noreferrer">
              keka.com
            </a>{" "}
            and{" "}
            <a href="https://www.greythr.com" target="_blank" rel="noopener noreferrer">
              greythr.com
            </a>{" "}
            before publishing, since SaaS pricing and feature sets change.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: "48px 0" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 style={{ textAlign: "center", marginBottom: 32 }}>Frequently asked questions</h2>
          <FaqAccordion items={feature.faqs} />
        </div>
      </section>

      {(relatedPosts.length > 0 || feature.relatedFeatureSlug) && (
        <section className="section section-alt" style={{ padding: "48px 0" }}>
          <div className="container" style={{ maxWidth: 760, textAlign: "center" }}>
            <h2 style={{ marginBottom: 24 }}>Related reading</h2>
            <ul className="feature-related-links">
              {relatedPosts.map((post) => (
                <li key={post.id}>
                  <a href={`/blog/${post.slug}`}>{post.title} →</a>
                </li>
              ))}
              <li>
                <a href={`/features/${feature.relatedFeatureSlug}`}>
                  {feature.relatedFeatureLabel} →
                </a>
              </li>
            </ul>
          </div>
        </section>
      )}

      <section className="section" style={{ textAlign: "center", padding: "48px 0" }}>
        <div className="container">
          <h2 style={{ marginBottom: 24 }}>See it running on your own data</h2>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/demo" className="btn btn-primary">
              Book a 15-min demo
            </a>
            <a href="/demo" className="btn btn-outline">
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

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
