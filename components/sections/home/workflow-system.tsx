const clauses = [
  {
    title: "Operating Agreement",
    body: "Every matter begins under a written operating protocol that defines agent authority, consumer notice, escalation rules, and file ownership.",
  },
  {
    title: "Counsel Backing",
    body: "Legal counsel reviews disclosure language, complaint response, retention posture, and carrier-facing production standards.",
  },
  {
    title: "Disclosure Control",
    body: "CMS, TCPA, recording, and scope notices are treated as required system events before any product recommendation is made.",
  },
  {
    title: "Audit Readiness",
    body: "The record is assembled continuously so a regulator, carrier, or consumer can receive a coherent file without reconstruction.",
  },
];

const timeline = [
  ["01", "Authority", "Agent license, appointment, and training status are checked before assignment."],
  ["02", "Consent", "The contact record is reviewed against consent, DNC, time-zone, and frequency rules."],
  ["03", "Notice", "Recording notice, firm identity, and required disclosures are delivered and logged."],
  ["04", "Scope", "Medicare scope documentation is captured before plan-specific discussion."],
  ["05", "Review", "Eligibility, household facts, providers, prescriptions, and stated needs are documented."],
  ["06", "Election", "Selection and authorization are verified on the recorded line."],
  ["07", "Record", "The completed matter is sealed into retention with audit metadata attached."],
];

export function WorkflowSystem() {
  return (
    <section className="section-y border-y border-gray bg-white">
      <div className="container-grid">
        <div className="soft-container overflow-hidden">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-ink p-8 text-white md:p-10 lg:p-12">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.08em] text-white/58">
                Legal Operating Layer
              </p>
              <h2 className="font-display text-[clamp(2.25rem,4vw,4.5rem)] leading-[0.95] tracking-[-0.04em] text-white">
                The engagement is governed before it is performed.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
                Brown &amp; Sullivan operates from an agreement-backed control
                model: counsel sets the disclosure standard, operations follow
                the documented path, and the audit file is created as work is
                performed.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {clauses.map((clause) => (
                  <article
                    key={clause.title}
                    className="rounded-2xl border border-white/12 bg-white/[0.06] p-5"
                  >
                    <h3 className="font-body text-sm font-semibold tracking-[-0.01em] text-white">
                      {clause.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/62">
                      {clause.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8 lg:p-10">
            <div>
                <p className="ledger-sm mb-4">Workflow</p>
                <h3 className="text-3xl">Legal disclosure, audit, and review path.</h3>
                <p className="mt-3 text-sm leading-7 text-ink-wash">
                  The path below is the operating agreement in motion. Each node
                  corresponds to a system control, a legal disclosure, or an
                  evidence checkpoint.
                </p>
              </div>

              <ol className="mt-8 space-y-3">
                {timeline.map(([number, title, body]) => (
                  <li
                    key={number}
                    className="grid grid-cols-[3.25rem_1fr] gap-4 rounded-2xl border border-gray bg-white p-4 shadow-[0_10px_28px_rgba(10,10,10,0.035)]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-paper-cream font-mono text-xs font-medium text-ink">
                      {number}
                    </span>
                    <div>
                      <h4 className="font-body text-sm font-semibold tracking-[-0.01em]">
                        {title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-ink-wash">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
