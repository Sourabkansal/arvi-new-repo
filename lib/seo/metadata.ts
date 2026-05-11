import { mergeDefaultOpenGraph } from "@/lib/seo/routes-metadata";
import type { RouteMetaDef } from "@/lib/seo/routes-metadata";
import { SITE_URL } from "@/lib/seo/site";
import type { Metadata } from "next";

const defaultTwitterCreator = "@arvilogistics";

export function absoluteCanonical(path: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/**
 * Canonical App Router `Metadata` with Open Graph, Twitter Cards, and robots directives.
 */
export function buildRouteMetadata(routeDef: RouteMetaDef): Metadata {
  const canonical = absoluteCanonical(routeDef.path);
  const ogBase = mergeDefaultOpenGraph(routeDef);

  return {
    title: routeDef.title,
    description: routeDef.description,
    keywords: routeDef.keywords,
    authors: [{ name: "ARVI Logistics", url: SITE_URL }],
    creator: "ARVI Logistics",
    publisher: "ARVI Logistics",
    metadataBase: new URL(SITE_URL.endsWith("/") ? SITE_URL : `${SITE_URL}/`),
    alternates: { canonical },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      ...ogBase,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: routeDef.title,
      description: routeDef.description,
      creator: defaultTwitterCreator,
    },
    category: "transportation logistics",
    other: {
      "geo.region": "US-PA",
      "geo.placename": "Hazle Township",
    },
  };
}
