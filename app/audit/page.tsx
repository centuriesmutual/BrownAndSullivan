import { PageTitle } from "@/components/ui/page-title";
import { LinkButton } from "@/components/ui/button";
import { toRoman } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "Audit · Brown & Sullivan",
  description:
    "The Audit & Evidence Package workflow. From request to delivery in a sealed, watermark-stamped, examiner-grade file.",
  path: "/audit",
});

const steps = [
  {
    title: "Receipt of Request",
    body: "Examiner inquiry is logged, jurisdiction confirmed, and scope of authority verified against the requesting body's enabling statute.",
  },
  {
    title: "Scope Drafting",
    body: "Counsel drafts a written scope of production: lead universe, date range, product line, and evidence categories — circulated under privilege.",
  },
  {
    title: "Privilege Review",
    body: "Records are run against the litigation hold matrix. Privileged or third-party-protected items are withheld with a privilege log.",
  },
  {
    title: "Evidence Pack Assembly",
    body: "The five-compartment Evidence Package is assembled directly from the directory: lead, communications, enrollment, compliance, ledger.",
  },
  {
    title: "Watermark & Seal",
    body: "Each artifact is watermark-stamped with the matter number, examiner identity, and time of production. Recordings are sealed.",
  },
  {
    title: "Delivery",
    body: "A time-bounded Box.com shared link is issued. Access is logged to the audit ledger. Counsel is copied on every request.",
  },
  {
    title: "Post-Production Review",
    body: "Counsel and the client conduct a written debrief; remediation items, if any, are entered against the firm's annual program review.",
  },
];

const evidence = [
  { code: "A.01", title: "Lead Profile" },
  { code: "A.02", title: "Communication Records" },
  { code: "A.03", title: "Enrollment Records" },
  { code: "A.04", title: "Compliance Evidence" },
  { code: "A.05", title: "Audit Ledger" },
];

export default function AuditPage() {
  return (
    <>
      <PageTitle
        volume={2}
        chapter={3}
        eyebrow="AUDIT · & · EVIDENCE"
        title="The file an examiner sees."
        subtitle="The Audit Workflow takes a regulator's inquiry and answers it with a sealed, indexed, watermark-stamped Evidence Package — pulled directly from the directory, not assembled by hand."
        meta={["7 · STAGES", "5 · COMPARTMENTS", "10 · YEAR · RETENTION"]}
      />

      <section id="evidence" className="container-grid py-14 border-t border-ink">
        <div className="grid grid-cols-12 gap-x-6 gap-y-6 items-end mb-8">
          <div className="col-span-12 lg:col-span-4">
            <div className="ledger-sm mb-2">EXHIBIT · A · 01–05</div>
            <h2 className="display-headline-sm">The five compartments.</h2>
          </div>
          <p className="col-span-12 lg:col-span-8 font-body text-ink-wash leading-relaxed max-w-2xl">
            Every Evidence Package contains the same five compartments. Each is
            independently exportable. Each carries its own retention clock.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-ink">
          {evidence.map((e, i) => (
            <li
              key={e.code}
              className="relative p-6 pb-12 bg-paper-cream"
              style={{
                borderLeft: i !== 0 ? "1px solid #0A0A0A" : undefined,
              }}
            >
              <div className="ledger-sm mb-3">EX · {e.code}</div>
              <div className="font-block text-[3rem] leading-none mb-3">
                {e.code.split(".")[1]}
              </div>
              <div className="font-display text-xl">{e.title}</div>
              <span className="absolute bottom-3 left-6 stamp-mark text-[0.55rem]">
                FILED · MMXXVI · IV
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section id="qa" className="bg-paper-cream border-t border-ink py-14">
        <div className="container-grid grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 lg:col-span-4">
            <div className="ledger-sm mb-2">VII · STAGES · OF · PRODUCTION</div>
            <h2 className="display-headline-sm">The audit workflow.</h2>
          </div>
          <ol className="col-span-12 lg:col-span-8 border border-ink bg-paper">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="grid grid-cols-[6rem_1fr] gap-6 px-6 py-6 border-b last:border-b-0 border-ink"
              >
                <div className="flex flex-col items-start">
                  <span className="font-display text-3xl roman">
                    {toRoman(i + 1)}
                  </span>
                  <span className="ledger-sm mt-1 opacity-70">
                    STAGE · {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="font-body text-base text-ink-wash mt-2 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-grid py-14">
        <div className="border border-ink p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-paper-cream">
          <div className="lg:col-span-8">
            <div className="ledger-sm mb-3">REQUEST · AN · EXAMINER · LINK</div>
            <h3 className="display-headline-sm mb-3">
              Counsel will issue a time-bounded link.
            </h3>
            <p className="font-body text-ink-wash max-w-2xl">
              State DOI, CMS, OCR, FTC, and private examiners with a written
              authority of inquiry may request a Brown &amp; Sullivan Evidence
              Package. Production proceeds under privilege and against a written
              scope of production.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <LinkButton href="/contact" variant="primary" size="lg">
              Request Audit Link →
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
