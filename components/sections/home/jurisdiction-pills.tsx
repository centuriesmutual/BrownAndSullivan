import { states } from "@/lib/states";
import { cn } from "@/lib/utils";

const activeCodes = new Set(["TX", "AZ", "NC"]);
const activeDetails = [
  {
    code: "TX",
    name: "Texas",
    role: "Principal office",
    note: "Resident producer office and operating headquarters.",
  },
  {
    code: "AZ",
    name: "Arizona",
    role: "Active market",
    note: "Medicare and ACA appointment review is active.",
  },
  {
    code: "NC",
    name: "North Carolina",
    role: "Active market",
    note: "Consumer representation and agent assignment are active.",
  },
];

export function JurisdictionPills() {
  return (
    <section className="section-y border-y border-gray bg-paper-cream/50">
      <div className="container-grid">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="ledger-sm mb-4">Jurisdictions</p>
            <h2 className="display-section">Active admissions are deliberately limited.</h2>
            <p className="mt-4 text-base leading-7 text-ink-wash">
              Brown &amp; Sullivan is presently active in Texas, Arizona, and
              North Carolina. Other jurisdictions remain visible as a monitoring
              layer, not as current availability.
            </p>

            <div className="mt-8 grid gap-3">
              {activeDetails.map((state) => (
                <article key={state.code} className="rounded-2xl border border-gray bg-white p-5 shadow-[0_12px_34px_rgba(10,10,10,0.04)]">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink text-sm font-semibold text-white">
                      {state.code}
                    </span>
                    <div>
                      <h3 className="text-xl">{state.name}</h3>
                      <p className="mt-1 text-sm font-medium text-ink">{state.role}</p>
                      <p className="mt-2 text-sm leading-6 text-ink-wash">{state.note}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="soft-container p-5 md:p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-ink">Jurisdiction monitor</p>
                <p className="mt-1 text-xs text-ink-wash">Active states only: TX · AZ · NC</p>
              </div>
              <div className="flex items-center gap-3 text-xs text-ink-wash">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-ink" />
                  Active
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full border border-gray bg-white" />
                  Monitored
                </span>
              </div>
            </div>

            <ul className="grid grid-cols-5 gap-2 sm:grid-cols-7 md:grid-cols-10">
              {states.map((state) => {
                const active = activeCodes.has(state.code);
                return (
                  <li key={state.code}>
                    <span
                      className={cn(
                        "flex aspect-square items-center justify-center rounded-2xl border text-sm font-medium transition",
                        active
                          ? "border-ink bg-ink text-white shadow-[0_14px_30px_rgba(10,10,10,0.14)] hover:-translate-y-0.5"
                          : "border-gray bg-white text-ink-wash/42"
                      )}
                      title={`${state.name}${active ? " — active" : " — monitored"}`}
                    >
                      {state.code}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 grid gap-3 rounded-2xl border border-gray bg-white p-4 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold tracking-[-0.05em]">3</p>
                <p className="text-xs text-ink-wash">active states</p>
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-[-0.05em]">48</p>
                <p className="text-xs text-ink-wash">monitored jurisdictions</p>
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-[-0.05em]">TX</p>
                <p className="text-xs text-ink-wash">principal office</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
