import { PageTitle } from "@/components/ui/page-title";
import { LibraryCard } from "@/components/ui/library-card";
import { BlockTile } from "@/components/ui/block-tile";

export const metadata = {
  title: "Compliance · Brown & Sullivan",
  description:
    "TCPA, CMS Marketing Rules, HIPAA, FTC TSR, State DOI, and SOC 2 — the regulatory perimeter under which the firm operates.",
};

const programs = [
  {
    id: "tcpa",
    letter: "T",
    code: "PROG · 01 · TCPA",
    title: "Telephone Consumer Protection Act",
    citation: "47 USC §227 · 47 CFR §64.1200",
    body: [
      "Prior express written consent — including the FCC's 2024 one-to-one consent rule — captured at the lead source and re-resolved on every dial.",
      "Caller identification and time-of-day restrictions enforced at the dialer, not at the script.",
      "Internal DNC, federal DNC, state DNC, and reassigned-number scrubs applied in series; failure of any gate halts the call.",
      "5-year retention of consent receipts following revocation; revocation honored in all reasonable channels.",
    ],
  },
  {
    id: "cms",
    letter: "C",
    code: "PROG · 02 · CMS",
    title: "CMS Medicare Communications & Marketing Guidelines",
    citation: "42 CFR §422.2260–2274 · MCMG (Current Year)",
    body: [
      "TPMO disclosure read verbatim within the first minute of every Medicare-eligible call and captured as a discrete recording span.",
      "Scope of Appointment captured 48 hours in advance of plan presentation, or contemporaneously where permitted by the inbound exception.",
      "All calls regarding Medicare beneficiaries recorded in their entirety and retained for ten (10) years.",
      "Marketing material file-and-use process tracked against carrier and CMS approval calendars.",
    ],
  },
  {
    id: "hipaa",
    letter: "H",
    code: "PROG · 03 · HIPAA",
    title: "HIPAA Privacy & Security Rules",
    citation: "45 CFR §§160, 162, 164 · HITECH",
    body: [
      "Covered-entity status maintained for the firm's enrollment workflows; BAAs in force with carriers, RingCentral, Box.com, and HealthSherpa.",
      "Minimum necessary standard applied to access and export of PHI from the directory.",
      "Encryption in transit and at rest; key rotation tracked to the audit ledger.",
      "Breach notification thresholds and timelines documented and rehearsed annually.",
    ],
  },
  {
    id: "tsr",
    letter: "F",
    code: "PROG · 04 · FTC · TSR",
    title: "FTC Telemarketing Sales Rule",
    citation: "16 CFR §310",
    body: [
      "Prompt disclosures within the call's opening sequence — caller identity, purpose, recording.",
      "Caller ID transmission with truthful display of seller or telemarketer name and number.",
      "Abandoned-call rate held below the 3% safe harbor and reported quarterly.",
      "Recordkeeping of all telemarketing calls per §310.5, retained against the directory.",
    ],
  },
  {
    id: "doi",
    letter: "D",
    code: "PROG · 05 · DOI",
    title: "State Department of Insurance Rules",
    citation: "NAIC Models · State Insurance Codes",
    body: [
      "Producer state license, line of authority, and renewal tracked in the Agent Registry.",
      "Marketing-material approval status maintained where filing is required.",
      "Anti-rebating, anti-twisting, and replacement statutes coded into the script-approval workflow.",
      "Two-party-consent recording regimes applied per the call's destination state.",
    ],
  },
  {
    id: "soc2",
    letter: "S",
    code: "PROG · 06 · SOC2",
    title: "SOC 2 — Type II",
    citation: "AICPA Trust Services Criteria",
    body: [
      "Type II report current; Common Criteria CC1–CC9, plus Availability and Confidentiality categories in scope.",
      "Audit ledger satisfies CC7 monitoring criteria: append-only, time-bounded, examiner-exportable.",
      "Access provisioning, change management, and incident response runbooks under continuous evidence collection.",
      "Annual penetration test and quarterly vulnerability scan results filed to the directory.",
    ],
  },
];

export default function CompliancePage() {
  return (
    <>
      <PageTitle
        volume={2}
        chapter={2}
        eyebrow="THE COMPLIANCE PROGRAM"
        title="The perimeter under which we operate."
        subtitle="Six programs, no exceptions. Each is a separate body of law and each issues its own evidence. Brown & Sullivan organizes these into a single, indexable directory so that a question from any examiner returns the same answer."
        meta={["6 · PROGRAMS · ACTIVE", "AUDIT · MMXXVI · IV"]}
      />

      <section className="container-grid py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {programs.map((p) => (
          <BlockTile
            key={p.id}
            letter={p.letter}
            label={p.title.split(" ")[0] ?? p.id.toUpperCase()}
            caption={p.code}
            href={`#${p.id}`}
            variant={p.id === "tcpa" || p.id === "tsr" || p.id === "soc2" ? "ink" : "cream"}
            size="md"
          />
        ))}
      </section>

      {programs.map((p, idx) => (
        <section
          key={p.id}
          id={p.id}
          className="border-t border-ink py-14 bg-paper [&:nth-child(even)]:bg-paper-cream"
        >
          <div className="container-grid grid grid-cols-12 gap-x-6 gap-y-8">
            <div className="col-span-12 lg:col-span-4">
              <div className="ledger-sm mb-4">{p.code}</div>
              <div className="font-block uppercase text-[clamp(6rem,12vw,12rem)] leading-[0.78]">
                {p.letter}
              </div>
              <div className="ledger-sm mt-3 opacity-70">{p.citation}</div>
            </div>
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-5">
              <h2 className="display-headline-sm">{p.title}</h2>
              <ul className="font-body text-base text-ink-wash leading-relaxed space-y-3 max-w-3xl">
                {p.body.map((b) => (
                  <li key={b} className="flex gap-3 items-start">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 bg-ink shrink-0"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section
        id="engine"
        className="border-t border-ink bg-ink text-paper-cream py-14"
      >
        <div className="container-grid grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 lg:col-span-4 ledger-sm">
            <div>EXHIBIT · CE · ENGINE</div>
            <div className="opacity-80 mt-2">SIGNED · TOKENS · ONLY</div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2 className="display-headline-sm text-paper-cream">
              The Compliance Engine.
            </h2>
            <p className="font-body text-base mt-4 max-w-2xl leading-relaxed">
              The Engine collapses six bodies of law into a single decision: a
              signed token, issued or refused, in the moment before dial. No
              token, no call. No exceptions, no judgment calls, no humans in
              the loop.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
