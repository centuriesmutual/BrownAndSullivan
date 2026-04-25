import { SectionOpener } from "@/components/ui/section-opener";

interface ProgramElement {
  marker: string;
  title: string;
  body: string;
}

const elements: ProgramElement[] = [
  {
    marker: "i.",
    title: "Written Policies & Procedures",
    body: "Internal policies governing every regulated activity of the firm — outbound contact, recording, disclosure delivery, scope capture, plan presentation, voice verification, retention, breach response — version-controlled, attested by every agent, and producible to a regulator on demand.",
  },
  {
    marker: "ii.",
    title: "Training & Certification",
    body: "Annual AHIP, carrier product training, HIPAA, TCPA, and CMS marketing certifications, tracked per agent against a calendar year. An agent whose certification has lapsed is blocked from the dialing queue by the Compliance Engine until the lapse is cured.",
  },
  {
    marker: "iii.",
    title: "Monitoring & Quality Assurance",
    body: "Continuous automated rule monitoring of the audit ledger, sampled human review of recorded engagements against published scoring rubrics, and structured remediation when an engagement falls below the rubric threshold.",
  },
  {
    marker: "iv.",
    title: "Corrective Action & Reporting",
    body: "Compliance case management with documented identification, investigation, remediation, and verification of effectiveness — and a written report to the firm's compliance committee at each calendar quarter.",
  },
];

export function ComplianceProgram() {
  return (
    <section
      id="compliance-program"
      aria-labelledby="program-heading"
      className="border-b border-ink bg-paper"
    >
      <div className="section-y">
        <SectionOpener
          index={7}
          filingLabel="THE COMPLIANCE PROGRAM"
          title="The Compliance Program"
          description="The firm operates a documented compliance program in the form a federal or state examiner expects to see. Each element below is maintained as a written policy, an operational artifact, and a calendar of attestations."
        />

        <div className="container-grid mt-12">
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-ink bg-paper">
            {elements.map((e, i) => (
              <li
                key={e.marker}
                className="relative p-7 lg:p-8 flex flex-col"
                style={{
                  borderLeft:
                    i % 4 !== 0 ? "1.5px solid #0A0A0A" : undefined,
                  borderTop:
                    i >= 4 ? "1.5px solid #0A0A0A" : undefined,
                }}
              >
                <header className="flex items-baseline justify-between border-b border-ink pb-3 mb-5">
                  <span
                    aria-hidden="true"
                    className="font-display italic text-3xl"
                  >
                    {e.marker}
                  </span>
                  <span className="ledger-sm opacity-80">
                    PRG · {String(i + 1).padStart(2, "0")}
                  </span>
                </header>
                <h3 className="font-display text-xl leading-tight smcp tracking-wide mb-3">
                  {e.title}
                </h3>
                <p className="body-prose body-prose-wash text-[15px]">
                  {e.body}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute bottom-3 right-3 h-2.5 w-2.5 bg-ink"
                />
              </li>
            ))}
          </ol>
          <p className="ledger-sm mt-6 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>FULL PROGRAM DOCUMENTATION</span>
            <span aria-hidden="true">·</span>
            <a href="/compliance" className="firm-link">
              /compliance
            </a>
            <span aria-hidden="true">·</span>
            <a href="/audit" className="firm-link">
              /audit
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
