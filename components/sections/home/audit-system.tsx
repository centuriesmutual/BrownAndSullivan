const leadArticle = {
  kicker: "In-House Data",
  title: "Matter files now show disclosure delivery before product review.",
  body: "The April review sample found that consumer notice, TPMO disclosure, and recording acknowledgment were attached before plan-specific discussion in every file selected for internal audit.",
  metric: "100%",
  label: "pre-presentation notice capture",
};

const articles = [
  {
    kicker: "Operations",
    title: "Recorded engagement indexing reduced review time.",
    body: "Call segments are now tagged against consent, scope, election, and verification events for faster carrier response.",
    stat: "4.8m",
    label: "median retrieval",
  },
  {
    kicker: "Evidence",
    title: "Carrier confirmations are paired with submitted applications.",
    body: "The evidence file keeps the submitted application, carrier confirmation, and verification segment in the same review packet.",
    stat: "7",
    label: "artifacts per matter",
  },
  {
    kicker: "Ledger",
    title: "Integrity checks are run at the moment of production.",
    body: "Audit events are timestamped and chained so the produced record can be compared to the retained ledger state.",
    stat: "SHA",
    label: "chain verified",
  },
  {
    kicker: "Training",
    title: "Agent certification blocks remain active.",
    body: "Lapsed annual carrier, AHIP, or CMS marketing certification prevents the agent from receiving new queue assignments.",
    stat: "0",
    label: "lapsed active agents",
  },
];

export function AuditSystem() {
  return (
    <section className="section-y bg-white">
      <div className="container-grid">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="ledger-sm mb-4">Audit Newsroom</p>
            <h2 className="display-section">Evidence, reported like an internal desk.</h2>
          </div>
          <p className="text-base leading-7 text-ink-wash">
            The audit system is presented as a curated operations page: short
            dispatches, in-house measurements, and review notes from the record
            layer that supports every regulated engagement.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-4 lg:grid-rows-[minmax(260px,auto)_minmax(260px,auto)]">
          <article className="soft-card flex min-h-[360px] flex-col justify-between bg-paper-cream/70 p-8 lg:col-span-2 lg:row-span-2">
            <div>
              <div className="mb-8 flex items-center justify-between">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink-wash">
                  {leadArticle.kicker}
                </span>
                <span className="ledger-sm">April Review</span>
              </div>
              <h3 className="text-[clamp(2rem,3vw,3.5rem)] leading-[0.95]">
                {leadArticle.title}
              </h3>
              <p className="mt-6 max-w-xl text-base leading-8 text-ink-wash">
                {leadArticle.body}
              </p>
            </div>
            <div className="mt-10 grid grid-cols-[0.7fr_1fr] gap-4 border-t border-gray pt-6">
              <div className="text-5xl font-semibold tracking-[-0.06em]">
                {leadArticle.metric}
              </div>
              <p className="self-end text-sm leading-6 text-ink-wash">
                {leadArticle.label}
              </p>
            </div>
          </article>

          {articles.map((card, index) => (
            <article
              key={card.title}
              className="soft-card flex min-h-[260px] flex-col justify-between p-6"
            >
              <div>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-paper-cream px-3 py-1 text-xs font-medium text-ink-wash">
                    {card.kicker}
                  </span>
                  <span className="font-mono text-[11px] text-ink-wash">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-2xl leading-tight">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink-wash">{card.body}</p>
              </div>
              <div className="mt-6 flex items-end justify-between border-t border-gray pt-5">
                <span className="text-3xl font-semibold tracking-[-0.05em]">
                  {card.stat}
                </span>
                <span className="max-w-[8rem] text-right text-xs leading-5 text-ink-wash">
                  {card.label}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
