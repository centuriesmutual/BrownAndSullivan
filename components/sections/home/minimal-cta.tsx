"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const inquiryTypes = [
  "Consumer Medicare / ACA matter",
  "Licensed agent appointment",
  "Carrier or distribution partner",
  "Audit, records, or compliance request",
];

const deskItems = [
  {
    label: "Target response",
    value: "Within one business day",
    note: "Initial acknowledgment, not a merits conclusion.",
  },
  {
    label: "Matter review",
    value: "Conflicts & routing",
    note: "Screened under firm policy before any engagement letter.",
  },
  {
    label: "Submissions",
    value: "After intake acceptance",
    note: "Documents and attachments follow a controlled channel.",
  },
  {
    label: "Response hours",
    value: "Mon–Fri · 9:00–17:00 CT",
    note: "Time zone for the engagement desk; holidays posted separately.",
  },
] as const;

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
              <p className="ledger-sm mb-4 text-ink/80">Engagement desk</p>
              <h2 className="display-section max-w-2xl text-balance">
                Matter memos, delivered your mail client.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-ink-wash sm:text-[15px] sm:leading-8">
                Initial contact only: draft a short first note in your mail app—no
                PHI. The firm routes it, runs conflicts, and replies on business
                days subject to desk policy and volume.
              </p>

              <div className="mt-8 overflow-hidden rounded-2xl border border-gray/70 bg-paper/90">
                <ul className="divide-y divide-gray/60">
                  {deskItems.map((row) => (
                    <li
                      key={row.label}
                      className="px-4 py-3.5 sm:px-5 sm:py-4"
                    >
                      <div className="flex flex-col gap-0.5 sm:grid sm:grid-cols-[10.5rem_1fr] sm:items-start sm:gap-6">
                        <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-ink/40">
                          {row.label}
                        </p>
                        <div>
                          <p className="text-sm font-medium text-ink sm:text-[0.9375rem] sm:leading-snug">
                            {row.value}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-ink/50">
                            {row.note}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setOpen(true);
                  }}
                  className="inline-flex h-12 min-w-[12rem] items-center justify-center rounded-full bg-ink px-7 text-sm font-medium text-white shadow-[0_10px_34px_rgba(10,10,10,0.18)] transition hover:-translate-y-0.5 hover:bg-ink/95 hover:shadow-[0_14px_40px_rgba(10,10,10,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
                >
                  Contact us
                </button>
              </div>
            </div>

            <aside className="border-t border-gray bg-paper-cream/70 p-8 md:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="relative rounded-[1.75rem] border-4 border-double border-ink/85 bg-gradient-to-b from-white via-paper to-paper-cream p-1.5 shadow-[0_1px_0_0_#d8d4cc,0_24px_60px_rgba(10,10,10,0.08),inset_0_0_0_1px_rgba(10,10,10,0.05)]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-3 h-1.5 w-1.5 rounded-full border border-ink/50 bg-ink/10"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-3 h-1.5 w-1.5 rounded-full border border-ink/50 bg-ink/10"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full border border-ink/50 bg-ink/10"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full border border-ink/50 bg-ink/10"
                />

                <div className="rounded-2xl border border-ink/15 bg-white/60 px-5 pb-7 pt-6 md:px-7 md:pb-8 md:pt-7">
                  <p className="text-center font-mono text-[10px] uppercase tracking-[0.28em] text-ink/45">
                    About us
                  </p>
                  <div className="mx-auto mt-3 h-px max-w-[9rem] bg-ink/20" />
                  <p className="mt-3 text-center font-display text-2xl tracking-tight text-ink sm:text-3xl">
                    Brown &amp; Sullivan
                  </p>

                  <div className="relative mt-6 overflow-hidden rounded-2xl border-2 border-ink/12 bg-ink/5 shadow-inner">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src="/about-firm.jpg"
                        alt="Classical law library with reading tables and book-lined walls"
                        fill
                        className="object-cover object-center grayscale contrast-[0.95]"
                        sizes="(min-width: 1024px) 400px, 100vw"
                      />
                    </div>
                    <p className="border-t border-ink/10 bg-paper-cream/95 px-3 py-2.5 text-center font-mono text-[9px] uppercase tracking-[0.12em] text-ink/45">
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

                  <div className="mt-6">
                    <Link
                      href="/about"
                      className="inline-flex h-12 w-full items-center justify-center rounded-full border border-ink/20 bg-white/80 text-sm font-medium text-ink shadow-sm transition hover:border-ink/40 hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
                    >
                      Learn more about the firm
                    </Link>
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
                <p className="ledger-sm mb-3">Matter message</p>
                <h3 id="intake-modal-title" className="text-3xl">
                  Message Brown &amp; Sullivan
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-wash">
                  This step opens your mail client with a pre-filled, structured
                  note. Do not include private health information in this first
                  message.
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
                    ? "Your mail app should open next; send the draft from there to complete delivery."
                    : "A draft is prepared in your own mail app—nothing is submitted through this page."}
                </p>
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-ink px-5 text-sm font-medium text-white transition hover:-translate-y-0.5"
                >
                  Open mail draft
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </section>
  );
}
