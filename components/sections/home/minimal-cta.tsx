"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const FIRM_PLAQUE_PHOTO =
  "https://images.unsplash.com/photo-1507842217123-9e2f37608a8e?auto=format&fit=crop&w=1200&q=85";

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
              <div className="relative border-4 border-double border-ink/85 bg-gradient-to-b from-white via-paper to-paper-cream p-1 shadow-[0_1px_0_0_#d8d4cc,0_24px_60px_rgba(10,10,10,0.08),inset_0_0_0_1px_rgba(10,10,10,0.05)]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-2 top-2 h-1.5 w-1.5 rounded-full border border-ink/50 bg-ink/10"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-2 top-2 h-1.5 w-1.5 rounded-full border border-ink/50 bg-ink/10"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full border border-ink/50 bg-ink/10"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full border border-ink/50 bg-ink/10"
                />

                <div className="border border-ink/15 bg-white/50 px-5 pb-6 pt-5 md:px-7 md:pb-8 md:pt-6">
                  <p className="text-center font-mono text-[10px] uppercase tracking-[0.28em] text-ink/45">
                    About us
                  </p>
                  <div className="mx-auto mt-3 h-px max-w-[9rem] bg-ink/20" />
                  <p className="mt-3 text-center font-display text-2xl tracking-tight text-ink sm:text-3xl">
                    Brown &amp; Sullivan
                  </p>

                  <div className="relative mt-6 overflow-hidden border-2 border-ink/12 bg-ink/5">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={FIRM_PLAQUE_PHOTO}
                        alt="Professional library reading room with book-lined walls and study tables"
                        fill
                        sizes="(min-width: 1024px) 400px, 100vw"
                        className="object-cover grayscale contrast-[0.95]"
                      />
                    </div>
                    <p className="border-t border-ink/10 bg-paper-cream/90 px-3 py-2 text-center font-mono text-[9px] uppercase tracking-[0.12em] text-ink/40">
                      A setting for research and review
                    </p>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
                    A restrained compliance practice built for regulated
                    distribution.
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink-wash">
                    Brown &amp; Sullivan combines licensed insurance operations,
                    legal disclosure discipline, and audit-file retention into a
                    single professional practice. The firm is intentionally
                    small, controlled, and built for matters that require a
                    reviewable record.
                  </p>
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
