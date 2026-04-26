export interface ComplianceProgram {
  id: string;
  letter: string;
  code: string;
  title: string;
  citation: string;
  body: string[];
}

export const compliancePrograms: ComplianceProgram[] = [
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

export function getComplianceProgram(id: string) {
  return compliancePrograms.find((p) => p.id === id);
}
