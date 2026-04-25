const steps = [
  "Intake",
  "Consent",
  "Notice",
  "Scope",
  "Review",
  "Election",
  "Archive",
];

export function WorkflowSystem() {
  return (
    <section className="section-y border-y border-gray bg-white">
      <div className="container-grid">
        <div className="soft-container p-6 md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="ledger-sm mb-4">Workflow</p>
              <h2 className="display-section">A controlled engagement path.</h2>
              <p className="mt-4 text-base leading-7 text-ink-wash">
                Each consumer matter advances through documented checkpoints. A
                step does not move forward until authorization, disclosure, and
                retention requirements are satisfied.
              </p>
            </div>

            <ol className="grid gap-4 sm:grid-cols-7">
              {steps.map((step, index) => (
                <li key={step} className="relative flex flex-col items-center gap-3">
                  {index < steps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-5 hidden h-px w-full bg-gray sm:block"
                    />
                  ) : null}
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray bg-white text-sm font-medium shadow-[0_8px_22px_rgba(10,10,10,0.06)]">
                    {index + 1}
                  </span>
                  <span className="text-center text-xs font-medium text-ink-wash">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
