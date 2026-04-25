import { SectionHeader } from "@/components/ui/section-header";

interface Pillar {
  letter: string;
  code: string;
  title: string;
  serif: string;
  capabilities: string[];
  cite: string;
}

const pillars: Pillar[] = [
  {
    letter: "C",
    code: "PILLAR · I · COMMS",
    title: "Communications Layer",
    serif: "Voice, SMS, and the lifecycle of every contact.",
    capabilities: [
      "RingCentral telephony, two-channel recording at the bridge",
      "10DLC-registered SMS with opt-out keyword handling",
      "Webhook subscriptions for the call lifecycle: Initiated → Authorized → Ringing → Connected → Disclosures → Presentation → Dispositioned",
      "Caller-ID transmission and identification scripted to FTC TSR",
    ],
    cite: "47 USC §227 · 16 CFR §310 · CMS MCMG 40.6",
  },
  {
    letter: "R",
    code: "PILLAR · II · RETAIN",
    title: "Retention Layer",
    serif: "The shelves on which the file rests.",
    capabilities: [
      "Box.com compliance-grade archive with metadata templates",
      "10-year retention for CMS, 6-year for HIPAA, 5-year for TCPA consent",
      "Append-only audit ledger of every read, write, share, and export",
      "Time-bounded, watermark-stamped shared links for examiners",
    ],
    cite: "CMS MCMG 50.4 · 45 CFR §164.530(j) · HITECH",
  },
  {
    letter: "A",
    code: "PILLAR · III · AUTHZ",
    title: "Authorization Layer",
    serif: "The token that says: yes, you may dial.",
    capabilities: [
      "Compliance Engine issues signed pre-call authorization tokens",
      "Consent gate resolves one-to-one written consent receipts",
      "Real-time licensure, AHIP, appointment, and product-line check",
      "Time-of-day, jurisdiction, and DNC scrub bound into the same decision",
    ],
    cite: "TCPA · 47 CFR §64.1200 · NAIC Producer Licensing",
  },
];

export function OperatingSystem() {
  return (
    <section id="operating-system" className="bg-paper-cream">
      <SectionHeader
        index={3}
        eyebrow="THE OPERATING SYSTEM"
        title="Three pillars hold the file."
        description="A communications layer that speaks. A retention layer that remembers. An authorization layer that decides. Each pillar issues its own evidence; each is independently audit-ready."
        align="split"
      />
      <div className="container-grid pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-os-pillars gap-0 border border-ink">
          {pillars.map((p, i) => {
            const isCenter = i === 1;
            return (
              <div
                key={p.letter}
                className={[
                  "relative p-8 lg:p-10 flex flex-col",
                  i === 0 ? "lg:pt-12" : "",
                  i === 2 ? "lg:pt-12" : "",
                  isCenter ? "lg:py-14 bg-paper" : "",
                  i !== 0 ? "border-t lg:border-t-0 lg:border-l border-ink" : "",
                ].join(" ")}
              >
                <div className="ledger-sm mb-4">{p.code}</div>
                <div
                  aria-hidden="true"
                  className="font-block uppercase text-[clamp(8rem,14vw,15rem)] leading-[0.78] mb-6"
                >
                  {p.letter}
                </div>
                <h3 className="display-headline-sm mb-1">{p.title}</h3>
                <p className="font-display italic text-lg text-ink-wash mb-6">
                  {p.serif}
                </p>
                <ul className="font-body text-base text-ink-wash space-y-3 leading-relaxed">
                  {p.capabilities.map((c) => (
                    <li key={c} className="flex gap-3 items-start">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 bg-ink shrink-0"
                      />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-4 border-t border-ink ledger-sm">
                  {p.cite}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
