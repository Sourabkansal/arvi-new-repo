/** Broad SEO keyword buckets — compose into page-specific `keywords` arrays. */

export const PRIMARY_KEYWORDS = [
  "logistics company USA",
  "freight transportation services",
  "truckload shipping",
  "LTL freight services",
  "warehousing solutions",
  "intermodal transportation",
  "freight broker company",
  "supply chain logistics",
  "flatbed trucking services",
  "drayage logistics",
  "refrigerated freight shipping",
  "nationwide freight services",
  "shipping and logistics company",
  "transportation solutions USA",
  "carrier freight network",
] as const;

export const SECONDARY_KEYWORDS = [
  "reliable freight shipping",
  "logistics partner",
  "freight management solutions",
  "secure warehousing",
  "rail and truck logistics",
  "shipping solutions for businesses",
  "fast freight delivery",
  "scalable logistics solutions",
  "nationwide trucking company",
  "freight carrier solutions",
] as const;

export const LOCAL_SEO_KEYWORDS = [
  "logistics company in Pennsylvania",
  "freight company Hazle Township PA",
  "transportation company Pennsylvania",
  "warehousing Pennsylvania",
  "trucking services Pennsylvania",
] as const;

export function joinKeywords(parts: readonly string[]): string {
  return [...parts].join(", ");
}
