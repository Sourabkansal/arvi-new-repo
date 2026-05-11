import { ROUTE_META } from "@/lib/seo/routes-metadata";
import { SITE_URL } from "@/lib/seo/site";

/**
 * Structured data graphs for Organization, WebSite, breadcrumbs.
 * @see https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
 */

export function jsonLdOrganization(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: "ARVI Logistics",
    alternateName: ["Arvi Logistics", "ARVI Logistics Inc"],
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    telephone: "+1-570-330-6181",
    email: "Inquiry@arvilogisticsinc.com",
    slogan: ROUTE_META["/"].description.slice(0, 155),
    description: ROUTE_META["/"].description,
    priceRange: "$$",
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Pennsylvania",
        containedInPlace: { "@type": "Country", name: "United States" },
      },
      { "@type": "Country", name: "United States" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "150 Dessen Drive, Suite B",
      addressLocality: "Hazle Township",
      addressRegion: "PA",
      postalCode: "18201",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.9576,
      longitude: -75.9746,
    },
    knowsAbout: [
      "Freight brokerage",
      "National truckload and LTL",
      "Intermodal and port logistics",
      "Warehouse and distribution coordination",
      "Cold chain refrigerated freight",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "ARVI Logistics transportation solutions",
      itemListElement: [
        offerServiceLink(
          "Truckload brokerage & partial freight brokerage",
          ROUTE_META["/over-the-road"].path,
        ),
        offerServiceLink("Intermodal shipping & port logistics", ROUTE_META["/intermodal"].path),
        offerServiceLink("Warehousing & distribution support", ROUTE_META["/warehouse"].path),
        offerServiceLink("Carrier network & capacity", ROUTE_META["/carriers"].path),
      ],
    },
    sameAs: [] as string[],
  };
}

function offerServiceLink(name: string, path: string): Record<string, unknown> {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  return {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "United States",
      audience: {
        "@type": "Audience",
        audienceType: ["Shippers", "Manufacturers", "Carriers", "Warehouse operators"],
      },
      url,
    },
  };
}

export function jsonLdWebSite(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "ARVI Logistics",
    description: ROUTE_META["/"].description,
    inLanguage: "en-US",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function jsonLdBreadcrumb(
  crumbs: readonly { name: string; url: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url.startsWith("http") ? c.url : `${SITE_URL}${c.url.startsWith("/") ? "" : "/"}${c.url}`,
    })),
  };
}
