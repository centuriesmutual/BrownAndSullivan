const modules = [
  {
    title: "CMS Marketing Rules",
    meta: "CMS",
    body: "The firm maintains documented review of Medicare communications, required TPMO language, recording standards, and plan-presentation boundaries.",
  },
  {
    title: "Audit File Retention",
    meta: "10y",
    body: "Medicare engagements are retained with disclosure evidence, scope documentation, verification segments, and application confirmation in a reviewable file.",
  },
  {
    title: "Sworn Firm Standard",
    meta: "LAW",
    body: "Brown & Sullivan certifies its published operating posture as a private law-firm standard governing agents, disclosures, and retained records.",
  },
  {
    title: "Carrier Production",
    meta: "FILE",
    body: "Carrier-facing packets are assembled from consent, disclosure, recording, scope, enrollment, and confirmation artifacts retained in the matter file.",
  },
];

export function AdvisoryModules() {
  return (
    <section className="section-y">
      <div className="container-grid">
        <div className="soft-container overflow-hidden">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-ink p-8 text-white md:p-10 lg:p-12">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.08em] text-white/58">
                CMS Audited Website
              </p>
              <h2 className="font-display text-[clamp(2.25rem,4vw,4.5rem)] leading-[0.95] tracking-[-0.04em] text-white">
                Certified operating posture, sworn by the firm.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
                This site is presented as a controlled compliance record by
                Brown &amp; Sullivan, a private law firm. Its Medicare and ACA
                distribution materials are organized for CMS-aligned audit
                review, carrier production, and consumer disclosure.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  ["CMS", "review posture"],
                  ["TPMO", "disclosure visible"],
                  ["LAW", "firm attested"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/12 bg-white/[0.06] p-4"
                  >
                    <p className="text-2xl font-semibold tracking-[-0.05em] text-white">
                      {value}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-white/58">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 md:p-7 lg:p-9">
              <div className="mb-6 rounded-2xl border border-gray bg-paper-cream/70 p-5">
                <p className="text-sm font-medium text-ink">
                  Firm certification statement
                </p>
                <p className="mt-2 text-sm leading-7 text-ink-wash">
                  Brown &amp; Sullivan publishes these controls as its sworn
                  website standard for regulated distribution. The record is
                  maintained for review by consumers, carriers, and lawful
                  oversight bodies.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {modules.map((item) => (
                  <article key={item.title} className="soft-card p-6">
                    <div className="mb-7 flex items-center justify-between">
                      <span className="rounded-full bg-paper-cream px-3 py-1 text-xs font-medium text-ink-wash">
                        {item.meta}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-ink/30" />
                    </div>
                    <h3 className="text-2xl leading-tight">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-ink-wash">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
