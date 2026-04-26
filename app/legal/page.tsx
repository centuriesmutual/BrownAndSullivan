import Link from "next/link";
import { PageTitle } from "@/components/ui/page-title";

export const metadata = {
  title: "Legal · Brown & Sullivan",
  description:
    "Legal notices, privilege, and general terms of use for brownandsullivan.example and communications with the firm.",
};

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

      <section className="container-grid border-b border-ink py-12">
        <div className="grid max-w-3xl gap-6 font-body leading-relaxed text-ink-wash">
          <p>
            <span className="font-medium text-ink">Attorney advertising.</span>{" "}
            Jurisdictions in which the firm and its members are not admitted
            are not targeted by the statements on this site, except to the
            extent permitted for informational reference to the firm&rsquo;s
            services for national distribution clients. Past results or
            examples from the directory of record are not a promise of
            future outcomes in any particular matter.
          </p>
          <p>
            <span className="font-medium text-ink">No attorney—client
            relationship.</span> Using this site, sending a first email, or
            opening the engagement desk in your mail client does not form an
            attorney—client or agency relationship. A relationship, if any,
            requires a written agreement countersigned by counsel and a
            counterparty of record.
          </p>
          <p>
            <span className="font-medium text-ink">Confidential
            information.</span> Unencrypted email and standard web contact are
            not a substitute for a secure, privileged channel. Do not
            include protected health information, claim numbers, or
            non-public business plans in a first, unsecured message. For
            formal intake, use the{" "}
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
          <p className="text-sm">
            <span className="font-medium text-ink">Trademarks and rights.</span>{" "}
            &ldquo;Brown &amp; Sullivan&rdquo; and related marks and materials
            are the property of the firm or its licensors unless otherwise
            stated. The directory reference codes and exhibit titles are
            working labels for a compliance practice, not a warranty of
            third-party system behavior.
          </p>
        </div>
      </section>

      <section
        id="terms-of-service"
        className="container-grid scroll-mt-24 border-b border-ink py-12"
      >
        <h2 className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.16em] text-ink">
          Terms of service
        </h2>
        <div className="grid max-w-3xl gap-4 font-body text-sm leading-relaxed text-ink-wash">
          <p>
            This site is offered for information about the firm&rsquo;s
            compliance and distribution practice. You agree not to misuse
            contact paths, not to attempt unauthorized access to systems, and
            to use the materials only in line with the{" "}
            <Link
              href="/legal"
              className="text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
            >
              general notices
            </Link>{" "}
            above. The firm may update these terms; continued use after change
            constitutes acceptance of the revision then posted.
          </p>
        </div>
      </section>

      <section
        id="privacy-policy"
        className="container-grid scroll-mt-24 border-b border-ink py-12"
      >
        <h2 className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.16em] text-ink">
          Privacy policy
        </h2>
        <div className="grid max-w-3xl gap-4 font-body text-sm leading-relaxed text-ink-wash">
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
    </>
  );
}
