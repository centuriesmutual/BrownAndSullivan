"use client";

import { useState } from "react";

const disclosures = [
  {
    title: "Third-Party Marketing Organization Disclosure",
    tag: "CMS",
    preview:
      "Brown & Sullivan does not offer every Medicare plan available in your area.",
    body:
      "Brown & Sullivan represents a defined number of Medicare Advantage and Prescription Drug Plan organizations. A consumer may contact Medicare.gov, 1-800-MEDICARE, or the local State Health Insurance Assistance Program to obtain information on all available options. This disclosure is delivered verbally on every recorded Medicare engagement within the first minute of conversation.",
  },
  {
    title: "Telephone Consumer Protection Act",
    tag: "TCPA",
    preview:
      "Outbound communication is authorized only after documented consent review.",
    body:
      "Brown & Sullivan places outbound calls and short message communications only after express written consent has been obtained from the consumer or transferred by a contracted lead originator. Each contact is gated by review of consent currency, internal and federal Do-Not-Call status, local time restrictions, frequency caps, and reassigned-number results.",
  },
  {
    title: "Scope of Appointment",
    tag: "CMS",
    preview:
      "Medicare plan-specific discussion begins only after the scope is recorded.",
    body:
      "No specific Medicare plan is discussed with a beneficiary until a Scope of Appointment has been documented identifying the products to be discussed. The scope may be captured by paper form, electronic signature, or recorded verbal acknowledgment. The firm retains every Scope of Appointment for at least ten years.",
  },
  {
    title: "Call Recording and Retention",
    tag: "RET",
    preview:
      "Inbound and outbound voice engagements are recorded and retained.",
    body:
      "Voice communications between Brown & Sullivan and consumers are recorded. Recordings are retained for Medicare and ACA matters under applicable retention schedules in compliance-grade archival storage, with integrity verification and production on lawful demand.",
  },
];

export function DisclosureAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section id="disclosures" className="section-y border-y border-gray bg-paper-cream/60">
      <div className="container-grid">
        <div className="mx-auto max-w-3xl text-center">
          <p className="ledger-sm mb-4">Required Disclosures</p>
          <h2 className="display-section">Consumer notices remain visible.</h2>
          <p className="mt-4 text-base leading-7 text-ink-wash">
            The firm presents required disclosures before any product discussion.
            They remain accessible here without making the interface difficult to read.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-3">
          {disclosures.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.title} className="soft-card overflow-hidden">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 p-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span>
                    <span className="mb-2 inline-flex rounded-full bg-paper-cream px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-ink-wash">
                      {item.tag}
                    </span>
                    <span className="block text-base font-medium text-ink">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm text-ink-wash">
                      {item.preview}
                    </span>
                  </span>
                  <span className="shrink-0 rounded-full border border-gray px-3 py-1 text-xs text-ink-wash">
                    {isOpen ? "Close" : "Read"}
                  </span>
                </button>
                {isOpen ? (
                  <div className="border-t border-gray px-5 pb-5 pt-4">
                    <p className="text-sm leading-7 text-ink-wash">{item.body}</p>
                    <a href="/compliance" className="firm-link mt-4 inline-block text-sm font-medium">
                      Read full disclosure →
                    </a>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
