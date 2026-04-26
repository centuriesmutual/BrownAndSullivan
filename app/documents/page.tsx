import Link from "next/link";
import { PageTitle } from "@/components/ui/page-title";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "Documents · Brown & Sullivan",
  description:
    "Index path to scripts, compliance artifacts, directory entries, and filing-class documents maintained by the firm.",
  path: "/documents",
});

export default function DocumentsPage() {
  return (
    <>
      <PageTitle
        volume={2}
        chapter={4}
        eyebrow="DOCUMENTS"
        title="A document is not a file until it is filed."
        subtitle={
          "The firm maintains versioned language, compliance artifacts, and catalog cards as first-class objects. This page is a signpost, not a download center—sealed and carrier-filed materials are released only under counsel and contract."
        }
        meta={["SCRIPTS", "ARTIFACTS", "CATALOG"]}
      />

      <section className="container-grid border-b border-ink py-12">
        <ul className="max-w-2xl space-y-4 font-body text-ink-wash">
          <li>
            <Link
              href="/scripts"
              className="font-medium text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
            >
              Script library
            </Link>
            <span> — versioned, regulator-facing sales and verification
            language.</span>
          </li>
          <li>
            <Link
              href="/compliance-artifacts"
              className="font-medium text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
            >
              Compliance artifacts
            </Link>
            <span> — sealed evidence classes and attestation request path.</span>
          </li>
          <li>
            <Link
              href="/directory"
              className="font-medium text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
            >
              Full directory
            </Link>
            <span> — search by title, code, tag, and citation.</span>
          </li>
          <li>
            <Link
              href="/contactus"
              className="font-medium text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
            >
              Contact the firm
            </Link>
            <span> — for certified copies, form packets, or RFP addenda not
            posted here.</span>
          </li>
        </ul>
      </section>
    </>
  );
}
