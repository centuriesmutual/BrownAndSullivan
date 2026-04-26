import type { Metadata } from "next";

/**
 * Per-route SEO. Pass **exact** `title` strings — browser tab titles must not drift from design.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: normalizedPath,
    },
    openGraph: {
      title,
      description,
      url: normalizedPath,
      siteName: "Brown & Sullivan",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
