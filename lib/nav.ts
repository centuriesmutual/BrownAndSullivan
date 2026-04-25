export interface NavItem {
  letter: string;
  label: string;
  href: string;
  serif: string;
}

export const primaryNav: NavItem[] = [
  { letter: "D", label: "Directory", serif: "Directory", href: "/directory" },
  { letter: "C", label: "Compliance", serif: "Compliance", href: "/compliance" },
  { letter: "A", label: "Audit", serif: "Audit", href: "/audit" },
  { letter: "S", label: "Scripts", serif: "Scripts", href: "/scripts" },
  { letter: "I", label: "Integrations", serif: "Integrations", href: "/integrations" },
  { letter: "T", label: "Contact", serif: "Contact", href: "/contact" },
];

export const siteConfig = {
  name: "Brown & Sullivan",
  tagline: "Compliance Infrastructure for Regulated Distribution",
  established: "EST · MMXXV · TEXAS · LICENSED IN XXXVII STATES",
  reference: "REF · BS-COMP-001 · TCPA · CMS · HIPAA",
  build: "BUILD · BS.OS · v.MMXXVI.IV",
  lastAudit: "AUDIT · MMXXVI · IV · 12",
};
