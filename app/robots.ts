import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo/site";

/** Control crawler budgets; disallow non-public endpoints if added later. */
export default function robots(): MetadataRoute.Robots {
  const host = SITE_URL.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
