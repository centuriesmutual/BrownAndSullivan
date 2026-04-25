import { SectionOpener } from "@/components/ui/section-opener";
import { states, licensedCount } from "@/lib/states";
import { cn, toRoman } from "@/lib/utils";

const carrierLines = [
  "MEDICARE · ADVANTAGE · CARRIERS · APPOINTED",
  "MEDICARE · PDP · SPONSORS · APPOINTED",
  "MEDICARE · SUPPLEMENT · CARRIERS · APPOINTED",
  "ACA · MARKETPLACE · ISSUERS · APPOINTED · VIA · ENHANCED · DIRECT · ENROLLMENT",
];

export function LicensureAppointments() {
  return (
    <section
      id="licensure"
      aria-labelledby="licensure-heading"
      className="border-b border-ink bg-paper-cream"
    >
      <div className="section-y">
        <SectionOpener
          index={6}
          filingLabel="LICENSURE · & · APPOINTMENTS"
          title="Licensure & Appointments"
          description="The firm's footprint is described by two enumerations: the States in which it is licensed to advise consumers, and the carriers with whom it holds appointment to bind enrollment."
        />

        <div className="container-grid mt-12 grid grid-cols-12 gap-x-8 gap-y-10">
          {/* Element A: State Grid */}
          <div className="col-span-12 lg:col-span-8">
            <header className="flex items-baseline justify-between mb-4 gap-4 flex-wrap">
              <h3 className="font-display text-2xl smcp tracking-wide">
                States of Licensure
              </h3>
              <span className="ledger-sm">
                VI.A · {toRoman(licensedCount)} · ADMISSIONS
              </span>
            </header>
            <ul
              className="grid gap-1.5 border-2 border-ink p-3 bg-paper"
              style={{ gridTemplateColumns: "repeat(7, minmax(0, 1fr))" }}
            >
              {states.map((s) => (
                <li
                  key={s.code}
                  title={`${s.name} — ${s.licensed ? "ADMITTED" : "NOT ADMITTED"}`}
                  className={cn(
                    "relative aspect-square flex items-center justify-center border border-ink",
                    s.licensed
                      ? "bg-ink text-paper-cream"
                      : "bg-paper text-ink-wash/60"
                  )}
                >
                  <span
                    className={cn(
                      "font-block text-[clamp(0.85rem,1.6vw,1.25rem)] leading-none",
                      s.licensed ? "" : "opacity-60"
                    )}
                  >
                    {s.code}
                  </span>
                  {s.hq ? (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-1 right-1 h-1.5 w-1.5 bg-paper-cream"
                    />
                  ) : null}
                </li>
              ))}
            </ul>
            <p className="ledger-sm mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>PRINCIPAL OFFICE · TEXAS</span>
              <span aria-hidden="true">·</span>
              <span>ADDITIONAL ADMISSIONS · XXXVI</span>
              <span aria-hidden="true">·</span>
              <span>NPN ON FILE WITH NIPR</span>
            </p>
            <ul className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 ledger-sm">
              <li className="flex items-center gap-2">
                <span className="h-3 w-3 bg-ink" aria-hidden="true" />
                ADMITTED · {licensedCount}
              </li>
              <li className="flex items-center gap-2">
                <span
                  className="h-3 w-3 bg-paper border border-ink"
                  aria-hidden="true"
                />
                NOT ADMITTED
              </li>
              <li className="flex items-center gap-2">
                <span
                  className="h-3 w-3 bg-ink relative"
                  aria-hidden="true"
                >
                  <span className="absolute bottom-0 right-0 h-1 w-1 bg-paper-cream" />
                </span>
                TEXAS · PRINCIPAL OFFICE
              </li>
            </ul>
          </div>

          {/* Standing aside */}
          <aside className="col-span-12 lg:col-span-4 firm-card border-2 p-7 bg-paper">
            <header className="flex items-baseline justify-between mb-4">
              <h3 className="font-display text-2xl smcp tracking-wide">
                Of the Office
              </h3>
              <span aria-hidden="true" className="h-2 w-2 bg-ink" />
            </header>
            <p className="body-prose body-prose-wash">
              Brown &amp; Sullivan maintains its principal office in the State
              of Texas. The firm files annual producer renewals with the
              National Insurance Producer Registry and is appointed with the
              carriers enumerated below.
            </p>
            <p className="body-prose body-prose-wash mt-4">
              Engagements outside the firm's footprint are accepted only on
              referral, with co-counsel of record admitted in the
              jurisdiction.
            </p>
            <footer className="mt-6 pt-4 border-t border-ink ledger-sm">
              ON FILE · NPN · AHIP · STATE DOI · CARRIER APPOINTMENTS
            </footer>
          </aside>
        </div>

        {/* Element B: Carrier Appointments strip */}
        <div className="container-grid mt-12">
          <header className="flex items-baseline justify-between mb-4 gap-4 flex-wrap">
            <h3 className="font-display text-2xl smcp tracking-wide">
              Carrier Appointments
            </h3>
            <span className="ledger-sm">VI.B · APPOINTMENT · SCHEDULE</span>
          </header>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-ink bg-paper">
            {carrierLines.map((line, i) => (
              <li
                key={line}
                className="p-5 lg:p-6 ledger flex items-start gap-3"
                style={{
                  borderLeft:
                    i !== 0 ? "1.5px solid #0A0A0A" : undefined,
                  borderTop:
                    i >= 2 && i % 2 === 0 ? "1.5px solid #0A0A0A" : undefined,
                }}
              >
                <span
                  aria-hidden="true"
                  className="mt-1 h-1.5 w-1.5 bg-ink shrink-0"
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
