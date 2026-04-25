import { SectionHeader } from "@/components/ui/section-header";
import { states, licensedCount } from "@/lib/states";
import { cn } from "@/lib/utils";

export function Jurisdictions() {
  return (
    <section id="jurisdictions" className="bg-paper">
      <SectionHeader
        index={9}
        eyebrow="JURISDICTIONS"
        title="A typographic map of the several States."
        description={`Filed in ${licensedCount} jurisdictions. The map is set in letterforms, not borders — because the law follows the producer, not the topography.`}
        align="split"
      />
      <div className="container-grid pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          <div className="lg:col-span-8">
            <ul
              className="grid gap-1 border border-ink p-3 bg-paper-cream"
              style={{
                gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
              }}
            >
              {states.map((s) => {
                const isHQ = s.hq === true;
                return (
                  <li
                    key={s.code}
                    className={cn(
                      "relative aspect-square flex items-center justify-center border border-ink overflow-hidden",
                      s.licensed
                        ? "bg-ink text-paper-cream"
                        : "bg-paper text-ink-wash/60",
                      isHQ ? "outline-2 outline outline-ink" : ""
                    )}
                    title={`${s.name} — ${s.licensed ? "LICENSED" : "UNFILED"}`}
                  >
                    <span
                      className={cn(
                        "font-block text-[clamp(0.85rem,1.6vw,1.25rem)] leading-none",
                        s.licensed ? "" : "opacity-60"
                      )}
                    >
                      {s.code}
                    </span>
                    {isHQ ? (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-1 right-1 h-1.5 w-1.5 bg-paper-cream"
                      />
                    ) : null}
                  </li>
                );
              })}
            </ul>
            <ul className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 ledger-sm">
              <li className="flex items-center gap-2">
                <span className="h-3 w-3 bg-ink" aria-hidden="true" />
                LICENSED · {licensedCount}
              </li>
              <li className="flex items-center gap-2">
                <span
                  className="h-3 w-3 bg-paper border border-ink"
                  aria-hidden="true"
                />
                UNFILED
              </li>
              <li className="flex items-center gap-2">
                <span
                  className="h-3 w-3 bg-ink relative"
                  aria-hidden="true"
                >
                  <span className="absolute bottom-0 right-0 h-1 w-1 bg-paper-cream" />
                </span>
                TX · HEADQUARTERS
              </li>
              <li className="flex items-center gap-2">
                <span className="opacity-70">FILED · MMXXVI · IV</span>
              </li>
            </ul>
          </div>

          <aside className="lg:col-span-4 border border-ink p-6 bg-paper-cream">
            <div className="ledger-sm mb-4">EXHIBIT · J · JURISDICTIONS</div>
            <h3 className="font-display text-3xl leading-tight mb-4">
              Where Brown &amp; Sullivan accepts engagements.
            </h3>
            <p className="font-body text-sm leading-relaxed mb-4">
              The firm is licensed in {licensedCount} States and is headquartered
              in the State of Texas. Engagements outside this footprint are
              accepted only on referral, with co-counsel of record.
            </p>
            <ul className="ledger-sm space-y-2">
              <li>HQ · 0001 · TEXAS</li>
              <li>FILED · {licensedCount} · STATES</li>
              <li>NAIC · PRODUCER · LICENSED</li>
              <li>CO-COUNSEL · BY · REFERRAL</li>
            </ul>
            <div className="mt-6 pt-4 border-t border-ink">
              <p className="font-display italic text-sm text-ink-wash">
                "The law is the same in every State; the producer is not."
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
