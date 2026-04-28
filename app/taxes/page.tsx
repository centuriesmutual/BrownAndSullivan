import Image from "next/image";
import Link from "next/link";
import { PageTitle } from "@/components/ui/page-title";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "Taxes · Brown & Sullivan",
  description:
    "Tax information, reporting coordinates, and documentation expectations for producers, staff, and counsel — federal and state posture for Medicare and ACA distribution.",
  path: "/taxes",
});

const reportingRows = [
  {
    code: "W-2 / 1099 · NEC",
    detail:
      "Compensation, overrides, and SPIFF-type payments are classified at issuance. Year-end statements align with vendor files and the general ledger before release.",
  },
  {
    code: "1095-B / 1095-C",
    detail:
      "Where the firm or an affiliate is an ALE or furnishes MEC documentation, furnish and file on IRS calendars. Employee copies follow secure distribution channels.",
  },
  {
    code: "1040 · Schedules",
    detail:
      "Individual obligations remain with the taxpayer. The firm does not prepare personal returns; licensed preparers are engaged when engagement scope requires.",
  },
];

const pillarCards = [
  {
    title: "Income characterization",
    body: "Commission, renewal, bonuses, chargebacks, and chargeback reversals carry distinct character for cash- and accrual-basis filers; GL mapping preserves traceability.",
  },
  {
    title: "State & local conformity",
    body: "Nexus-sensitive activities are reviewed against payroll situs, licensing footprint, and remote-work arrangements; no single rule covers every jurisdiction.",
  },
  {
    title: "Estimated payments",
    body: "Where income is episodic or lumpy, safe-harbor and annualization methods are documented so counsel can defend timing if examined.",
  },
  {
    title: "Penalty abatement hooks",
    body: "First-time abatement, reasonable cause memoranda, and transcript review are reserved paths — invoked only after facts are locked in the record.",
  },
];

const statutes = [
  {
    cite: "26 U.S.C. § 6041 · Information returns",
    text: "Payments in the ordinary course exceeding threshold amounts generate information returns — vendor setup and tin validation precede disbursement.",
  },
  {
    cite: "26 U.S.C. §§ 6721–6724 · Penalties",
    text: "Information return failures escalate with intent and repetition; correction events are logged contemporaneously.",
  },
  {
    cite: "State insurer / DOI levy schedules",
    text: "Premium taxes and regulatory assessments vary by admitted status, line, and carve-outs; carrier statements govern remittance posture.",
  },
];

export default function TaxesPage() {
  return (
    <>
      <PageTitle
        volume={3}
        chapter={7}
        eyebrow="FEDERAL · STATE · FIRM RECORD"
        title="Tax composure for regulated distribution."
        subtitle="This page summarizes how Brown & Sullivan thinks about taxation in the perimeter of Medicare, ACA, and TCPA enrollment — classification, withholding, filings, retention, and handoff to licensed preparers."
        meta={["ADVISORY · NOT TAX ADVICE", "COORDINATE · WITH · COUNSEL"]}
      />

      <section
        aria-labelledby="taxes-hero-heading"
        className="taxes-bg-mesh border-b border-ink"
      >
        <div className="container-grid section-y grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-6 lg:col-start-1 flex flex-col justify-center gap-6">
            <p className="filing-index" id="taxes-hero-heading">
               Operating picture
            </p>
            <h2 className="display-section max-w-xl">
               Accruals, disbursements, and regulatory premiums in one ledger.
            </h2>
            <p className="body-prose body-prose-wash max-w-xl">
               The objective is coherence: contracts, commissions, subsidies, carrier
               chargebacks, and state assessments must reconcile to the same story an
               examiner would reconstruct from subpoenaed banking and payroll records.
            </p>
            <div className="taxes-pill-row pt-2">
              <span className="taxes-pill">IRC alignment</span>
              <span className="taxes-pill">state conformity</span>
              <span className="taxes-pill">evidence-ready</span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="taxes-hero-image-ring relative aspect-square w-full overflow-hidden">
              <Image
                src="/lawbooknobackground.png"
                alt=""
                fill
                className="object-contain p-5"
                sizes="(max-width: 1024px) 100vw, 400px"
                priority
              />
            </div>
            <p className="ledger-sm mt-4 text-[rgba(10,10,10,0.55)]">
              Fig. · representation · counsel · tax posture
            </p>
          </div>
        </div>
      </section>

      <div className="taxes-marquee-strip" aria-hidden="true">
        W-2 · 1099 NEC · MISC · INT · FORM 941 · SCHEDULE SE · FORM 8940 · RECORD
        RETENTION · SIGNED · TOKENS · GL · ACCOUNT · PERIOD CLOSE
      </div>

      <section
        id="material-facts"
        className="border-b border-ink bg-paper py-14 lg:py-20"
      >
        <div className="container-grid">
          <div className="max-w-2xl">
            <h2 className="display-headline-sm">Material facts locked before dial.</h2>
            <p className="body-prose body-prose-wash mt-5">
              Enrollment teams touch sensitive compensation data. Policies below keep
              that data inside the retention envelope and aligned with underwriting and
              carrier remittance timelines.
            </p>
          </div>
          <div className="taxes-grid-cards mt-12">
            {pillarCards.map((c) => (
              <article key={c.title} className="taxes-card-slab rounded-xl">
                <h3 className="font-display text-xl font-medium tracking-tight">
                  {c.title}
                </h3>
                <p className="body-prose body-prose-wash mt-4 text-[15px] leading-relaxed">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="reporting"
        className="taxes-bg-mesh border-b border-ink py-14 lg:py-20"
      >
        <div className="container-grid grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-5">
            <div className="ledger-sm mb-4">COORDINATES · REPORTING</div>
            <h2 className="display-headline-sm">
               Forms that typically intersect this practice.
            </h2>
            <p className="body-prose body-prose-wash mt-4">
               Not exhaustive — your facts control. Rows summarize how the firm aligns
               internal controls when these forms surface in engagements.
            </p>
          </div>
          <dl className="col-span-12 lg:col-span-7 flex flex-col gap-0 divide-y divide-ink/10">
            {reportingRows.map((r) => (
              <div key={r.code} className="taxes-edge-accent py-7 first:pt-0">
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink">
                  {r.code}
                </dt>
                <dd className="body-prose body-prose-wash mt-3 text-[15px] leading-relaxed">
                  {r.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="dark-ledger"
        className="taxes-bg-ink-fields border-y border-ink/80 py-16 lg:py-[5.25rem]"
      >
        <div className="container-grid grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
            <div className="ledger-sm text-[rgba(246,243,238,0.72)]">
              EXHIBIT · TL · HOLD
            </div>
            <h2 className="display-headline-sm text-paper-cream">
               Holding period awareness.
            </h2>
            <p className="font-body text-base leading-relaxed text-[rgba(246,243,238,0.82)]">
               Short-term versus long-term marks matter when equity or partnership
               interests churn. Ordinary income from operations is not merged with
               capital accounts without ledger notation.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 grid gap-4">
            <div className="rounded-xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-sm">
              <h3 className="font-display text-xl text-paper-cream">
                Passive activity & intermediary entities
              </h3>
              <p className="mt-4 font-body text-[15px] leading-relaxed text-[rgba(246,243,238,0.78)]">
                LLCs and block-holding structures carrying agency agreements are reviewed
                for self-employment contours, ordinary versus guaranteed payments, and
                basis before distributions post to partners.
              </p>
              <div className="taxes-pill-row mt-6">
                <span className="taxes-pill" data-tone="dark">
                  K-1 review
                </span>
                <span className="taxes-pill" data-tone="dark">
                  basis ledger
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 lg:py-20">
        <div className="container-grid grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-4">
            <div className="ledger-sm mb-4">CONTROL · SEQUENCE</div>
            <h2 className="display-headline-sm">Year-end close choreography.</h2>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 mt-10 lg:mt-0">
            <ol className="taxes-numbered border-t border-gray pt-2">
              <li className="body-prose body-prose-wash pt-2 border-b border-transparent">
                <strong className="text-ink">Trial tie-out.</strong> GL, sub-ledgers,
                carrier statements, and bank recs converge on a dated close memo.
              </li>
              <li className="body-prose body-prose-wash pt-2">
                <strong className="text-ink">Vendor master cleanse.</strong> Tin match,
                name-line accuracy, bankruptcy flags, and duplicate payees resolved
                before 1099 print.
              </li>
              <li className="body-prose body-prose-wash pt-2">
                <strong className="text-ink">Preparer handoff kit.</strong> Signed
                representation letters, capitalization schedules, and fixed-asset rolls
                with placed-in-service dates.
              </li>
              <li className="body-prose body-prose-wash pt-2">
                <strong className="text-ink">Seal & index.</strong> PDF binders keyed to
                the audit artifact index mirror{" "}
                <Link href="/compliance-artifacts" className="underline decoration-ink/30 underline-offset-2">
                   compliance artifacts
                </Link>{" "}
                naming.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section
        id="authorities"
        className="border-t border-ink bg-paper-cream py-14 lg:py-20"
      >
        <div className="container-grid">
          <div className="max-w-xl">
            <div className="ledger-sm mb-4">BLACK-LETTER · ANCHORS</div>
            <h2 className="display-headline-sm">Statutory footholds cited in audits.</h2>
            <p className="body-prose body-prose-wash mt-4">
               Illustrative citations only — defenses are factual. Counsel interprets how
               these sections interact with your entity type and filings.
            </p>
          </div>
          <div className="mt-12 space-y-8 max-w-4xl">
            {statutes.map((s) => (
              <div key={s.cite} className="rounded-lg border border-ink/10 bg-paper p-7 shadow-[0_8px_32px_rgba(10,10,10,0.04)]">
                <div className="font-mono text-xs uppercase tracking-[0.08em] text-ink">
                  {s.cite}
                </div>
                <p className="body-prose body-prose-wash mt-4 text-[15px] leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink bg-ink py-14 text-paper-cream">
        <div className="container-grid flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-medium tracking-tight md:text-[1.85rem]">
               Questions belong in a privileged channel.
            </h2>
            <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-[rgba(246,243,238,0.82)]">
               This overview is informational, not individualized tax advice. For
               engagements, route questions through counsel or the designated firm
               controller.
            </p>
          </div>
          <Link
            href="/contactus"
            className="inline-flex items-center justify-center border-2 border-paper-cream px-8 py-3 font-mono text-xs uppercase tracking-[0.14em] text-paper-cream transition-colors hover:bg-paper-cream hover:text-ink"
          >
            Contact counsel
          </Link>
        </div>
      </section>
    </>
  );
}
