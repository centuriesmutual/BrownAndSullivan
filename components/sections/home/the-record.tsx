import { SectionOpener } from "@/components/ui/section-opener";

interface RecordBlock {
  letter: string;
  code: string;
  title: string;
  body: string;
}

const blocks: RecordBlock[] = [
  {
    letter: "R",
    code: "EX · V.A · RECORDING",
    title: "The Recording",
    body: "Every consumer voice engagement is recorded. Each recording is hashed at capture, mirrored to compliance-grade archival storage within minutes of completion, indexed against the consumer's matter, and retained under a non-deletable retention policy for the period required by law.",
  },
  {
    letter: "E",
    code: "EX · V.B · EVIDENCE",
    title: "The Evidence Package",
    body: "Upon lawful request from a regulator, contracted carrier, or consumer, the firm produces a complete evidence package: the consumer's matter file, the consent record, the disclosure delivery confirmations, the recorded engagement, the verification segments, the application as submitted, the carrier confirmation, and the cryptographically-verifiable audit ledger covering every event in the engagement.",
  },
  {
    letter: "I",
    code: "EX · V.C · INTEGRITY",
    title: "The Integrity Verification",
    body: "Every event in the firm's audit ledger is hash-chained to the previous event. The integrity of any produced record may be verified against the live state of the firm's ledger as of the time of production, by any party to whom the firm has provided its public verification key.",
  },
];

export function TheRecord() {
  return (
    <section
      id="the-record"
      aria-labelledby="record-heading"
      className="border-b border-ink bg-paper"
    >
      <div className="section-y">
        <SectionOpener
          index={5}
          filingLabel="THE RECORD"
          title="The Record"
          description="The firm's evidentiary posture rests on three premises: every engagement is recorded, every record is producible on lawful demand, and every produced record is independently verifiable by the receiving party."
        />
        <div className="container-grid mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 border-2 border-ink bg-paper">
            {blocks.map((b, i) => (
              <article
                key={b.letter}
                className="relative p-7 lg:p-10 flex flex-col bg-paper hover:bg-ink hover:text-paper-cream transition-colors group"
                style={{
                  borderLeft:
                    i !== 0 ? "1.5px solid #0A0A0A" : undefined,
                }}
              >
                <header className="flex items-start justify-between gap-4 border-b border-current pb-4 mb-5">
                  <span className="ledger-sm">{b.code}</span>
                  <span aria-hidden="true" className="h-2 w-2 bg-current" />
                </header>
                <div
                  aria-hidden="true"
                  className="font-block text-[clamp(6rem,10vw,10rem)] leading-[0.78] mb-5"
                >
                  {b.letter}
                </div>
                <h3 className="font-display text-3xl leading-tight smcp tracking-wide mb-4">
                  {b.title}
                </h3>
                <p className="body-prose body-prose-wash group-hover:text-paper-cream">
                  {b.body}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute bottom-3 right-3 h-3 w-3 bg-ink group-hover:bg-paper-cream"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
