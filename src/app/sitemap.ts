import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

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
