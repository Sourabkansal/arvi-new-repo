import type { ReactElement } from "react";

import { JsonLd } from "@/app/components/seo/JsonLd";
import { jsonLdOrganization, jsonLdWebSite } from "@/lib/seo/jsonld-graph";

export function GlobalJsonLd(): ReactElement {
  return (
    <JsonLd id="global-arvi-schema" data={[jsonLdOrganization(), jsonLdWebSite()]} />
  );
}
