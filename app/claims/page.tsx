import Link from "next/link";
import { PageTitle } from "@/components/ui/page-title";

export const metadata = {
  title: "Claims · Brown & Sullivan",
  description:
    "How Brown & Sullivan treats claim-related questions in the regulated health insurance file — intake, notice, and counsel routing.",
};

export default function ClaimsPage() {
  return (
    <>
      <PageTitle
        volume={4}
        chapter={2}
        eyebrow="CLAIMS · &amp; · NOTICE"
        title="The firm is not a claims administrator."
        subtitle={
          "This page is for counter parties who have a record problem that touches benefit claims, enrollment errors, or carrier escalations, and need counsel to describe the file—not to adjust a specific claim on the public web. Brown &amp; Sullivan does not host a consumer claims portal here."
        }
        meta={["NO · TPA · STATUS", "COUNSEL · INTAKE"]}
      />

      <section className="container-grid border-b border-ink py-12">
        <div className="grid max-w-3xl gap-6 font-body leading-relaxed text-ink-wash">
          <p>
            <span className="font-medium text-ink">What we can help with.</span>{" "}
            Licensed clients and distribution partners may need documentation,
            retention attestations, or narrative position letters where a
            claim or member dispute intersects with compliance,
            contract, or DOI process. That work is opened on referral and
            under a written scope.
          </p>
          <p>
            <span className="font-medium text-ink">Members and consumers.</span>{" "}
            If you are looking to file or track a health insurance claim, use
            your carrier&apos;s or MCO&apos;s published claims number and web
            tools. The firm is not a substitute for the carrier.
          </p>
          <p>
            <span className="font-medium text-ink">Reaching the firm.</span> Use
            the{" "}
            <Link
              href="/contactus"
              className="text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
            >
              contact of record
            </Link>{" "}
            to describe a matter in brief. Do not put claim numbers, diagnosis,
            or other PHI in an unsecured first email; counsel will reply on
            business days with a secure next step.
          </p>
        </div>
      </section>
    </>
  );
}
