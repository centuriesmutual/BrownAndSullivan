const cards = [
  {
    title: "Recorded Engagements",
    body: "Voice interactions are recorded, indexed to the matter file, and retained under defined schedules.",
  },
  {
    title: "Evidence File",
    body: "Consent records, disclosures, scope documentation, applications, and confirmations stay attached to the file.",
  },
  {
    title: "Integrity Checks",
    body: "Audit events are chained, timestamped, and reviewable by compliance operators when a record is produced.",
  },
];

export function AuditSystem() {
  return (
    <section className="section-y">
      <div className="container-grid">
        <div className="mx-auto max-w-2xl text-center">
          <p className="ledger-sm mb-4">Audit System</p>
          <h2 className="display-section">The record is built while work occurs.</h2>
          <p className="mt-4 text-base leading-7 text-ink-wash">
            The interface treats evidence as an operating requirement, not an
            after-the-fact report.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((card, index) => (
            <article key={card.title} className="soft-card p-8">
              <span className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl bg-paper-cream text-sm font-medium">
                0{index + 1}
              </span>
              <h3 className="text-2xl">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink-wash">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
