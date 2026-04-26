import Link from "next/link";
import { PageTitle } from "@/components/ui/page-title";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "Careers · Brown & Sullivan",
  description:
    "Careers, co-counsel, and limited roster: how the firm adds producers and professional staff.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageTitle
        volume={3}
        chapter={2}
        eyebrow="CAREERS"
        title="A small bar; an index in the room."
        subtitle={
          "The firm does not run a public job board. Inquiries from licensed producers, compliance leaders, and counsel in complementary jurisdictions are welcome when referred or when a file already exists. Growth is by invitation and by conflict clearance."
        }
        meta={["NO · OPEN · REQ · BOARD", "CO-COUNSEL · WELCOME"]}
      />

      <section className="container-grid border-b border-ink py-12">
        <div className="grid max-w-3xl gap-6 font-body leading-relaxed text-ink-wash">
          <p>
            <span className="font-medium text-ink">How to start.</span> Send a
            short note through the{" "}
            <Link
              href="/contactus"
              className="text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
            >
              contact of record
            </Link>{" "}
            with your NPN (if licensed), home state, and the work you are
            interested in. The firm will reply in writing on business days if
            there is a possible fit. No résumé portal is kept on this site.
          </p>
          <p>
            <span className="font-medium text-ink">Related page.</span> The{" "}
            <Link
              href="/about#careers"
              className="text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
            >
              About
            </Link>{" "}
            file contains the firm&rsquo;s public posture on careers and
            co-counsel; this page is the footer path to the same subject.
          </p>
        </div>
      </section>
    </>
  );
}
