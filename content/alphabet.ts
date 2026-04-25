export interface AlphabetEntry {
  letter: string;
  label: string;
  href: string;
}

export const alphabet: AlphabetEntry[] = [
  { letter: "A", label: "Agent Registry · AHIP", href: "/agents" },
  { letter: "B", label: "Box.com Sync", href: "/integrations#box" },
  { letter: "C", label: "Compliance Engine · CMS", href: "/compliance#engine" },
  { letter: "D", label: "DNC · Directory · DOI", href: "/compliance#doi" },
  { letter: "E", label: "Evidence Package", href: "/audit#evidence" },
  { letter: "F", label: "FTC TSR · Formularies", href: "/compliance#tsr" },
  { letter: "G", label: "Governance", href: "/about#governance" },
  { letter: "H", label: "HIPAA · HealthSherpa", href: "/integrations#healthsherpa" },
  { letter: "I", label: "Integrations · Index", href: "/integrations" },
  { letter: "J", label: "Jurisdictions", href: "/about#jurisdictions" },
  { letter: "K", label: "Knowledge Base", href: "/directory" },
  { letter: "L", label: "Licensure · Leads", href: "/agents" },
  { letter: "M", label: "Medicare · MARx", href: "/directory#carrier-catalog" },
  { letter: "N", label: "NIPR · NPN", href: "/agents#nipr" },
  { letter: "O", label: "Operations", href: "/directory#operations" },
  { letter: "P", label: "Plan Catalog · Power Dialer", href: "/directory#carrier-catalog" },
  { letter: "Q", label: "Quality Assurance", href: "/audit#qa" },
  { letter: "R", label: "Retention · RingCentral", href: "/integrations#ringcentral" },
  { letter: "S", label: "Scripts · SOA · SOC 2", href: "/scripts" },
  { letter: "T", label: "TCPA · TPMO", href: "/compliance#tcpa" },
  { letter: "U", label: "Underwriting", href: "/directory#carrier-catalog" },
  { letter: "V", label: "Voice Verification", href: "/scripts#verification" },
  { letter: "W", label: "Witness Recordings", href: "/audit#evidence" },
  { letter: "X", label: "Cross-Sell Index", href: "/directory#lead-lifecycle" },
  { letter: "Y", label: "Year-End Audit", href: "/audit" },
  { letter: "Z", label: "Zone of Authority", href: "/about#jurisdictions" },
];
