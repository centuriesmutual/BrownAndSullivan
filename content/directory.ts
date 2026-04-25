export type DirectoryCategory =
  | "Compliance Artifacts"
  | "Agent Registry"
  | "Carrier & Plan Catalog"
  | "Regulatory Framework"
  | "Operations"
  | "Retention"
  | "Authorization"
  | "Lead Lifecycle"
  | "Scripts"
  | "Audit Evidence";

export interface DirectoryEntry {
  id: string;
  code: string;
  category: DirectoryCategory;
  title: string;
  summary: string;
  tags: string[];
  regulatoryReferences: string[];
  lastReviewed: string;
}

export const directoryEntries: DirectoryEntry[] = [
  // ───────────────────────────────────────────────────────────────────
  // Compliance Artifacts
  // ───────────────────────────────────────────────────────────────────
  {
    id: "ca-call-recording",
    code: "REF · 384.6 · CALL · REC",
    category: "Compliance Artifacts",
    title: "Call Recording Archive",
    summary:
      "Two-channel recordings of every outbound and inbound call, captured at the carrier-grade telephony bridge and sealed against modification at the moment of disconnect.",
    tags: ["recording", "TCPA", "CMS", "evidence"],
    regulatoryReferences: ["TCPA §227", "CMS MCMG 40.6", "State Two-Party Consent"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "ca-voice-verification",
    code: "REF · 384.7 · VOICE · VRF",
    category: "Compliance Artifacts",
    title: "Voice Verification Records",
    summary:
      "Standalone verbal authorization recordings captured during enrollment, retained as a separately addressable evidence object distinct from the parent call.",
    tags: ["verification", "enrollment", "evidence"],
    regulatoryReferences: ["CMS MCMG 70.5", "FTC TSR 16 CFR §310.4"],
    lastReviewed: "MMXXVI · III",
  },
  {
    id: "ca-soa-form",
    code: "REF · 384.8 · SOA · FRM",
    category: "Compliance Artifacts",
    title: "Scope of Appointment (SOA) Forms",
    summary:
      "CMS-compliant Medicare Scope of Appointment records, captured 48 hours in advance of plan presentation and tied to the agent's NPN and AHIP cycle.",
    tags: ["SOA", "Medicare", "CMS"],
    regulatoryReferences: ["CMS MCMG 40.2", "42 CFR §422.2264"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "ca-tpmo-disclosure",
    code: "REF · 384.9 · TPMO · DSC",
    category: "Compliance Artifacts",
    title: "TPMO Disclosure Records",
    summary:
      "Third-Party Marketing Organization disclosure read verbatim within the first minute of every Medicare-eligible call and captured as a discrete evidence span.",
    tags: ["TPMO", "Medicare", "disclosure"],
    regulatoryReferences: ["42 CFR §422.2274(c)", "CMS MCMG 40.10"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "ca-consent-evidence",
    code: "REF · 385.0 · CONSENT · EV",
    category: "Compliance Artifacts",
    title: "Prior Express Written Consent",
    summary:
      "Lead-level evidence of prior express written consent under the 2024 TCPA one-to-one consent rule, with source URL, IP, timestamp, and disclosure language hash.",
    tags: ["TCPA", "consent", "lead", "1:1"],
    regulatoryReferences: ["TCPA §227(b)(1)(A)", "FCC 47 CFR §64.1200(f)(9)"],
    lastReviewed: "MMXXVI · II",
  },

  // ───────────────────────────────────────────────────────────────────
  // Agent Registry
  // ───────────────────────────────────────────────────────────────────
  {
    id: "ag-licensure",
    code: "REF · 411.2 · LIC · STATE",
    category: "Agent Registry",
    title: "Agent State Licensure",
    summary:
      "Real-time index of producer state licenses by NPN, line of authority, and renewal date, refreshed against NIPR and individual state DOI feeds nightly.",
    tags: ["licensure", "NPN", "DOI"],
    regulatoryReferences: ["NAIC Producer Licensing Model Act"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "ag-ahip",
    code: "REF · 411.3 · AHIP · CRT",
    category: "Agent Registry",
    title: "AHIP Certification Status",
    summary:
      "Current-cycle AHIP and Medicare-only training completion records, including certificate IDs and expiration windows, blocked at the dialer when not current.",
    tags: ["AHIP", "Medicare", "training"],
    regulatoryReferences: ["CMS MCMG 50.1"],
    lastReviewed: "MMXXVI · III",
  },
  {
    id: "ag-appointments",
    code: "REF · 411.4 · APPT · CRR",
    category: "Agent Registry",
    title: "Carrier Appointments",
    summary:
      "Producer-to-carrier appointment ledger with effective dates, contracted product lines, and writing numbers, reconciled weekly against carrier feeds.",
    tags: ["carrier", "appointment", "writing-number"],
    regulatoryReferences: ["State DOI Appointment Filings"],
    lastReviewed: "MMXXVI · IV",
  },

  // ───────────────────────────────────────────────────────────────────
  // Carrier & Plan Catalog
  // ───────────────────────────────────────────────────────────────────
  {
    id: "cp-mapd",
    code: "REF · 510.1 · MAPD · CTRC",
    category: "Carrier & Plan Catalog",
    title: "Medicare Advantage / MA-PD Contracts",
    summary:
      "Plan-year contract index by H-number / PBP, with formularies, networks, MOOP, supplemental benefits, and SBC linkage to the enrollment workflow.",
    tags: ["MAPD", "Medicare Advantage", "H-number"],
    regulatoryReferences: ["42 CFR §422", "CMS Bid Pricing Tool"],
    lastReviewed: "MMXXVI · I",
  },
  {
    id: "cp-pdp",
    code: "REF · 510.2 · PDP · FRM",
    category: "Carrier & Plan Catalog",
    title: "Medicare Part D Formularies",
    summary:
      "Formulary catalog with tier placement, prior authorization flags, step therapy, and quantity limits; mapped to the agent's drug-list intake form.",
    tags: ["PDP", "Part D", "formulary"],
    regulatoryReferences: ["42 CFR §423"],
    lastReviewed: "MMXXVI · I",
  },
  {
    id: "cp-medsupp",
    code: "REF · 510.3 · MEDSUP · STD",
    category: "Carrier & Plan Catalog",
    title: "Medicare Supplement Plan Index",
    summary:
      "Standardized Medigap plan letters (A, F, G, N, et al.) by carrier and rating area, including underwriting class, household discount, and pre-existing waiting periods.",
    tags: ["Medigap", "Medsupp"],
    regulatoryReferences: ["NAIC Model 651", "State DOI Filings"],
    lastReviewed: "MMXXVI · II",
  },
  {
    id: "cp-aca",
    code: "REF · 510.4 · ACA · QHP",
    category: "Carrier & Plan Catalog",
    title: "ACA Marketplace QHPs",
    summary:
      "Qualified Health Plans by state Marketplace, metal tier, network, formulary, and APTC tax-credit eligibility — synchronized to HealthSherpa for enrollment.",
    tags: ["ACA", "QHP", "marketplace"],
    regulatoryReferences: ["45 CFR §155", "ACA §1311"],
    lastReviewed: "MMXXVI · II",
  },

  // ───────────────────────────────────────────────────────────────────
  // Regulatory Framework
  // ───────────────────────────────────────────────────────────────────
  {
    id: "rf-tcpa",
    code: "REF · 600.1 · TCPA",
    category: "Regulatory Framework",
    title: "Telephone Consumer Protection Act (TCPA)",
    summary:
      "Prior express written consent, identification of caller, time-of-day windows, internal DNC, reassigned-number database, and one-to-one consent enforcement.",
    tags: ["TCPA", "DNC", "consent"],
    regulatoryReferences: ["47 USC §227", "47 CFR §64.1200"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "rf-cms",
    code: "REF · 600.2 · CMS · MCMG",
    category: "Regulatory Framework",
    title: "CMS Medicare Communications & Marketing Guidelines",
    summary:
      "TPMO disclosure, SOA timing, plan presentation rules, recording requirements, and material file-and-use process governing all Medicare distribution.",
    tags: ["CMS", "MCMG", "Medicare"],
    regulatoryReferences: ["42 CFR §422.2260–2274"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "rf-hipaa",
    code: "REF · 600.3 · HIPAA",
    category: "Regulatory Framework",
    title: "HIPAA Privacy & Security Rules",
    summary:
      "PHI handling for enrollment, BAAs with carriers and platform vendors, minimum necessary standard, and breach notification thresholds.",
    tags: ["HIPAA", "PHI", "BAA"],
    regulatoryReferences: ["45 CFR §164", "HITECH Act"],
    lastReviewed: "MMXXVI · III",
  },
  {
    id: "rf-doi",
    code: "REF · 600.4 · DOI · STATE",
    category: "Regulatory Framework",
    title: "State Department of Insurance Rules",
    summary:
      "Producer licensing, marketing material approval, anti-rebating statutes, and state-specific call-recording consent regimes across XXXVII jurisdictions.",
    tags: ["DOI", "state"],
    regulatoryReferences: ["NAIC Models", "State Insurance Codes"],
    lastReviewed: "MMXXVI · II",
  },
  {
    id: "rf-tsr",
    code: "REF · 600.5 · FTC · TSR",
    category: "Regulatory Framework",
    title: "FTC Telemarketing Sales Rule",
    summary:
      "Caller ID transmission, prompt disclosures, prohibited deceptive practices, abandoned-call rate caps, and recordkeeping for all telemarketing calls.",
    tags: ["FTC", "TSR"],
    regulatoryReferences: ["16 CFR §310"],
    lastReviewed: "MMXXVI · I",
  },

  // ───────────────────────────────────────────────────────────────────
  // Operations (RingCentral / Telephony)
  // ───────────────────────────────────────────────────────────────────
  {
    id: "op-rc-bridge",
    code: "REF · 712.1 · RC · BRIDGE",
    category: "Operations",
    title: "RingCentral Telephony Bridge",
    summary:
      "Primary outbound and inbound voice channel with webhook subscriptions for call lifecycle events: Initiated, Authorized, Ringing, Connected, Disconnected, Recording-Ready.",
    tags: ["RingCentral", "telephony", "webhook"],
    regulatoryReferences: ["TCPA §227", "FTC TSR 16 CFR §310.4"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "op-rc-sms",
    code: "REF · 712.2 · RC · SMS",
    category: "Operations",
    title: "Compliant SMS Channel",
    summary:
      "10DLC-registered SMS messaging with brand and campaign vetting, opt-out keyword handling, and lead-level consent gating prior to send.",
    tags: ["SMS", "10DLC", "opt-out"],
    regulatoryReferences: ["TCPA §227", "CTIA Messaging Principles"],
    lastReviewed: "MMXXVI · III",
  },
  {
    id: "op-auto-dialer",
    code: "REF · 712.3 · DIAL · AUTO",
    category: "Operations",
    title: "Authorization-Gated Auto-Dialer",
    summary:
      "Auto-dialer that refuses to place a call until the Compliance Engine returns an authorization token covering consent, DNC scrub, jurisdiction, and time-of-day.",
    tags: ["dialer", "authorization", "consent"],
    regulatoryReferences: ["TCPA §227", "47 CFR §64.1200(c)"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "op-live-transfer",
    code: "REF · 712.4 · LIVE · XFR",
    category: "Operations",
    title: "Live Transfer to HealthSherpa",
    summary:
      "Warm-transfer protocol from front-line agent to licensed enrollment producer (HealthSherpa for ACA, carrier portal for Medicare) with mid-call SOA, TPMO re-disclosure, and continuous recording across legs.",
    tags: ["transfer", "warm", "SOA", "HealthSherpa"],
    regulatoryReferences: ["CMS MCMG 40.2"],
    lastReviewed: "MMXXVI · III",
  },
  {
    id: "op-skills-routing",
    code: "REF · 712.5 · SKILLS · RT",
    category: "Operations",
    title: "Skills-Based Routing with Licensing Enforcement",
    summary:
      "Routing rules that bind a caller's destination state to producers licensed and appointed for the line of authority, refusing to route to non-licensed agents.",
    tags: ["routing", "licensure", "skills"],
    regulatoryReferences: ["NAIC Producer Licensing Model", "TCPA"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "op-predictive-routing",
    code: "REF · 712.6 · PRED · RT",
    category: "Operations",
    title: "Predictive Routing",
    summary:
      "Lead-to-agent matching using historical disposition data, plan-set affinity, and conversion likelihood — held strictly within the licensed-and-appointed cohort.",
    tags: ["routing", "predictive", "lead"],
    regulatoryReferences: ["TCPA", "FTC TSR"],
    lastReviewed: "MMXXVI · III",
  },
  {
    id: "op-whisper-coaching",
    code: "REF · 712.7 · WHISPER",
    category: "Operations",
    title: "Whisper Coaching",
    summary:
      "Supervisor-to-agent whisper channel for in-call coaching — captured to the audit ledger but excluded from the consumer-facing recording.",
    tags: ["coaching", "supervision"],
    regulatoryReferences: ["State Two-Party Consent Variants"],
    lastReviewed: "MMXXVI · III",
  },
  {
    id: "op-callback-deflection",
    code: "REF · 712.8 · DEFLECT",
    category: "Operations",
    title: "Callback Deflection",
    summary:
      "Inbound queue overflow handler offering scheduled callback in lieu of hold time, preserving caller-ID and consent posture for the deferred contact.",
    tags: ["callback", "queue"],
    regulatoryReferences: ["TCPA", "FTC TSR §310.4"],
    lastReviewed: "MMXXVI · II",
  },
  {
    id: "op-realtime-monitoring",
    code: "REF · 712.9 · MON · RT",
    category: "Operations",
    title: "Real-Time Compliance Monitoring",
    summary:
      "In-call language detection of required disclosures (TPMO, recording, SOA) with supervisor alerts when a required element has not been observed in the audio stream.",
    tags: ["monitoring", "speech-analytics", "TPMO"],
    regulatoryReferences: ["CMS MCMG 40.10", "TCPA"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "op-post-call-qa",
    code: "REF · 713.0 · QA · POST",
    category: "Operations",
    title: "Post-Call Quality Scoring",
    summary:
      "Automated and human review of every recording against a published rubric — disclosure capture, script adherence, prohibited language, beneficiary identification.",
    tags: ["QA", "rubric", "scoring"],
    regulatoryReferences: ["CMS MCMG", "Internal Quality Program"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "op-omnichannel",
    code: "REF · 713.1 · OMNI",
    category: "Operations",
    title: "Omnichannel Continuity",
    summary:
      "Single lead-thread across voice, SMS, and email — same consent posture, same audit ledger, same retention clock — so the file remains coherent at audit time.",
    tags: ["SMS", "email", "voice", "thread"],
    regulatoryReferences: ["TCPA", "CTIA Messaging Principles"],
    lastReviewed: "MMXXVI · III",
  },
  {
    id: "op-voice-biometric",
    code: "REF · 713.2 · BIO · VOX",
    category: "Operations",
    title: "Voice Biometric Verification",
    summary:
      "Speaker-recognition signature comparing the live voice on the call to the prior beneficiary recording, used as a secondary check for high-risk transactions.",
    tags: ["biometric", "verification"],
    regulatoryReferences: ["BIPA (where applicable)", "HIPAA"],
    lastReviewed: "MMXXVI · II",
  },
  {
    id: "op-screen-share",
    code: "REF · 713.3 · SCR · SHR",
    category: "Operations",
    title: "Screen Sharing for Enrollment Guidance",
    summary:
      "Co-browse session into the consumer's HealthSherpa enrollment with no input capture by the agent — enrollment is consumer-driven, agent guides verbally.",
    tags: ["co-browse", "screen-share", "ACA"],
    regulatoryReferences: ["CMS Consumer-Driven Enrollment"],
    lastReviewed: "MMXXVI · III",
  },
  {
    id: "op-auto-doc",
    code: "REF · 713.4 · DOC · AUTO",
    category: "Operations",
    title: "Auto-Documentation",
    summary:
      "Automatic synthesis of the call disposition note from transcript and structured-event capture, reviewed and signed by the agent before file commit.",
    tags: ["transcript", "documentation"],
    regulatoryReferences: ["CMS MCMG", "Internal Recordkeeping"],
    lastReviewed: "MMXXVI · III",
  },

  // ───────────────────────────────────────────────────────────────────
  // Retention (Box.com)
  // ───────────────────────────────────────────────────────────────────
  {
    id: "rt-box-archive",
    code: "REF · 815.1 · BOX · ARCH",
    category: "Retention",
    title: "Box.com Compliance-Grade Archive",
    summary:
      "All call recordings, SOA forms, voice verifications, consent evidence, and enrollment artifacts written to Box with retention policies and metadata templates.",
    tags: ["Box", "retention", "archive"],
    regulatoryReferences: ["CMS MCMG 50.4 (10-year retention)", "HIPAA §164.530(j)"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "rt-retention-policy",
    code: "REF · 815.2 · POL · 10YR",
    category: "Retention",
    title: "10-Year Retention Policy",
    summary:
      "Indefinite-hold retention policy applied to all CMS-regulated artifacts; HIPAA artifacts held to 6-year minimum; TCPA consent evidence held to 5 years post-revocation.",
    tags: ["retention", "policy"],
    regulatoryReferences: ["CMS MCMG 50.4", "HIPAA §164.530(j)", "TCPA §227"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "rt-metadata",
    code: "REF · 815.3 · META · TPL",
    category: "Retention",
    title: "Box Metadata Templates",
    summary:
      "Structured metadata applied at upload: agent NPN, lead ID, carrier, plan ID, recording duration, disposition code, regulatory tags, and audit hash.",
    tags: ["metadata", "Box", "evidence"],
    regulatoryReferences: ["CMS MCMG 50.4"],
    lastReviewed: "MMXXVI · III",
  },
  {
    id: "rt-regulator-link",
    code: "REF · 815.4 · LINK · REG",
    category: "Retention",
    title: "Regulator Shared Links",
    summary:
      "Time-bounded, watermark-stamped Box shared links produced on demand for state DOI, CMS, OCR, and FTC examiners — with full access ledger.",
    tags: ["regulator", "shared-link"],
    regulatoryReferences: ["State DOI Audit Authority", "42 CFR §422.504(e)"],
    lastReviewed: "MMXXVI · II",
  },

  // ───────────────────────────────────────────────────────────────────
  // Authorization (Compliance Engine)
  // ───────────────────────────────────────────────────────────────────
  {
    id: "au-compliance-engine",
    code: "REF · 901.1 · ENGINE",
    category: "Authorization",
    title: "Compliance Engine",
    summary:
      "Pre-call authorization service issuing signed tokens that bind agent licensure, lead consent, jurisdiction, time-of-day, and product line into a single decision.",
    tags: ["authorization", "engine", "token"],
    regulatoryReferences: ["TCPA", "CMS MCMG", "State DOI"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "au-consent-gate",
    code: "REF · 901.2 · GATE · CSNT",
    category: "Authorization",
    title: "Consent Gate",
    summary:
      "Service that resolves the lead's most recent and most specific written consent record, including one-to-one seller identification under 47 CFR §64.1200.",
    tags: ["consent", "1:1", "TCPA"],
    regulatoryReferences: ["47 CFR §64.1200(f)(9)"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "au-licensure-check",
    code: "REF · 901.3 · LIC · CHK",
    category: "Authorization",
    title: "Licensure Verification",
    summary:
      "Real-time check of producer state license, AHIP, carrier appointment, and product authorization against the call's destination state and product line.",
    tags: ["licensure", "verification"],
    regulatoryReferences: ["NAIC Producer Licensing Model"],
    lastReviewed: "MMXXVI · III",
  },

  // ───────────────────────────────────────────────────────────────────
  // Lead Lifecycle (ACA pipeline)
  // ───────────────────────────────────────────────────────────────────
  {
    id: "ll-receipt",
    code: "REF · 950.1 · RCV",
    category: "Lead Lifecycle",
    title: "Lead Receipt & Validation",
    summary:
      "Inbound lead intake from purchased lead vendors — schema validation, duplicate detection, source attribution, and consent-receipt resolution at the moment of receipt.",
    tags: ["lead", "ACA", "receipt"],
    regulatoryReferences: ["TCPA §227", "47 CFR §64.1200(f)(9)"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "ll-enrichment",
    code: "REF · 950.2 · ENR",
    category: "Lead Lifecycle",
    title: "Pre-Contact Enrichment",
    summary:
      "Reassigned-number scrub, jurisdiction enrichment, time-zone resolution, and DNC pre-check — performed before the lead is eligible for the dialer queue.",
    tags: ["enrichment", "DNC", "reassigned-number"],
    regulatoryReferences: ["TCPA Reassigned Numbers Database", "47 CFR §64.1200(c)"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "ll-scoring",
    code: "REF · 950.3 · SCR",
    category: "Lead Lifecycle",
    title: "Lead Scoring",
    summary:
      "Composite score across consent freshness, jurisdiction, vendor quality, and historical conversion — dictating queue priority and speed-to-lead window.",
    tags: ["scoring", "priority"],
    regulatoryReferences: ["Internal Quality Program"],
    lastReviewed: "MMXXVI · III",
  },
  {
    id: "ll-speed-to-lead",
    code: "REF · 950.4 · STL",
    category: "Lead Lifecycle",
    title: "Speed-to-Lead Dialing",
    summary:
      "Sub-five-minute dial cadence on freshly consented leads, gated by the Compliance Engine token, with cap on attempts per state-law dial-frequency rules.",
    tags: ["dialer", "STL"],
    regulatoryReferences: ["TCPA", "State Frequency Caps"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "ll-engagement",
    code: "REF · 950.5 · ENG",
    category: "Lead Lifecycle",
    title: "Engagement",
    summary:
      "Initial conversation: identification, recording disclosure, consent re-confirmation, qualification, and warm hand-off to the appropriate licensed producer.",
    tags: ["engagement", "qualification"],
    regulatoryReferences: ["TCPA", "FTC TSR"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "ll-nurture",
    code: "REF · 950.6 · NUR",
    category: "Lead Lifecycle",
    title: "Nurture",
    summary:
      "Multi-touch follow-up across voice, SMS (10DLC), and email — with strict opt-out handling and per-channel consent gating maintained on the lead thread.",
    tags: ["nurture", "SMS", "follow-up"],
    regulatoryReferences: ["TCPA §227", "CTIA Messaging Principles"],
    lastReviewed: "MMXXVI · III",
  },
  {
    id: "ll-crosssell",
    code: "REF · 950.7 · X-MED",
    category: "Lead Lifecycle",
    title: "Cross-Sell to Medicare",
    summary:
      "Aging-into-Medicare and household-Medicare cross-sell pathway off the ACA file — re-consent, fresh SOA, TPMO disclosure, and licensure check before any plan discussion.",
    tags: ["cross-sell", "Medicare", "SOA"],
    regulatoryReferences: ["CMS MCMG 40.2 / 40.10", "TCPA"],
    lastReviewed: "MMXXVI · IV",
  },

  // ───────────────────────────────────────────────────────────────────
  // Audit Evidence
  // ───────────────────────────────────────────────────────────────────
  {
    id: "ev-lead-profile",
    code: "REF · A.01 · LEAD",
    category: "Audit Evidence",
    title: "Lead Profile",
    summary:
      "Identity, source URL, consent text, IP, timestamp, jurisdiction, and demographic snapshot at the moment of consent capture.",
    tags: ["lead", "consent"],
    regulatoryReferences: ["TCPA"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "ev-comm-records",
    code: "REF · A.02 · COMM",
    category: "Audit Evidence",
    title: "Communication Records",
    summary:
      "Every call, SMS, and email tied to the lead, with two-channel recordings, transcripts, disposition codes, and agent identity.",
    tags: ["call", "SMS", "transcript"],
    regulatoryReferences: ["TCPA", "FTC TSR"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "ev-enrollment",
    code: "REF · A.03 · ENRL",
    category: "Audit Evidence",
    title: "Enrollment Records",
    summary:
      "Application snapshot, carrier confirmation IDs, plan election, signature artifacts, and post-submission status events.",
    tags: ["enrollment", "carrier"],
    regulatoryReferences: ["CMS MCMG"],
    lastReviewed: "MMXXVI · III",
  },
  {
    id: "ev-compliance",
    code: "REF · A.04 · CMPL",
    category: "Audit Evidence",
    title: "Compliance Evidence",
    summary:
      "TPMO disclosure span, SOA form, voice verification, drug-list confirmation, plan-presentation timestamp, and required-language read-back.",
    tags: ["TPMO", "SOA", "voice-verification"],
    regulatoryReferences: ["CMS MCMG 40.2 / 40.10 / 70.5"],
    lastReviewed: "MMXXVI · IV",
  },
  {
    id: "ev-audit-ledger",
    code: "REF · A.05 · LEDGER",
    category: "Audit Evidence",
    title: "Audit Ledger",
    summary:
      "Append-only event log of every system action against the file: who accessed, what was viewed, what was exported, and which examiner received which shared link.",
    tags: ["ledger", "audit"],
    regulatoryReferences: ["HIPAA §164.312(b)", "SOC 2 CC7"],
    lastReviewed: "MMXXVI · IV",
  },
];

export function getEntriesByCategory(category: DirectoryCategory): DirectoryEntry[] {
  return directoryEntries.filter((e) => e.category === category);
}

export function getCategorySummary() {
  const grouped: Record<string, number> = {};
  for (const e of directoryEntries) {
    grouped[e.category] = (grouped[e.category] ?? 0) + 1;
  }
  return grouped;
}
