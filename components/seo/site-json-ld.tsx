import { getSiteUrl } from "@/lib/site";

const SITE_NAME = "Brown & Sullivan";

export function SiteJsonLd() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: SITE_NAME,
        description:
          "Counsel and compliance program for Medicare, ACA, and TCPA-governed health insurance distribution.",
        inLanguage: "en-US",
        publisher: { "@id": `${url}/#organization` },
      },
      {
        "@type": "LegalService",
        "@id": `${url}/#organization`,
        name: SITE_NAME,
        description:
          "Compliance counsel and directory-of-record services for clients offering Medicare, ACA, and other regulated health coverage.",
        url,
        areaServed: { "@type": "Country", name: "United States" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lubbock",
          addressRegion: "TX",
          addressCountry: "US",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
