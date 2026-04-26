import Link from "next/link";
import { PageTitle } from "@/components/ui/page-title";
import { pageMetadata } from "@/lib/seo-metadata";
import { FirmSiteNav } from "@/components/firm/firm-site-nav";

export const metadata = pageMetadata({
  title: "Legal · Brown & Sullivan",
  description:
    "Legal notices, privilege, and general terms of use for brownandsullivan.example and communications with the firm.",
  path: "/legal",
});

const toc = [
  { id: "attorney-advertising" as const, label: "Attorney advertising" },
  { id: "no-attorney-client" as const, label: "No attorney—client" },
  { id: "confidential-information" as const, label: "Confidential information" },
  { id: "trademarks" as const, label: "Trademarks" },
  { id: "terms-of-service" as const, label: "Terms of service" },
  { id: "privacy-policy" as const, label: "Privacy policy" },
];

export default function LegalPage() {
  return (
    <>
      <PageTitle
        volume={4}
        chapter={3}
        eyebrow="LEGAL · NOTICES"
        title="Web site, mail, and the attorney-client line."
        subtitle={
          "Nothing on this site is an advertisement for or solicitation of business that would violate a State Bar rule, the Medicare Communications and Marketing Guidelines, or any carrier marketing policy. The firm is not a consumer-facing carrier or TPA; any engagement is opened on a written, conflicts-cleared basis."
        }
        meta={["PRIVILEGE · PRESERVED", "NO · OFFER · OF · BOND"]}
      />

      <FirmSiteNav current="legal" />

      <section className="border-b border-ink bg-paper-cream/50">
        <div className="container-grid section-y !pb-10">
          <p className="max-w-2xl font-body text-sm leading-relaxed text-ink-wash">
            This chapter is a single file. Use the table of contents to move
            through notices, then terms, then privacy. Related firm pages:{" "}
            <Link href="/about" className="text-ink underline decoration-ink/30 underline-offset-2">
              About Us
            </Link>
            ,{" "}
            <Link href="/contactus" className="text-ink underline decoration-ink/30 underline-offset-2">
              Help Desk
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="container-grid section-y !pt-0">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,14rem)_1fr] lg:gap-14">
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <nav
              aria-label="On this page"
              className="border border-ink bg-paper p-4"
            >
              <p className="ledger-sm mb-3 text-ink/70">IN · THIS · CHAPTER</p>
              <ol className="space-y-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink/85">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block border-b border-dashed border-ink/15 py-1.5 text-ink transition hover:border-ink/40 hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="min-w-0 space-y-0">
            <section
              id="attorney-advertising"
              className="scroll-mt-24 border-b border-ink/20 pb-10"
            >
              <h2 className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.16em] text-ink">
                Attorney advertising
              </h2>
              <p className="font-body leading-relaxed text-ink-wash">
                Jurisdictions in which the firm and its members are not admitted
                are not targeted by the statements on this site, except to the
                extent permitted for informational reference to the firm&rsquo;s
                services for national distribution clients. Past results or
                examples from the directory of record are not a promise of
                future outcomes in any particular matter.
              </p>
            </section>

            <section
              id="no-attorney-client"
              className="scroll-mt-24 border-b border-ink/20 py-10"
            >
              <h2 className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.16em] text-ink">
                No attorney—client relationship
              </h2>
              <p className="font-body leading-relaxed text-ink-wash">
                Using this site, sending a first email, or opening the
                engagement desk in your mail client does not form an
                attorney—client or agency relationship. A relationship, if
                any, requires a written agreement countersigned by counsel and
                a counterparty of record.
              </p>
            </section>

            <section
              id="confidential-information"
              className="scroll-mt-24 border-b border-ink/20 py-10"
            >
              <h2 className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.16em] text-ink">
                Confidential information
              </h2>
              <p className="font-body leading-relaxed text-ink-wash">
                Unencrypted email and standard web contact are not a substitute
                for a secure, privileged channel. Do not include protected
                health information, claim numbers, or non-public business plans
                in a first, unsecured message. For formal intake, use the{" "}
                <Link
                  href="/contactus"
                  className="text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
                >
                  contact of record
                </Link>
                . For enrollment intake described elsewhere, see{" "}
                <Link
                  href="/new-enrollment"
                  className="text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
                >
                  New enrollment
                </Link>
                .
              </p>
            </section>

            <section id="trademarks" className="scroll-mt-24 border-b border-ink/20 py-10">
              <h2 className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.16em] text-ink">
                Trademarks and rights
              </h2>
              <p className="text-sm leading-relaxed text-ink-wash">
                &ldquo;Brown &amp; Sullivan&rdquo; and related marks and
                materials are the property of the firm or its licensors unless
                otherwise stated. The directory reference codes and exhibit
                titles are working labels for a compliance practice, not a
                warranty of third-party system behavior.
              </p>
            </section>

            <section
              id="terms-of-service"
              className="scroll-mt-24 border-b border-ink/20 py-10"
            >
              <h2 className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.16em] text-ink">
                Terms of service
              </h2>
              <div className="max-w-3xl space-y-4 font-body text-sm leading-relaxed text-ink-wash">
                <p>
            This site is offered for information about the firm&rsquo;s
            compliance and distribution practice. You agree not to misuse
            contact paths, not to attempt unauthorized access to systems, and
            to use the materials only in line with the{" "}
            <Link
              href="/legal#attorney-advertising"
              className="text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
            >
              general notices
            </Link>{" "}
            above. The firm may update these terms; continued use after change
            constitutes acceptance of the revision then posted.
                </p>
              </div>
            </section>

            <section id="privacy-policy" className="scroll-mt-24 py-10">
              <h2 className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.16em] text-ink">
                Privacy policy
              </h2>
              <div className="max-w-3xl space-y-4 border border-ink/30 bg-paper-cream/40 p-5 font-body text-sm leading-relaxed text-ink-wash sm:p-6">
                <p>
            The firm does not sell personal information for value. Information
            you submit through firm-controlled channels is used to respond, to
            manage conflicts, and to meet legal and professional obligations.
            Recordings and enrollment artifacts, where they exist, are
            maintained under applicable CMS, HIPAA, and TCPA retention
            schedules as required for represented clients&rsquo; programs—not as
            a general consumer data practice for this site.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
