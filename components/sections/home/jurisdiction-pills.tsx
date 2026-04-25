import { states } from "@/lib/states";
import { cn } from "@/lib/utils";

export function JurisdictionPills() {
  return (
    <section className="section-y border-y border-gray bg-paper-cream/50">
      <div className="container-grid">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="ledger-sm mb-4">Jurisdictions</p>
            <h2 className="display-section">Licensure without visual noise.</h2>
            <p className="mt-4 text-base leading-7 text-ink-wash">
              Active state licensure is presented as a calm availability layer.
              Texas remains the principal office.
            </p>
          </div>

          <ul className="flex flex-wrap gap-2.5">
            {states.map((state) => (
              <li key={state.code}>
                <span
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition",
                    state.licensed
                      ? "border-ink/12 bg-white text-ink shadow-[0_8px_24px_rgba(10,10,10,0.04)] hover:-translate-y-0.5"
                      : "border-gray bg-transparent text-ink-wash/45"
                  )}
                  title={state.name}
                >
                  {state.hq ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
                  ) : null}
                  {state.code}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
