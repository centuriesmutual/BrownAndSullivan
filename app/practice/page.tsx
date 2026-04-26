import { PageTitle } from "@/components/ui/page-title";
import { LinkButton } from "@/components/ui/button";

export const metadata = {
  title: "Our Practice · Brown & Sullivan",
  description:
    "How the firm is organized for Medicare, ACA, and TCPA-governed distribution: intake, record, and counsel under appointment.",
};

export default function PracticePage() {
  return (
    <>
      <PageTitle
        volume={2}
        chapter={1}
        eyebrow="THE · PRACTICE"
        title="A narrow bar for a wide regulatory perimeter."
        subtitle="Brown &amp; Sullivan is built as a compliance and counsel practice for organizations that need a reviewable file before they scale outbound enrollment and marketing. The work is not advertising—it is process, notice, and proof."
        meta={["INTAKE", "APPOINTED · STATES", "EVIDENCE · FILE"]}
      />

      <section className="container-grid border-b border-ink py-12">
        <div className="grid max-w-3xl gap-6 font-body text-ink-wash leading-relaxed">
          <p>
            <span className="text-ink font-medium">Scope.</span> The practice
            couples licensed insurance operations with required disclosures,
            call controls, and retention that align with Medicare Communications
            and Marketing Guidelines, marketplace rules, and TCPA where
            telephony and texting are in scope. Every engagement is structured so
            that counsel can defend the file under examination.
          </p>
          <p>
            <span className="text-ink font-medium">How matters move.</span> New
            relationships begin with a written description of the distribution
            model, a conflicts review, and an engagement or appointment letter
            as applicable. Ongoing work is supported by the directory,
            compliance artifacts, and versioned scripts the firm maintains for
            its clients.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <LinkButton href="/about" size="lg" variant="ghost">
            About the firm
          </LinkButton>
          <LinkButton href="/contactus" size="lg">
            Contact us
          </LinkButton>
        </div>
      </section>
    </>
  );
}
