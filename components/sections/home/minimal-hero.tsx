import { LinkButton } from "@/components/ui/button";

const statusItems = [
  ["Status", "Authorized"],
  ["Recording", "Active"],
  ["Compliance", "Verified"],
  ["Agent", "Licensed"],
];

export function MinimalHero() {
  return (
    <section className="section-y">
      <div className="container-grid">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="soft-pill mb-8 inline-flex px-3 py-1.5 text-xs font-medium text-ink-wash">
              Medicare · ACA · TCPA · CMS
            </div>
            <h1 className="display-letterhead max-w-4xl">
              Compliance infrastructure for Medicare &amp; ACA distribution
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-wash">
              Brown &amp; Sullivan maintains a controlled operating environment
              for licensed agents, recorded engagements, required disclosures,
              and retained audit evidence.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <LinkButton href="/directory" size="lg">
                Enter Directory
              </LinkButton>
              <LinkButton href="#disclosures" variant="ghost" size="lg">
                View Disclosures
              </LinkButton>
            </div>
          </div>

          <aside className="soft-container p-4 lg:p-5" aria-label="System status preview">
            <div className="rounded-2xl border border-gray bg-paper-cream/70 p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-ink">Engagement Control</p>
                  <p className="mt-1 text-xs text-ink-wash">Matter · 2026-04-25 · TX</p>
                </div>
                <span className="rounded-full bg-ink px-3 py-1 text-xs font-medium text-white">
                  Live
                </span>
              </div>

              <div className="grid gap-3">
                {statusItems.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-xl border border-gray bg-white px-4 py-3"
                  >
                    <span className="text-sm text-ink-wash">{label}</span>
                    <span className="text-sm font-medium text-ink">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-gray bg-white p-4">
                <div className="mb-3 flex items-center justify-between text-xs text-ink-wash">
                  <span>Audit retention</span>
                  <span>10 years</span>
                </div>
                <div className="h-2 rounded-full bg-gray">
                  <div className="h-2 w-4/5 rounded-full bg-ink" />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
