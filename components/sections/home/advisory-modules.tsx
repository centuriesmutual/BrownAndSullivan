const modules = [
  {
    title: "Medicare Advantage",
    meta: "MA",
    body: "Plan selection and enrollment support across HMO, PPO, SNP, and MSA contract types.",
  },
  {
    title: "Medicare Part D",
    meta: "PDP",
    body: "Prescription drug plan review with formulary and pharmacy network confirmation.",
  },
  {
    title: "Medicare Supplement",
    meta: "Medigap",
    body: "Supplemental coverage review with underwriting and guaranteed-issue considerations.",
  },
  {
    title: "ACA Marketplace",
    meta: "ACA",
    body: "Qualified Health Plan guidance with household review and subsidy estimation.",
  },
];

export function AdvisoryModules() {
  return (
    <section className="section-y">
      <div className="container-grid">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="ledger-sm mb-4">Advisory Modules</p>
            <h2 className="display-section">Coverage areas, organized.</h2>
          </div>
          <p className="text-base leading-7 text-ink-wash">
            The directory is arranged by regulated coverage category. Each module
            connects consumers, licensed agents, carrier appointments, and audit
            requirements in one controlled file.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {modules.map((item) => (
            <article key={item.title} className="soft-card p-8">
              <div className="mb-8 flex items-center justify-between">
                <span className="rounded-full bg-paper-cream px-3 py-1 text-xs font-medium text-ink-wash">
                  {item.meta}
                </span>
                <span className="h-2 w-2 rounded-full bg-ink/30" />
              </div>
              <h3 className="text-3xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink-wash">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
