import { LibraryCard } from "@/components/ui/library-card";
import { SectionHeader } from "@/components/ui/section-header";

const indexCards = [
  {
    code: "REF · 384.6 · TCPA",
    title: "Compliance Artifacts",
    summary:
      "Call recordings, voice verifications, consent evidence, SOA forms, and TPMO disclosures — every one indexed and sealed.",
    metadata: [
      "TWO-CHANNEL · CARRIER · GRADE",
      "SEALED · AT · DISCONNECT",
      "10-YEAR · CMS · RETENTION",
    ],
    reviewed: "MMXXVI · IV",
  },
  {
    code: "REF · 411.0 · NPN",
    title: "Agent Registry",
    summary:
      "Producer licensure by state and line of authority, NPN, AHIP cycle, carrier appointments, and writing numbers.",
    metadata: [
      "NIPR · NIGHTLY · RECONCILED",
      "AHIP · CYCLE · GATED",
      "DOI · STATE · APPOINTED",
    ],
    reviewed: "MMXXVI · IV",
  },
  {
    code: "REF · 510.0 · CARRIER",
    title: "Carrier & Plan Catalog",
    summary:
      "Medicare Advantage, Part D, Medsupp, and ACA Marketplace contracts with formularies, networks, and SBCs.",
    metadata: [
      "MAPD · PBP · INDEXED",
      "PDP · FORMULARY · MAPPED",
      "QHP · APTC · ELIGIBLE",
    ],
    reviewed: "MMXXVI · I",
  },
  {
    code: "REF · 600.0 · REG",
    title: "Regulatory Framework",
    summary:
      "TCPA, CMS Marketing Rules, HIPAA, FTC TSR, and the several State DOI regimes governing every outbound contact.",
    metadata: [
      "47 · USC · §227",
      "42 · CFR · §422.2260",
      "16 · CFR · §310",
    ],
    reviewed: "MMXXVI · IV",
  },
];

export function TheIndex() {
  return (
    <section
      id="the-index"
      aria-labelledby="the-index-heading"
      className="bg-paper"
    >
      <SectionHeader
        index={2}
        eyebrow="THE INDEX"
        title="What we catalog"
        description="Four registers — bound, indexed, and accessible to counsel and examiners on demand. The Brown & Sullivan Directory is organized after the manner of a card catalog, not a search engine."
        align="split"
      />
      <div className="container-grid">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-library-card gap-0 border-x border-b border-ink"
          style={{ gridAutoRows: "minmax(280px, auto)" }}
        >
          {indexCards.map((c, i) => (
            <div
              key={c.title}
              className="border-r last:border-r-0 border-t lg:border-t-0 border-ink first:border-t-0 sm:border-t-0"
            >
              <LibraryCard
                code={c.code}
                title={c.title}
                summary={c.summary}
                metadata={c.metadata}
                reviewed={c.reviewed}
                className="h-full border-0 bg-paper hover:bg-ink"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
