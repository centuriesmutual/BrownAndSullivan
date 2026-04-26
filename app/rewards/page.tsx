import Link from "next/link";
import { PageTitle } from "@/components/ui/page-title";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "Rewards · Brown & Sullivan",
  description:
    "Recognition and reward posture for distribution partners: documented criteria tied to compliance performance and written carrier programs.",
  path: "/rewards",
});

export default function RewardsPage() {
  return (
    <>
      <PageTitle
        volume={3}
        chapter={4}
        eyebrow="REWARDS · &amp; · RECOGNITION"
        title="Incentives you can file next to a scorecard."
        subtitle={
          "The firm does not run a public points mall. Commercial rewards, bonuses, and trips where offered are issued only under written carrier and MGA programs that Brown &amp; Sullivan documents in the directory of record, with eligibility, disclosure, and evidence rules satisfied before a producer or partner is told they have earned anything."
        }
        meta={["CARRIER · PROGRAMS · ONLY", "EVIDENCE · FIRST"]}
      />

      <section className="container-grid border-b border-ink py-12">
        <div className="grid max-w-3xl gap-6 font-body leading-relaxed text-ink-wash">
          <p>
            <span className="font-medium text-ink">What this page is for.</span>{" "}
            Licensed producers, distribution partners, and their counsel use it
            to understand that the firm’s prior “compliance engine” label in
            operations referred to a single gating and evidence system. The
            same controls now frame how reward eligibility is proved: if the
            file does not show compliant calls, there is no attestation of
            points or tiers.
          </p>
          <p>
            <span className="font-medium text-ink">Asking for a program file.</span>{" "}
            To request a copy of a carrier or MGA reward plan summary, schedule,
            or evidence checklist that the firm has on file, contact counsel
            through the{" "}
            <Link
              href="/contactus"
              className="text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
            >
              contact of record
            </Link>
            . No reward is implied by this page; terms are controlled by the
            underlying contract and the carrier.
          </p>
          <p>
            <span className="font-medium text-ink">Consumers.</span> This is not
            a consumer loyalty program. If you are a member of the public with a
            privacy or marketing question, use our general contact channels; for
            opt-out of sale, see{" "}
            <Link
              href="/do-not-sell"
              className="text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
            >
              Do not sell
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
