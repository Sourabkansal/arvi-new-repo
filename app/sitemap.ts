import type { MetadataRoute } from "next";

import { absoluteCanonical } from "@/lib/seo/metadata";

const paths: { path: string; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  { path: "/over-the-road", changeFrequency: "weekly", priority: 0.9 },
  { path: "/warehouse", changeFrequency: "weekly", priority: 0.85 },
  { path: "/intermodal", changeFrequency: "weekly", priority: 0.85 },
  { path: "/carriers", changeFrequency: "weekly", priority: 0.85 },
  { path: "/careers", changeFrequency: "monthly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return paths.map(({ path, changeFrequency, priority }) => ({
    url: absoluteCanonical(path),
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
