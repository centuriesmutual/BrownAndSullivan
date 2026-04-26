"use client";

import { FormEvent, useState } from "react";

const inquiryTypes = [
  "Consumer Medicare / ACA matter",
  "Licensed agent appointment",
  "Carrier or distribution partner",
  "Audit, records, or compliance request",
];

export function MinimalCta() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const type = String(form.get("type") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Brown & Sullivan inquiry — ${type}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMatter type: ${type}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:intake@brownandsullivan.example?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="section-y bg-white">
      <div className="container-grid">
        <div className="soft-container overflow-hidden">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 md:p-10 lg:p-12">
              <p className="ledger-sm mb-5">Engagement Desk</p>
              <h2 className="display-section max-w-2xl">
                Send a matter to the firm for review.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-ink-wash">
                Consumers, licensed agents, carrier partners, and compliance
                teams may open an intake note directly from this section. The
                note is formatted as a matter memo and routed through the
                user&apos;s mail client for delivery to Brown &amp; Sullivan.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  ["Response window", "One business day"],
                  ["Matter intake", "Conflicts reviewed"],
                  ["Documents", "Accepted after review"],
                  ["Hours", "M–F · 0900–1700 CT"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-gray bg-paper-cream/60 p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-wash">
                      {label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-ink">{value}</p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setOpen(true);
                }}
                className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-ink px-6 text-sm font-medium text-white shadow-[0_12px_30px_rgba(10,10,10,0.16)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(10,10,10,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
              >
                Open Intake Modal
              </button>
            </div>

            <aside className="border-t border-gray bg-paper-cream/70 p-8 md:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="relative overflow-hidden rounded-[1.35rem] border border-gray bg-white p-6 shadow-[0_20px_60px_rgba(10,10,10,0.06)]">
                <div
                  aria-hidden="true"
                  className="absolute right-5 top-5 h-24 w-24 rounded-[1.5rem] border border-gray bg-paper-cream/70"
                />
                <div
                  aria-hidden="true"
                  className="relative mb-7 flex h-48 items-end justify-center overflow-hidden rounded-[1.25rem] bg-paper-cream"
                >
                  <div className="absolute left-7 top-7 h-20 w-24 rounded-2xl border border-gray bg-white shadow-[0_12px_30px_rgba(10,10,10,0.05)]" />
                  <div className="absolute right-7 top-10 h-24 w-28 rounded-2xl border border-gray bg-white shadow-[0_12px_30px_rgba(10,10,10,0.05)]" />
                  <div className="relative z-10 h-32 w-32 rounded-t-full bg-ink" />
                  <div className="relative z-10 -ml-10 h-20 w-48 rounded-t-[4rem] bg-white" />
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-ink" />
                </div>

                <div className="relative">
                  <p className="ledger-sm mb-4">About the Firm</p>
                  <h3 className="text-3xl leading-tight">
                    A restrained compliance practice built for regulated
                    distribution.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-ink-wash">
                    Brown &amp; Sullivan combines licensed insurance operations,
                    legal disclosure discipline, and audit-file retention into a
                    single professional practice. The firm is intentionally
                    small, controlled, and built for matters that require a
                    reviewable record.
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {[
                      ["03", "active markets"],
                      ["10y", "Medicare record"],
                      ["01", "controlled desk"],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-gray bg-paper px-3 py-4 text-center"
                      >
                        <p className="text-xl font-semibold tracking-[-0.05em]">
                          {value}
                        </p>
                        <p className="mt-1 text-[11px] leading-4 text-ink-wash">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/35 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="intake-modal-title"
        >
          <div className="w-full max-w-2xl rounded-[1.5rem] border border-gray bg-white p-6 shadow-[0_32px_90px_rgba(10,10,10,0.28)] md:p-8">
            <div className="mb-6 flex items-start justify-between gap-6">
              <div>
                <p className="ledger-sm mb-3">Secure Intake Note</p>
                <h3 id="intake-modal-title" className="text-3xl">
                  Message Brown &amp; Sullivan
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-wash">
                  Submit opens your mail client with a structured message. No
                  private health information should be included in this first note.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-gray px-3 py-1 text-sm text-ink-wash transition hover:bg-paper-cream"
              >
                Close
              </button>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium">
                  Name
                  <input
                    name="name"
                    required
                    className="h-11 rounded-lg border border-gray px-3 text-sm outline-none focus:border-ink/40"
                    placeholder="Full name"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className="h-11 rounded-lg border border-gray px-3 text-sm outline-none focus:border-ink/40"
                    placeholder="name@example.com"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-medium">
                Inquiry type
                <select
                  name="type"
                  required
                  className="h-11 rounded-lg border border-gray bg-white px-3 text-sm outline-none focus:border-ink/40"
                >
                  {inquiryTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="rounded-lg border border-gray px-3 py-3 text-sm leading-6 outline-none focus:border-ink/40"
                  placeholder="Briefly describe the matter, appointment request, or compliance need."
                />
              </label>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-5 text-ink-wash">
                  {sent
                    ? "Mail client opened. Send the message from there to complete delivery."
                    : "This form prepares an email message for review by the firm."}
                </p>
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-ink px-5 text-sm font-medium text-white transition hover:-translate-y-0.5"
                >
                  Prepare Message
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </section>
  );
}
