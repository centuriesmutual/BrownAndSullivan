import Link from "next/link";
import { siteConfig } from "@/lib/nav";

const directory = [
  { label: "Compliance Artifacts", href: "/directory#artifacts" },
  { label: "Agent Registry", href: "/agents" },
  { label: "Carrier Catalog", href: "/directory#carrier-catalog" },
  { label: "Regulatory Framework", href: "/directory#regulatory-framework" },
  { label: "Script Library", href: "/scripts" },
  { label: "Audit Packages", href: "/audit" },
];

const compliance = [
  { label: "TCPA", href: "/compliance#tcpa" },
  { label: "CMS Marketing Rules", href: "/compliance#cms" },
  { label: "HIPAA", href: "/compliance#hipaa" },
  { label: "FTC TSR", href: "/compliance#tsr" },
  { label: "State DOI", href: "/compliance#doi" },
  { label: "SOC 2", href: "/compliance#soc2" },
];

const operations = [
  { label: "Telephony Bridge", href: "/integrations#ringcentral" },
  { label: "Box Sync", href: "/integrations#box" },
  { label: "Compliance Engine", href: "/compliance#engine" },
  { label: "Power Dialer", href: "/directory#operations" },
  { label: "Voice Verification", href: "/scripts#verification" },
  { label: "Live Transfer", href: "/directory#operations" },
];

const products = [
  { label: "Medicare Advantage", href: "/directory#carrier-catalog" },
  { label: "Medicare Part D", href: "/directory#carrier-catalog" },
  { label: "Medicare Supplement", href: "/directory#carrier-catalog" },
  { label: "ACA Marketplace", href: "/directory#carrier-catalog" },
  { label: "Dental & Vision", href: "/directory#carrier-catalog" },
];

const jurisdictions = [
  { label: "Texas (HQ)", href: "/about#jurisdictions" },
  { label: "Licensed States Index", href: "/agents#licensure" },
  { label: "Multi-State Filings", href: "/about#jurisdictions" },
  { label: "Carrier Appointments", href: "/agents#appointments" },
];

const firm = [
  { label: "About", href: "/about" },
  { label: "Agents", href: "/agents" },
  { label: "Contact", href: "/contact" },
  { label: "Integrations", href: "/integrations" },
];

interface FooterColumnProps {
  heading: string;
  items: { label: string; href: string }[];
}

function FooterColumn({ heading, items }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-ink">
        {heading}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {items.map((i) => (
          <li key={i.label}>
            <Link
              href={i.href}
              className="firm-link text-sm text-ink-wash"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-gray bg-white text-ink">
      <div className="container-grid py-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_2fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-body text-sm font-semibold uppercase tracking-[0.24em] text-ink transition-opacity hover:opacity-70"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-4 text-sm leading-6 text-ink-wash">
              Controlled compliance infrastructure for Medicare, ACA, and
              TCPA-governed distribution.
            </p>
            <div className="mt-6 ledger-sm">
              © 2026 · Brown &amp; Sullivan
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <FooterColumn heading="Directory" items={directory.slice(0, 4)} />
            <FooterColumn heading="Compliance" items={compliance.slice(0, 4)} />
            <FooterColumn heading="Operations" items={operations.slice(0, 4)} />
            <FooterColumn heading="Products" items={products.slice(0, 4)} />
            <FooterColumn heading="Jurisdictions" items={jurisdictions} />
            <FooterColumn heading="Firm" items={firm} />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-gray pt-6 text-xs text-ink-wash md:flex-row md:items-center md:justify-between">
          <p>
            Recordings and enrollment artifacts are maintained under CMS and TCPA
            retention schedules.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 ledger-sm">
            <span>{siteConfig.build}</span>
            <span>{siteConfig.lastAudit}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
