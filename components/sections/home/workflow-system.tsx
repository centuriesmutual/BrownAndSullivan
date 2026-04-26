const clauses = [
  {
    title: "Operating Agreement.pdf",
    body: "Defines agent authority, consumer notice, escalation standards, file ownership, and evidence retention before work begins.",
  },
  {
    title: "Counsel Review Memo.docx",
    body: "Records counsel review of disclosure language, complaint response, retention posture, and carrier-facing production standards.",
  },
  {
    title: "Disclosure Register.xlsx",
    body: "Indexes CMS, TCPA, recording, and scope notices as required events before any product recommendation is made.",
  },
  {
    title: "Audit Production Folder",
    body: "Assembles the retained record continuously so regulators, carriers, and consumers can receive a coherent file without reconstruction.",
  },
];

const documentStats = [
  ["04", "governing files"],
  ["10y", "Medicare retention"],
  ["07y", "ACA retention"],
  ["01", "counsel standard"],
];

export function WorkflowSystem() {
  return (
    <section className="section-y border-y border-gray bg-white">
      <div className="container-grid">
        <div className="soft-container overflow-hidden bg-paper-cream/60">
          <div className="border-b border-gray bg-white px-5 py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-ink/20" />
                <span className="h-3 w-3 rounded-full bg-ink/12" />
                <span className="h-3 w-3 rounded-full bg-ink/8" />
              </div>
              <p className="ledger-sm">Brown & Sullivan · Document Room</p>
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="border-b border-gray bg-white p-8 md:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <p className="ledger-sm mb-5">Legal Operating Layer</p>
              <h2 className="display-section">
                The engagement is governed before it is performed.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-ink-wash">
                Brown &amp; Sullivan maintains its operating model as a document
                system: agreement, disclosure register, counsel review, and
                production folder. The layer reads like a private file room
                because the record must be usable when a regulator or carrier
                requests it.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {documentStats.map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-gray bg-paper-cream/70 p-4"
                  >
                    <p className="text-2xl font-semibold tracking-[-0.05em]">
                      {value}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-ink-wash">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 md:p-7 lg:p-9">
              <div className="grid gap-4 sm:grid-cols-2">
                {clauses.map((clause, index) => (
                  <article
                    key={clause.title}
                    className="group min-h-[220px] rounded-[1.35rem] border border-gray bg-white p-5 shadow-[0_14px_40px_rgba(10,10,10,0.045)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_55px_rgba(10,10,10,0.07)]"
                  >
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <div className="rounded-2xl border border-gray bg-paper-cream p-3">
                        <div className="h-10 w-8 rounded-md bg-white shadow-[inset_0_0_0_1px_rgba(10,10,10,0.08)]">
                          <div className="h-2 rounded-t-md bg-ink" />
                          <div className="mx-1 mt-2 h-px bg-gray" />
                          <div className="mx-1 mt-2 h-px bg-gray" />
                          <div className="mx-1 mt-2 h-px bg-gray" />
                        </div>
                      </div>
                      <span className="font-mono text-[11px] text-ink-wash">
                        DOC · 0{index + 1}
                      </span>
                    </div>
                    <h3 className="font-body text-base font-semibold tracking-[-0.01em] text-ink">
                      {clause.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-ink-wash">
                      {clause.body}
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
