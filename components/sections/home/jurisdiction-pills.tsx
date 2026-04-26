import Link from "next/link";
import { states } from "@/lib/states";
import { cn } from "@/lib/utils";

const activeCodes = new Set(["TX", "AZ", "NC"]);

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
              <article className="rounded-2xl border border-gray bg-white p-5 shadow-[0_12px_34px_rgba(10,10,10,0.04)]">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink text-sm font-semibold text-white">
                    TX
                  </span>
                  <div>
                    <h3 className="text-xl">Texas</h3>
                    <p className="mt-1 text-sm font-medium text-ink">
                      Principal office
                    </p>
                    <p className="mt-2 text-sm leading-6 text-ink-wash">
                      Resident producer office, compliance desk, and operating
                      headquarters.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-2xl border border-gray bg-white p-4 shadow-[0_12px_34px_rgba(10,10,10,0.04)]">
                <p className="text-xs leading-relaxed text-ink-wash">
                  For carriers, platforms, and distribution partners: one path to
                  the engagement desk. Opens the contact page for triage, conflict
                  review, and a written follow-up.
                </p>
                <Link
                  href="/contact"
                  className="mt-3 flex w-full min-h-12 items-center justify-center rounded-xl border-2 border-ink bg-ink px-4 text-center text-base font-semibold tracking-[-0.02em] text-white shadow-[0_12px_28px_rgba(10,10,10,0.14)] transition hover:-translate-y-0.5 hover:bg-ink/95 hover:shadow-[0_16px_36px_rgba(10,10,10,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
                >
                  <span>Market</span>
                  <span className="mx-0.5 text-white/50">·</span>
                  <span>Exchange</span>
                </Link>
              </article>
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
