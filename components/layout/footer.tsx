import Link from "next/link";
import { siteConfig } from "@/lib/nav";
import { alphabet } from "@/content/alphabet";

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
  { label: "Counsel", href: "/contact" },
  { label: "Careers", href: "/about#careers" },
  { label: "Press", href: "/about#press" },
  { label: "Contact", href: "/contact" },
  { label: "Request Audit", href: "/audit" },
];

const referenceCodes = [
  "ISO · 27001",
  "SOC · 2 · TYPE · II",
  "HIPAA · COVERED · ENTITY",
  "CMS · TPMO · DISCLOSED",
  "TCPA · WRITTEN · CONSENT",
  "FTC · TSR · COMPLIANT",
  "NAIC · PRODUCER · LICENSED",
];

interface FooterColumnProps {
  area: string;
  heading: string;
  items: { label: string; href: string }[];
}

function FooterColumn({ area, heading, items }: FooterColumnProps) {
  return (
    <div className={`area-${area}`}>
      <h3 className="ledger mb-4 pb-3 border-b border-ink">{heading}</h3>
      <ul className="flex flex-col gap-2">
        {items.map((i) => (
          <li key={i.label}>
            <Link
              href={i.href}
              className="font-body text-sm hover:bg-ink hover:text-paper-cream px-1 -mx-1 inline-block"
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
    <footer className="bg-paper-cream text-ink border-t border-ink mt-16">
      <div className="container-grid grid grid-areas-footer gap-x-8 gap-y-12 py-14">
        {/* Zone A — Wordmark restatement */}
        <div className="area-wordmark border-y border-ink py-6">
          <div className="font-block uppercase tracking-block-tight leading-[0.86] text-[clamp(3rem,12vw,12rem)] flex items-center justify-between gap-4 flex-wrap">
            <span>BROWN</span>
            <span className="font-display italic font-normal lowercase tracking-normal text-[0.4em]">
              &amp;
            </span>
            <span>SULLIVAN</span>
          </div>
        </div>

        {/* Zone B — Six-column directory */}
        <FooterColumn area="directory" heading="DIRECTORY" items={directory} />
        <FooterColumn area="compliance" heading="COMPLIANCE" items={compliance} />
        <FooterColumn area="operations" heading="OPERATIONS" items={operations} />
        <FooterColumn area="products" heading="PRODUCTS" items={products} />
        <FooterColumn
          area="jurisdictions"
          heading="JURISDICTIONS"
          items={jurisdictions}
        />
        <FooterColumn area="firm" heading="THE FIRM" items={firm} />

        {/* Zone C — Reference strip */}
        <div className="area-reference border-y border-ink py-3">
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 ledger-sm">
            {referenceCodes.map((c, i) => (
              <li key={c} className="flex items-center gap-3">
                {i > 0 ? (
                  <span aria-hidden="true" className="opacity-60">
                    ·
                  </span>
                ) : null}
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Zone D — Letter Block Index (A–Z) */}
        <div className="area-alphabet">
          <div className="ledger-sm mb-3 flex items-center gap-3">
            <span>ALPHABETICAL · INDEX</span>
            <span aria-hidden="true" className="h-px flex-1 bg-ink/40" />
            <span className="opacity-70">A → Z</span>
          </div>
          <ul className="grid gap-1 [grid-template-columns:repeat(13,minmax(0,1fr))] lg:[grid-template-columns:repeat(26,minmax(0,1fr))]">
            {alphabet.map((a) => (
              <li key={a.letter}>
                <Link
                  href={a.href}
                  aria-label={`${a.letter} — ${a.label}`}
                  title={`${a.letter} — ${a.label}`}
                  className="group relative flex items-center justify-center aspect-square border border-ink bg-paper text-ink hover:bg-ink hover:text-paper-cream block-press"
                >
                  <span className="font-block text-xl">{a.letter}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-1 ledger-sm opacity-80">
            {alphabet.slice(0, 12).map((a) => (
              <li key={`legend-${a.letter}`} className="truncate">
                {a.letter} · {a.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Zone E — Colophon */}
        <div className="area-colophon border-t border-ink pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="ledger-sm">
            © MMXXVI · BROWN &amp; SULLIVAN · ALL RIGHTS RESERVED
          </div>
          <p className="font-display italic text-sm text-ink-wash leading-relaxed">
            The Brown &amp; Sullivan Compliance Directory does not constitute
            legal advice. Recordings and enrollment artifacts are maintained per
            CMS and TCPA retention schedules. Counsel is available to existing
            clients of record only.
          </p>
          <div className="ledger-sm md:text-right flex flex-col gap-1">
            <span>{siteConfig.build}</span>
            <span>{siteConfig.lastAudit}</span>
            <Link
              href="/compliance"
              className="underline underline-offset-4 decoration-1 hover:bg-ink hover:text-paper-cream px-1 inline-block w-fit md:ml-auto"
            >
              VIEW · COMPLIANCE · POSTURE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
