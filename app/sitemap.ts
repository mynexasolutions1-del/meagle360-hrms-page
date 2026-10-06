import type { MetadataRoute } from "next";
import { getPublishedPosts } from "../lib/posts";
import { getAllJobs } from "../lib/jobs";
import { FEATURE_PAGES } from "../lib/features-data";

const BASE = "https://www.meagle360.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const statics: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE}/pricing`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/demo`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/contact`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${BASE}/blog`, priority: 0.8, changeFrequency: "daily" },
    { url: `${BASE}/careers`, priority: 0.5, changeFrequency: "weekly" },
    { url: `${BASE}/about`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${BASE}/security`, priority: 0.4, changeFrequency: "monthly" },
    { url: `${BASE}/privacy`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${BASE}/terms`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${BASE}/alternatives/keka-alternative`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/alternatives/greythr-alternative`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/solutions/hrms-for-startups`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/tools/payslip-generator`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/tools/ctc-to-in-hand-calculator`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/tools/quotation-maker`, priority: 0.8, changeFrequency: "monthly" },
  ];

  const posts = await getPublishedPosts();
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.updated_at ? new Date(post.updated_at) : undefined,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const jobs = await getAllJobs();
  const jobRoutes: MetadataRoute.Sitemap = jobs.map((job) => ({
    url: `${BASE}/careers/${job.slug}`,
    lastModified: job.updated_at ? new Date(job.updated_at) : undefined,
    priority: 0.4,
  }));

  const featureRoutes: MetadataRoute.Sitemap = FEATURE_PAGES.map((f) => ({
    url: `${BASE}/features/${f.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...statics, ...postRoutes, ...jobRoutes, ...featureRoutes];
}
