export type IntegrationCategory =
  | "Telephony"
  | "Retention"
  | "Enrollment"
  | "Certification"
  | "Submission"
  | "Licensing";

export interface Integration {
  id: string;
  code: string;
  name: string;
  display: string;
  category: IntegrationCategory;
  description: string;
}

export const integrations: Integration[] = [
  {
    id: "ringcentral",
    code: "INT · 01 · TEL",
    name: "RingCentral",
    display: "RINGCENTRAL",
    category: "Telephony",
    description:
      "Outbound and inbound voice, SMS, webhook subscriptions, recording capture, and live-transfer bridge into HealthSherpa for ACA enrollment.",
  },
  {
    id: "box",
    code: "INT · 02 · ARC",
    name: "Box.com",
    display: "BOX.COM",
    category: "Retention",
    description:
      "Compliance-grade archive for recordings, SOA forms, voice verifications, consent evidence, and signed enrollment artifacts — with retention policies and metadata templates.",
  },
  {
    id: "healthsherpa",
    code: "INT · 03 · ENR",
    name: "HealthSherpa",
    display: "HEALTHSHERPA",
    category: "Enrollment",
    description:
      "ACA Marketplace enrollment platform: QHP catalog, APTC calculation, network and formulary lookup, and CMS submission via EDE.",
  },
  {
    id: "ahip",
    code: "INT · 04 · CRT",
    name: "AHIP",
    display: "AHIP",
    category: "Certification",
    description:
      "Annual AHIP Medicare certification and product-specific carrier training — gated at the dialer when the agent is not current for the plan year.",
  },
  {
    id: "cms-marx",
    code: "INT · 05 · SUB",
    name: "CMS MARx",
    display: "CMS · MARX",
    category: "Submission",
    description:
      "CMS Medicare beneficiary database for enrollment submission, eligibility verification, and post-submission status reconciliation.",
  },
  {
    id: "state-nipr",
    code: "INT · 06 · LIC",
    name: "State NIPR",
    display: "STATE · NIPR",
    category: "Licensing",
    description:
      "National Insurance Producer Registry — nightly reconciliation of producer state license status, line of authority, and renewal dates by NPN.",
  },
];
