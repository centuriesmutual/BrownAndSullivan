import { SectionHeader } from "@/components/ui/section-header";

interface Stage {
  letter: string;
  code: string;
  title: string;
  caption: string;
  serif: string;
}

const stages: Stage[] = [
  {
    letter: "I",
    code: "STG · 01 · RCV",
    title: "Receipt & Validation",
    caption: "POST · /v1/leads.intake",
    serif: "Schema validated, duplicates resolved, source attributed, consent receipt bound at the moment of arrival.",
  },
  {
    letter: "II",
    code: "STG · 02 · ENR",
    title: "Pre-Contact Enrichment",
    caption: "RUN · /v1/scrub.dnc",
    serif: "Reassigned-number scrub, jurisdiction enrichment, time-zone resolution, and federal/state/internal DNC pre-check.",
  },
  {
    letter: "III",
    code: "STG · 03 · SCR",
    title: "Lead Scoring",
    caption: "EVAL · /v1/score.composite",
    serif: "Composite score across consent freshness, jurisdiction, vendor quality, and historical conversion — sets queue priority.",
  },
  {
    letter: "IV",
    code: "STG · 04 · STL",
    title: "Speed-to-Lead Dialing",
    caption: "DIAL · sub-5min · cap·N",
    serif: "Sub-five-minute dial cadence on freshly consented leads, gated by the Compliance Engine token, capped to state-law dial frequency.",
  },
  {
    letter: "V",
    code: "STG · 05 · ENG",
    title: "Engagement",
    caption: "REC · /v1/call.connected",
    serif: "Identification, recording disclosure, consent re-confirmation, qualification, and warm hand-off to a licensed producer.",
  },
  {
    letter: "VI",
    code: "STG · 06 · NUR",
    title: "Nurture",
    caption: "MULTI · CHANNEL · NURTURE",
    serif: "Multi-touch follow-up across voice, 10DLC SMS, and email — with strict opt-out handling and per-channel consent gating.",
  },
  {
    letter: "VII",
    code: "STG · 07 · X-MED",
    title: "Cross-Sell to Medicare",
    caption: "X · ACA → MED · 65+",
    serif: "Aging-into-Medicare and household-Medicare pathway off the ACA file — re-consent, fresh SOA, TPMO, and licensure check before any plan discussion.",
  },
];

export function LeadLifecycle() {
  return (
    <section id="lead-lifecycle" className="bg-paper">
      <SectionHeader
        index={7}
        eyebrow="THE LEAD LIFECYCLE"
        title="From purchased ACA lead to Medicare cross-sell."
        description="Seven stages, in order. The pipeline begins at the moment of lead purchase and ends — for the qualifying file — at the door of Medicare. Each stage is gated. Each stage issues its own evidence. Every transition is logged."
        align="split"
      />
      <div className="container-grid pb-16">
        <ol
          className="grid border border-ink"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
          }}
        >
          {stages.map((s, i) => (
            <li
              key={s.title}
              className="relative flex flex-col p-6 bg-paper hover:bg-ink hover:text-paper-cream transition-colors group"
              style={{
                borderLeft: i !== 0 ? "1px solid #0A0A0A" : undefined,
              }}
            >
              <div className="ledger-sm mb-4 flex items-center justify-between">
                <span>{s.code}</span>
                <span aria-hidden="true" className="opacity-70">
                  {String(i + 1).padStart(2, "0")}/07
                </span>
              </div>
              <div
                aria-hidden="true"
                className="font-block text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.78] mb-3"
              >
                {s.letter}
              </div>
              <h3 className="font-display text-xl leading-tight mb-2">
                {s.title}
              </h3>
              <p className="font-body text-sm leading-relaxed mb-4 text-ink-wash group-hover:text-paper-cream">
                {s.serif}
              </p>
              <div className="mt-auto pt-3 border-t border-current font-mono text-[0.625rem] tracking-stamp uppercase opacity-80">
                {s.caption}
              </div>
              {i < stages.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="hidden xl:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 items-center justify-center bg-paper-cream border border-ink h-6 w-6 font-mono text-[0.75rem] group-hover:bg-paper-cream group-hover:text-ink"
                >
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
        <p className="font-display italic text-sm text-ink-wash mt-4">
          "The pipeline is a sequence of gates. Each one says, in writing, why
          the next one was permitted to open."
        </p>
      </div>
    </section>
  );
}
