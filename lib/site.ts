/**
 * Canonical site origin. Override in production with NEXT_PUBLIC_SITE_URL.
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  return "https://brownandsullivan.example";
}
