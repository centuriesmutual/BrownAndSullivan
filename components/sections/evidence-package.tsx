import { SectionHeader } from "@/components/ui/section-header";

const evidenceCards = [
  {
    code: "A.01",
    title: "Lead Profile",
    description:
      "Identity, source URL, consent text, IP, timestamp, jurisdiction, and demographic snapshot at the moment of capture.",
    stamp: "FILED · MMXXVI · IV",
  },
  {
    code: "A.02",
    title: "Communication Records",
    description:
      "Calls, SMS, email — two-channel recordings, transcripts, disposition codes, and agent identity.",
    stamp: "FILED · MMXXVI · IV",
  },
  {
    code: "A.03",
    title: "Enrollment Records",
    description:
      "Application snapshot, carrier confirmation, plan election, signature, and post-submission status events.",
    stamp: "FILED · MMXXVI · III",
  },
  {
    code: "A.04",
    title: "Compliance Evidence",
    description:
      "TPMO span, SOA form, voice verification, drug-list confirmation, and required-language read-back.",
    stamp: "FILED · MMXXVI · IV",
  },
  {
    code: "A.05",
    title: "Audit Ledger",
    description:
      "Append-only log of every access, view, export, and shared-link issuance against the file.",
    stamp: "FILED · MMXXVI · IV",
  },
];

export function EvidencePackage() {
  return (
    <section id="evidence-package" className="bg-paper border-y border-ink">
      <SectionHeader
        index={4}
        eyebrow="THE EVIDENCE PACKAGE"
        title="The shape of the file an examiner sees."
        description="Five compartments. Each is independently exportable. Each carries its own retention clock. Each is sealed at creation and watermarked at export."
        align="split"
        className="border-t-0"
      />
      <div className="container-grid pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-evidence-5 gap-0 border border-ink">
          {evidenceCards.map((c, i) => (
            <article
              key={c.code}
              className="relative p-6 pb-12 bg-paper-cream group hover:bg-ink hover:text-paper-cream transition-colors"
              style={{
                borderLeft: i === 0 ? "0" : "1px solid #0A0A0A",
              }}
            >
              <div className="ledger-sm mb-4 opacity-80">EXHIBIT · {c.code}</div>
              <div
                aria-hidden="true"
                className="font-block text-[3.5rem] leading-none mb-3"
              >
                {c.code.split(".")[1]}
              </div>
              <h3 className="font-display text-xl leading-tight mb-3">
                {c.title}
              </h3>
              <p className="font-body text-sm leading-relaxed">
                {c.description}
              </p>
              <span className="absolute bottom-3 left-6 stamp-mark text-[0.55rem]">
                {c.stamp}
              </span>
              <span
                aria-hidden="true"
                className="absolute top-3 right-3 h-2 w-2 bg-ink group-hover:bg-paper-cream"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
