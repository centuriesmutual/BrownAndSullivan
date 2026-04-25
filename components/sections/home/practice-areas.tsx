import Link from "next/link";
import { SectionOpener } from "@/components/ui/section-opener";

interface PracticeArea {
  code: string;
  shortName: string;
  title: string;
  body: string;
  href: string;
}

const areas: PracticeArea[] = [
  {
    code: "REF · 368.42 · MA",
    shortName: "Medicare Advantage",
    title: "Medicare Advantage",
    body: "Representation of beneficiaries in the selection and enrollment of Medicare Part C plans across all CMS contract types — HMO, PPO, SNP, MSA — within the Annual, Initial, Open, and Special Enrollment Periods.",
    href: "/directory#carrier-catalog",
  },
  {
    code: "REF · 368.43 · PDP",
    shortName: "Medicare Part D",
    title: "Medicare Part D",
    body: "Representation of beneficiaries in stand-alone prescription drug plan selection, with formulary verification and pharmacy network confirmation prior to any election.",
    href: "/directory#carrier-catalog",
  },
  {
    code: "REF · 368.44 · MEDIGAP",
    shortName: "Medicare Supplement",
    title: "Medicare Supplement",
    body: "Representation of beneficiaries in Medigap plan selection, including health-statement underwriting and guaranteed-issue rights advisement, where applicable.",
    href: "/directory#carrier-catalog",
  },
  {
    code: "REF · 362.10 · ACA",
    shortName: "ACA Marketplace",
    title: "ACA Marketplace",
    body: "Representation of households in Qualified Health Plan selection through the Federally-Facilitated Marketplace and state-based exchanges, with subsidy estimation and enrollment transfer to the firm's Enhanced Direct Enrollment partner.",
    href: "/directory#carrier-catalog",
  },
];

export function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      aria-labelledby="practice-areas-heading"
      className="border-b border-ink bg-paper"
    >
      <div className="section-y">
        <SectionOpener
          index={3}
          filingLabel="PRACTICE AREAS"
          title="Practice Areas"
          description="The firm's representations are confined to four areas of regulated health insurance distribution. Each area is a separate body of law, a separate carrier-appointment regime, and a separate file at audit."
        />
        <div
          className="container-grid mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-ink"
          style={{ gridAutoRows: "minmax(320px, auto)" }}
        >
          {areas.map((a, i) => (
            <Link
              key={a.code}
              href={a.href}
              className="relative p-7 lg:p-8 flex flex-col bg-paper hover:bg-ink hover:text-paper-cream transition-colors group"
              style={{
                borderLeft:
                  i !== 0 ? "1.5px solid #0A0A0A" : undefined,
              }}
            >
              <div className="ledger-sm mb-4 opacity-80 group-hover:opacity-100">
                {a.code}
              </div>
              <h3 className="font-display text-3xl leading-tight smcp tracking-wide mb-4">
                {a.title}
              </h3>
              <p className="body-prose body-prose-wash group-hover:text-paper-cream">
                {a.body}
              </p>
              <footer className="mt-auto pt-5 ledger-sm border-t border-current opacity-80 group-hover:opacity-100 flex items-center justify-between">
                <span>READ THE FILE</span>
                <span aria-hidden="true">→</span>
              </footer>
              <span
                aria-hidden="true"
                className="absolute bottom-3 right-3 h-3 w-3 bg-ink group-hover:bg-paper-cream"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
