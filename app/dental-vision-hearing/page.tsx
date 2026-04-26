import Link from "next/link";
import { PageTitle } from "@/components/ui/page-title";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "Dental Vision Hearing · Brown & Sullivan",
  description:
    "Dental, vision, and hearing lines in the firm’s directory posture: appointment, script, and compliance evidence where these ancillary health products are in scope for represented clients.",
  path: "/dental-vision-hearing",
});

export default function DentalVisionHearingPage() {
  return (
    <>
      <PageTitle
        volume={2}
        chapter={5}
        eyebrow="DENTAL · VISION · HEARING"
        title="Dental, vision, and hearing in the file when the appointment says so."
        subtitle={
          "Brown &amp; Sullivan’s public materials emphasize Medicare, ACA, and TCPA-governed health distribution. Where a client holds appointment for dental, vision, and hearing product authority, the same record discipline applies: scripts, retention, and disclosure are mapped to the carrier file and the State DOI as applicable."
        }
        meta={["APPOINTED · LINES", "DIRECTORY · INDEXED"]}
      />

      <section className="container-grid border-b border-ink py-12">
        <div className="grid max-w-3xl gap-6 font-body leading-relaxed text-ink-wash">
          <p>
            <span className="font-medium text-ink">No separate marketing
            channel.</span> The firm does not use this page to quote or
            position stand-alone dental, vision, or hearing products. Operations
            follow the same engagement desk and contact path as other lines;
            licensed personnel and carrier appointment gates apply before any
            discussion of product.
          </p>
          <p>
            <span className="font-medium text-ink">Find evidence in the
            directory.</span> Plan and carrier context for in-scope
            distribution partners is indexed in the{" "}
            <Link
              href="/directory#carrier-catalog"
              className="text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
            >
              carrier catalog
            </Link>{" "}
            section of the main directory when a client&rsquo;s program is
            on file. For a new relationship, use{" "}
            <Link
              href="/contactus"
              className="text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
            >
              contact
            </Link>{" "}
            and describe the line and jurisdiction.
          </p>
        </div>
      </section>
    </>
  );
}
