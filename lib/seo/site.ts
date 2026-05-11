/**
 * Canonical site origin — set NEXT_PUBLIC_SITE_URL in deployment (production domain or Netlify preview).
 * Trailing slashes are normalized away for joining paths.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://arvilogisticc.netlify.app"
).replace(/\/+$/, "");

export function absoluteUrl(path: string): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
