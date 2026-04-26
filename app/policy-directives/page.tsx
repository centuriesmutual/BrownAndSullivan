import { PageTitle } from "@/components/ui/page-title";
import {
  FilingExhibitList,
  FilingExhibitRequestBlurb,
} from "@/components/filing-exhibits/filing-exhibit-list";
import { directoryEntries } from "@/content/directory";
import { pageMetadata } from "@/lib/seo-metadata";

const policyDirectives = directoryEntries.filter(
  (e) => e.category === "Regulatory Framework"
);

export const metadata = pageMetadata({
  title: "Policy Directives · Brown & Sullivan",
  description:
    "Firm policy directives tied to TCPA, CMS MCMG, HIPAA, state DOI, and FTC TSR—mapped to operating controls and review cycles.",
  path: "/policy-directives",
});

export default function PolicyDirectivesPage() {
  return (
    <>
      <PageTitle
        volume={1}
        chapter={5}
        eyebrow="POLICY · DIRECTIVES"
        title="How the firm encodes the law in procedure."
        subtitle={
          "Each directive below is the Brown & Sullivan mapping from a primary statute or rule set to the decisions agents, platforms, and counsel must make on the wire. They are not substitutes for the underlying law; they are the house rules that make evidence admissible on review."
        }
        meta={[
          `${policyDirectives.length} · DIRECTIVE · PILLARS`,
          "RECONCILED · TO · CARRIER · FILED · MATERIEL",
        ]}
      />
      <FilingExhibitRequestBlurb>
        Compliance, legal, and carrier partners use this list to see which
        external regimes are folded into the firm&rsquo;s control matrix and
        where to request a written attestation, policy addendum, or training
        supplement. The cards mirror the same regulatory framework objects in
        the public directory at a narrative depth suitable for RFPs and
        examinations.
      </FilingExhibitRequestBlurb>
      <FilingExhibitList entries={policyDirectives} />
    </>
  );
}
