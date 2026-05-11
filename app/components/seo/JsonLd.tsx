import type { ReactElement } from "react";

interface JsonLdProps {
  id?: string;
  data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Renders JSON-LD payloads for structured data supported by Google.
 */
export function JsonLd({ id, data }: JsonLdProps): ReactElement {
  const graphs = Array.isArray(data) ? data : [data];
  const json = graphs.length === 1 ? graphs[0] : graphs;
  const jsonLdString = JSON.stringify(json);

  return (
    <script
      {...(id ? { id } : {})}
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: jsonLdString }}
    />
  );
}
