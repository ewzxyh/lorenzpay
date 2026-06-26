import type { MetadataRoute } from "next";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://lorenzopay.com.br"
).replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/contact", "/privacy"];

  return pages.map((page) => ({
    url: `${siteUrl}${page}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1 : 0.6,
  }));
}
