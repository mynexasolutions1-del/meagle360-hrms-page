import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteChrome } from "../../components/SiteChrome";
import { getPublishedPostBySlug, getRelatedPosts } from "../../../lib/posts";
import { BlogCard } from "../../components/BlogCard";
import { BlogCtaSection } from "../../components/BlogCtaSection";
import { FaqAccordion } from "../../components/FaqAccordion";
import { sanitizePostContent } from "../../../lib/sanitize";
import { calculateReadingTime } from "../../../lib/blog-types";
import { TemplateDownloadGate } from "../../components/TemplateDownloadGate";
import { TemplateAccessGate } from "../../components/TemplateAccessGate";

export const revalidate = 60;

const SITE_URL = "https://www.meagle360.com";

function wordCount(html: string): number {
  const text = html.replace(/<[^>]*>/g, " ").trim();
  return text ? text.split(/\s+/).length : 0;
}

// Splits sanitized content right after its first </p>, so a download gate
// (or any other insert) can sit "below the first paragraph" instead of only
// ever being prependable/appendable to the whole block.
function splitAfterFirstParagraph(html: string): { before: string; after: string } {
  const match = html.match(/^[\s\S]*?<\/p>/);
  if (!match) return { before: html, after: "" };
  return { before: match[0], after: html.slice(match[0].length) };
}

function formatDate(dateStr: string | null) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);
  if (!post) return {};

  const title = post.seo_title || post.title;
  const description = post.seo_description || undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.published_at || undefined,
      images: post.cover_image_url ? [{ url: post.cover_image_url }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.cover_image_url ? [post.cover_image_url] : undefined,
    },
    alternates: {
      canonical: post.canonical_url || `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);
  if (!post) notFound();

  const cleanContent = sanitizePostContent(post.content);
  const hasDownload = Boolean(post.download_xlsx_url || post.download_sheets_url);
  const showPayslipTemplateGate = post.slug === "salary-slip-format";
  const { before: contentBeforeGate, after: contentAfterGate } = hasDownload || showPayslipTemplateGate
    ? splitAfterFirstParagraph(cleanContent)
    : { before: cleanContent, after: "" };

  const relatedPosts = await getRelatedPosts(post.category, post.id);
  const readingTime = calculateReadingTime(post.content);
  const formattedDate = formatDate(post.published_at || post.created_at);

  const postUrl = `${SITE_URL}/blog/${post.slug}`;

  // Author is unverified — replace with the real writer before this goes live.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    headline: post.title,
    description: post.seo_description || undefined,
    image: post.cover_image_url ? [post.cover_image_url] : undefined,
    datePublished: post.published_at || post.created_at,
    dateModified: post.updated_at,
    author: {
      "@type": "Person",
      name: "REPLACE_WITH_AUTHOR_NAME",
      jobTitle: "REPLACE_WITH_AUTHOR_TITLE",
      url: `${SITE_URL}/authors/REPLACE_WITH_AUTHOR_SLUG`,
      sameAs: ["https://www.linkedin.com/in/REPLACE_WITH_AUTHOR_LINKEDIN"],
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    wordCount: wordCount(post.content),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };

  const faqJsonLd = post.faq_json && post.faq_json.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq_json.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }
    : null;

  return (
    <SiteChrome>
      {/* Blog Detail Hero Banner */}
      <section className="blog-post-banner">
        <div className="container blog-post-banner-inner">
          <nav className="breadcrumb-trail" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-sep">/</span>
            <a href="/blog">Blog</a>
            <span className="breadcrumb-sep">/</span>
            <span aria-current="page">{post.title}</span>
          </nav>
          <header className="blog-post-header">
            <div className="blog-post-badges">
              {formattedDate && (
                <span className="blog-meta-badge">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {formattedDate}
                </span>
              )}
              <span className="blog-meta-badge">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {readingTime} min read
              </span>
            </div>

            <h1 className="blog-post-title">{post.title}</h1>
          </header>
        </div>
      </section>

      {/* Main Article Body */}
      <section className="section blog-post-body-section">
        <div className="container blog-post-container">
          <div className="blog-article-wrapper">
            {post.cover_image_url && (
              <div className="blog-post-cover-wrapper">
                <Image
                  src={post.cover_image_url}
                  alt={post.cover_image_alt || post.title}
                  width={1200}
                  height={630}
                  priority
                  sizes="(max-width: 800px) 100vw, 760px"
                  className="blog-post-cover-img"
                />
              </div>
            )}

            <div className="blog-content">
              {hasDownload ? (
                <>
                  <div dangerouslySetInnerHTML={{ __html: contentBeforeGate }} />
                  <TemplateDownloadGate source={post.slug} />
                  <div dangerouslySetInnerHTML={{ __html: contentAfterGate }} />
                  <TemplateDownloadGate source={post.slug} heading="Still haven't grabbed the template?" />
                </>
              ) : showPayslipTemplateGate ? (
                <>
                  <div dangerouslySetInnerHTML={{ __html: contentBeforeGate }} />
                  <TemplateAccessGate source={`/blog/${post.slug}`} />
                  <div dangerouslySetInnerHTML={{ __html: contentAfterGate }} />
                </>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: cleanContent }} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {post.faq_json && post.faq_json.length > 0 && (
        <section className="section section-alt" style={{ padding: "48px 0" }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <h2 style={{ textAlign: "center", marginBottom: 32 }}>Frequently asked questions</h2>
            <FaqAccordion items={post.faq_json} />
          </div>
        </section>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section blog-related-section">
          <div className="container">
            <div className="blog-related-head">
              <h2>You might also like</h2>
              <p>Explore more articles in {post.category || "HR Insights"}</p>
            </div>
            <div className="blog-grid">
              {relatedPosts.map((related) => (
                <BlogCard post={related} key={related.id} />
              ))}
            </div>
          </div>
        </section>
      )}

      <BlogCtaSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </SiteChrome>
  );
}
