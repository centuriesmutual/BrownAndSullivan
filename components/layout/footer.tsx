import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/nav";

const directory = [
  { label: "About Us", href: "/about" },
  { label: "Agent Registry", href: "/agents" },
  { label: "Carrier Catalog", href: "/directory#carrier-catalog" },
  { label: "Script Library", href: "/scripts" },
  { label: "Audit Packages", href: "/audit" },
  { label: "Compliance Artifacts", href: "/compliance-artifacts" },
];

const compliance = [
  { label: "TCPA", href: "/tcpa" },
  { label: "CMS", href: "/cms" },
  { label: "HIPAA", href: "/hipaa" },
  { label: "FTC TSR", href: "/ftc-tsr" },
  { label: "State DOI", href: "/compliance#doi" },
  { label: "SOC 2", href: "/compliance#soc2" },
];

const operations = [
  { label: "Do Not Sell", href: "/do-not-sell" },
  { label: "Box Sync", href: "/integrations#box" },
  { label: "Rewards", href: "/rewards" },
  { label: "Claims", href: "/claims" },
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
  { label: "Policy Directives", href: "/policy-directives" },
  { label: "Carrier Appointments", href: "/agents#appointments" },
];

const firm = [
  { label: "About", href: "/about" },
  { label: "Agents", href: "/agents" },
  { label: "Contact", href: "/contactus" },
  { label: "New Enrollment", href: "/new-enrollment" },
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
            <Image
              src="/footer-mark.svg"
              alt=""
              width={98}
              height={40}
              unoptimized
              className="mt-3 h-8 w-auto opacity-90"
            />
            <p className="mt-4 text-sm leading-6 text-ink-wash">
              Controlled compliance infrastructure for Medicare, ACA, and
              TCPA-governed distribution.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-ink-wash">
              <MapPin
                className="h-4 w-4 shrink-0 text-ink/70"
                aria-hidden
                strokeWidth={1.75}
              />
              <span>Lubbock, Texas</span>
            </p>
            <div className="mt-6 ledger-sm">
              © 2026 · Brown &amp; Sullivan
            </div>
            <div
              className="mt-6 flex aspect-[16/9] w-full max-w-sm items-center justify-center rounded-lg border border-dashed border-gray bg-paper-cream/80 text-center text-xs font-medium uppercase tracking-[0.12em] text-ink/40"
              role="img"
              aria-label="Image placeholder"
            >
              Image placeholder
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
