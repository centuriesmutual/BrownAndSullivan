import { toRoman } from "@/lib/utils";

interface Disclosure {
  numeral: number;
  authority: string;
  title: string;
  body: string;
  citation: string;
}

const disclosures: Disclosure[] = [
  {
    numeral: 1,
    authority: "CMS",
    title: "Third-Party Marketing Organization Disclosure",
    body:
      "Brown & Sullivan does not offer every Medicare plan available in your area. We currently represent a defined number of Medicare Advantage and Prescription Drug Plan organizations and the products they offer in your area. Any consumer may contact Medicare.gov, 1-800-MEDICARE, or the local State Health Insurance Assistance Program to obtain information on all available options. This disclosure is delivered verbally on every recorded Medicare engagement within the first minute of conversation, in compliance with the Medicare Communications and Marketing Guidelines.",
    citation: "42 CFR §422.2274 · CMS MCMG 40.10",
  },
  {
    numeral: 2,
    authority: "TCPA",
    title: "Telephone Consumer Protection Act",
    body:
      "Brown & Sullivan places outbound telephone calls and short message service communications only after express written consent has been obtained from the consumer or has been transferred to the firm by a contracted lead originator under terms that satisfy the TCPA's prior-express-written-consent standard. Every outbound communication is gated by an authorization token issued by the firm's Compliance Engine, which evaluates the consumer's consent record, internal and federal Do-Not-Call status, time-of-day restrictions for the consumer's local time zone, and reassigned-number database results before authorizing the contact.",
    citation: "47 USC §227 · 47 CFR §64.1200",
  },
  {
    numeral: 3,
    authority: "CMS",
    title: "Scope of Appointment",
    body:
      "No specific Medicare plan will be discussed with any beneficiary until a Scope of Appointment has been documented identifying the products to be discussed. The Scope of Appointment may be captured by paper form, electronic signature, or recorded verbal acknowledgment on a recorded line. The firm retains every Scope of Appointment for a minimum of ten years.",
    citation: "42 CFR §422.2264 · CMS MCMG 40.2",
  },
  {
    numeral: 4,
    authority: "CMS / TCPA",
    title: "Call Recording and Retention",
    body:
      "All inbound and outbound voice communications between Brown & Sullivan and consumers are recorded. Recordings are retained for a minimum of ten years for Medicare engagements and seven years for ACA engagements, in compliance-grade archival storage, with cryptographic integrity verification. Recordings are produced to regulators and contracted carriers on lawful demand.",
    citation: "CMS MCMG 50.4 · 47 CFR §64.1200",
  },
];

const today = new Date().toISOString().slice(0, 10);

export function NoticeToConsumers() {
  return (
    <section
      id="notice"
      aria-labelledby="notice-heading"
      className="bg-paper-cream"
      style={{ borderTop: "3px solid #0A0A0A", borderBottom: "3px solid #0A0A0A" }}
    >
      <div className="container-grid section-y">
        <header className="grid grid-cols-12 gap-x-6 gap-y-6 mb-12">
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-2">
            <span className="filing-index">II. NOTICE</span>
          </div>
          <div className="col-span-12 lg:col-span-9 flex flex-col gap-4">
            <h2
              id="notice-heading"
              className="font-block uppercase leading-[0.92] tracking-block-tight text-[clamp(2.25rem,4.2vw,4.5rem)]"
            >
              Notice to Consumers
              <br />
              <span className="font-display italic font-normal normal-case tracking-normal text-[0.5em] leading-tight">
                · Required Disclosures ·
              </span>
            </h2>
            <p className="body-prose body-prose-wash max-w-3xl">
              The following disclosures are made pursuant to federal and state
              law. They are presented here so that any consumer engaging the
              firm has read them before any communication occurs.
            </p>
          </div>
        </header>

        <ol className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-ink bg-paper">
          {disclosures.map((d, i) => {
            const roman = toRoman(d.numeral);
            return (
              <li
                key={d.numeral}
                className="relative p-8 lg:p-10 flex flex-col gap-5"
                style={{
                  borderLeft:
                    i % 2 === 1 ? "1.5px solid #0A0A0A" : undefined,
                  borderTop:
                    i >= 2 ? "1.5px solid #0A0A0A" : undefined,
                }}
              >
                <header className="flex items-start justify-between gap-4 border-b border-ink pb-4">
                  <div className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="font-block text-[clamp(2.5rem,4vw,3.5rem)] leading-[0.78]"
                    >
                      {roman}
                    </span>
                    <span className="ledger-sm">{d.authority}</span>
                  </div>
                  <span aria-hidden="true" className="h-2 w-2 bg-ink mt-3" />
                </header>
                <h3 className="font-display text-2xl leading-tight smcp tracking-wide">
                  {d.title}
                </h3>
                <p className="body-prose body-prose-wash">{d.body}</p>
                <footer className="mt-auto pt-4 border-t border-ink ledger-sm">
                  CITATION · {d.citation}
                </footer>
              </li>
            );
          })}
        </ol>

        <p className="ledger-sm mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span>FULL DISCLOSURE LIBRARY</span>
          <span aria-hidden="true">·</span>
          <a href="/compliance" className="firm-link">
            /compliance
          </a>
          <span aria-hidden="true">·</span>
          <span>LAST REVIEWED · {today}</span>
        </p>
      </div>
    </section>
  );
}
