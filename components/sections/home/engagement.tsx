import { SectionOpener } from "@/components/ui/section-opener";
import { toRoman } from "@/lib/utils";

interface Stage {
  title: string;
  body: string;
}

const stages: Stage[] = [
  {
    title: "Intake",
    body: "A consumer contacts the firm or is contacted by the firm under a documented prior-express-written-consent record.",
  },
  {
    title: "Authorization",
    body: "The Compliance Engine evaluates DNC status, consent currency, jurisdictional time restrictions, frequency caps, and agent licensure, and issues an authorization token.",
  },
  {
    title: "Identification & Notice",
    body: "The agent identifies the firm, identifies the agent's licensed status, and delivers the recording notice and the TPMO disclosure where applicable.",
  },
  {
    title: "Scope of Appointment",
    body: "For Medicare matters, the Scope of Appointment is documented and retained before any plan-specific discussion.",
  },
  {
    title: "Qualification",
    body: "The consumer's eligibility, household composition, current coverage, and stated priorities are documented.",
  },
  {
    title: "Presentation & Election",
    body: "The agent presents available plans, verifies provider and formulary fit, and captures the consumer's election.",
  },
  {
    title: "Verification & Submission",
    body: "A voice verification of identity, plan selection, premium, effective date, and enrollment authorization is captured on the recorded line. The application is submitted. The complete record is retained.",
  },
];

const ledger = `2026-04-25T14:02:11Z  STATE  INITIATED        token issued · auth · GRANTED
2026-04-25T14:02:13Z  STATE  RINGING          ringcentral · session · open
2026-04-25T14:02:27Z  STATE  CONNECTED        consumer · answered
2026-04-25T14:02:42Z  STATE  IDENTIFIED       agent · disclosed · recording · noticed
2026-04-25T14:03:08Z  STATE  TPMO_DELIVERED   verbal · acknowledgment · captured
2026-04-25T14:03:55Z  STATE  SOA_CAPTURED     verbal · scope · medicare_advantage · pdp
2026-04-25T14:11:22Z  STATE  PRESENTATION     plans · 03 · presented
2026-04-25T14:18:46Z  STATE  VERIFIED         voice · verification · 09_of_09 · affirmed
2026-04-25T14:19:14Z  STATE  SUBMITTED        carrier · accepted · confirmation · on_file
2026-04-25T14:19:14Z  STATE  RECORD_RETAINED  box · ten_year · retention · sealed`;

export function Engagement() {
  return (
    <section
      id="engagement"
      aria-labelledby="engagement-heading"
      className="border-b border-ink bg-paper-cream"
    >
      <div className="section-y">
        <SectionOpener
          index={4}
          filingLabel="THE ENGAGEMENT"
          title="The Engagement"
          description="A matter proceeds through seven documented stages, each a separate procedural step and each issuing its own evidence. The system does not advance until the prior step is on the record."
        />
        <div className="container-grid mt-12">
          <div
            className="grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] gap-0 border-2 border-ink bg-paper"
          >
            <ol className="p-6 lg:p-10 flex flex-col">
              {stages.map((s, i) => (
                <li
                  key={s.title}
                  className="grid grid-cols-[5.5rem_1fr] gap-6 py-5 border-t first:border-t-0 border-ink/30"
                >
                  <div className="flex flex-col items-start">
                    <span
                      aria-hidden="true"
                      className="font-display text-3xl leading-none roman"
                    >
                      {toRoman(i + 1)}.
                    </span>
                    <span className="ledger-sm mt-2 opacity-70">
                      STAGE · {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl smcp tracking-wide leading-tight">
                      {s.title}
                    </h3>
                    <p className="body-prose body-prose-wash mt-2">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <aside className="bg-ink text-paper-cream p-6 lg:p-10 border-t lg:border-t-0 lg:border-l-2 border-ink/40 lg:border-paper-cream/30 flex flex-col">
              <header className="flex items-center justify-between border-b border-paper-cream/30 pb-4 mb-5">
                <h3 className="ledger uppercase">CALL · LEDGER · ENTRY</h3>
                <span className="ledger-sm opacity-80">ENTRY · 0014.b</span>
              </header>
              <pre className="font-mono text-[0.7rem] leading-6 whitespace-pre overflow-x-auto">
                {ledger}
              </pre>
              <footer className="mt-auto pt-5 border-t border-paper-cream/30 flex flex-wrap items-center gap-x-4 gap-y-2 ledger-sm opacity-80">
                <span>BS · OS · v.MMXXVI.IV</span>
                <span aria-hidden="true">·</span>
                <span>HASH · sha256 · 9c2e…aa1b</span>
                <span aria-hidden="true">·</span>
                <span>SEALED · ✓</span>
              </footer>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
