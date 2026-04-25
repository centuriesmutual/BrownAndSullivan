export type ScriptDomain = "ACA" | "Medicare" | "Compliance" | "Verification" | "Cross-Sell";

export interface SalesScript {
  id: string;
  code: string;
  domain: ScriptDomain;
  title: string;
  description: string;
  required: string[];
  version: string;
  lastApproved: string;
}

export const salesScripts: SalesScript[] = [
  // ─── ACA ─────────────────────────────────────────────────────────
  {
    id: "ACA_Outbound_Standard_Open",
    code: "SCR · 100 · ACA · OPEN",
    domain: "ACA",
    title: "ACA Outbound Standard Open",
    description:
      "Compliant ACA Marketplace outbound opening sequence: caller identification, brokerage identification, recording disclosure, and consent re-confirmation.",
    required: [
      "Caller Name",
      "Brokerage Identification",
      "Recording Disclosure",
      "Consent Confirmation",
    ],
    version: "v · TBD",
    lastApproved: "MMXXVI · IV",
  },
  {
    id: "ACA_Qualification_Standard",
    code: "SCR · 101 · ACA · QUAL",
    domain: "ACA",
    title: "ACA Qualification (Standard)",
    description:
      "Household composition, income estimate, current coverage, ZIP-level Marketplace, tobacco use, and APTC eligibility intake.",
    required: ["Household Size", "Estimated AGI", "Current Coverage", "Tobacco Use"],
    version: "v · TBD",
    lastApproved: "MMXXVI · IV",
  },
  {
    id: "ACA_Plan_Presentation",
    code: "SCR · 102 · ACA · PRES",
    domain: "ACA",
    title: "ACA Plan Presentation",
    description:
      "Metal-tier comparison, network confirmation, formulary lookup, premium and APTC math, and SBC walkthrough.",
    required: [
      "At least 2 plans",
      "Network Verified",
      "APTC Math Stated",
      "SBC Offered",
    ],
    version: "v · TBD",
    lastApproved: "MMXXVI · III",
  },
  {
    id: "ACA_Voice_Verification_Pre_Transfer",
    code: "SCR · 103 · ACA · VRF",
    domain: "Verification",
    title: "ACA Voice Verification (Pre-Transfer)",
    description:
      "Standalone verbal authorization captured before live-transfer to HealthSherpa, recording the consumer's stated election and consent to enroll.",
    required: ["Plan Election Stated", "APTC Election", "Consumer Consent"],
    version: "v · TBD",
    lastApproved: "MMXXVI · III",
  },

  // ─── Cross-Sell ──────────────────────────────────────────────────
  {
    id: "ACA_to_Medicare_Crosssell",
    code: "SCR · 150 · X-SELL",
    domain: "Cross-Sell",
    title: "ACA → Medicare Cross-Sell",
    description:
      "Aging-into-Medicare and household-Medicare cross-sell sequence with re-consent, SOA capture, and TPMO disclosure prior to any plan discussion.",
    required: [
      "Re-Consent Captured",
      "SOA Within 48 Hours",
      "TPMO Read Verbatim",
      "No Coercive Language",
    ],
    version: "v · TBD",
    lastApproved: "MMXXVI · IV",
  },

  // ─── Medicare ────────────────────────────────────────────────────
  {
    id: "Medicare_TPMO_Disclosure",
    code: "SCR · 200 · CMS · TPMO",
    domain: "Compliance",
    title: "Medicare TPMO Disclosure",
    description:
      "Verbatim TPMO disclosure required by 42 CFR §422.2274(c), captured within the first minute of every Medicare-eligible call.",
    required: ["Read Verbatim", "Captured in Recording", "Pre-Presentation"],
    version: "v · TBD",
    lastApproved: "MMXXVI · IV",
  },
  {
    id: "Medicare_SOA_Verbal",
    code: "SCR · 201 · CMS · SOA",
    domain: "Compliance",
    title: "Medicare Scope of Appointment (Verbal)",
    description:
      "Verbal SOA for inbound or beneficiary-initiated calls, with 48-hour rule documentation and product-scope confirmation tied to agent NPN.",
    required: ["Beneficiary Identity", "Products in Scope", "Date Stamp", "Agent NPN"],
    version: "v · TBD",
    lastApproved: "MMXXVI · IV",
  },
  {
    id: "Medicare_Needs_Analysis",
    code: "SCR · 202 · MED · NEEDS",
    domain: "Medicare",
    title: "Medicare Needs Analysis",
    description:
      "Beneficiary-led analysis of providers, prescriptions, pharmacies, supplemental needs, and budget — captured against the lead and bound to the recording.",
    required: ["Provider List", "Drug List", "Pharmacy", "Budget Window"],
    version: "v · TBD",
    lastApproved: "MMXXVI · III",
  },
  {
    id: "Medicare_Presentation_Standard",
    code: "SCR · 203 · MED · PRES",
    domain: "Medicare",
    title: "Medicare Presentation (Standard)",
    description:
      "Plan presentation against the captured needs analysis: at least two plans, network verified, formulary verified, MOOP stated, supplemental benefits enumerated.",
    required: [
      "At least 2 plans",
      "Network Verified",
      "Formulary Verified",
      "MOOP Stated",
    ],
    version: "v · TBD",
    lastApproved: "MMXXVI · III",
  },
  {
    id: "Medicare_Voice_Verification_Final",
    code: "SCR · 204 · CMS · VRF",
    domain: "Verification",
    title: "Medicare Voice Verification (Final)",
    description:
      "Standalone verbal authorization recording closing the enrollment, capturing plan election, effective date, and beneficiary-stated consent.",
    required: [
      "Plan Election Stated",
      "Effective Date Stated",
      "Beneficiary Consent",
    ],
    version: "v · TBD",
    lastApproved: "MMXXVI · IV",
  },

  // ─── Compliance ──────────────────────────────────────────────────
  {
    id: "Consent_Revocation_Standard",
    code: "SCR · 300 · CSNT · REV",
    domain: "Compliance",
    title: "Consent Revocation (Standard)",
    description:
      "Honoring revocation of consent by any reasonable means: confirmation language, dialer suppression entry, and audit-ledger annotation.",
    required: [
      "Verbatim Confirmation",
      "Suppression Logged",
      "Effective Immediately",
      "Acknowledgement to Caller",
    ],
    version: "v · TBD",
    lastApproved: "MMXXVI · IV",
  },
];
