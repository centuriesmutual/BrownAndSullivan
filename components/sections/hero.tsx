import { LinkButton } from "@/components/ui/button";
import { BlockTile } from "@/components/ui/block-tile";

const heroBlocks = [
  { letter: "T", label: "TCPA", variant: "ink" as const, code: "BLK · 01" },
  { letter: "C", label: "CMS", variant: "cream" as const, code: "BLK · 02" },
  { letter: "H", label: "HIPAA", variant: "cream" as const, code: "BLK · 03" },
  { letter: "F", label: "FTC TSR", variant: "ink" as const, code: "BLK · 04" },
  { letter: "D", label: "State DOI", variant: "ink" as const, code: "BLK · 05" },
  { letter: "S", label: "SOC 2", variant: "cream" as const, code: "BLK · 06" },
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-headline"
      className="relative border-b border-ink"
    >
      <div className="container-grid grid grid-cols-12 gap-x-6 gap-y-10 py-14 lg:py-20">
        {/* Left: Headline + body + CTAs (spans 7) */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
          <div className="ledger-sm flex items-center gap-3">
            <span className="h-2 w-2 bg-ink" aria-hidden="true" />
            <span>VOLUME · I · CHAPTER · I · THE READING ROOM</span>
          </div>
          <h1
            id="hero-headline"
            className="display-headline tracking-tight"
          >
            <span className="font-display italic font-normal">The </span>
            <span className="font-block tracking-block-tight uppercase">
              Compliance
            </span>
            <span className="font-display italic font-normal"> directory for </span>
            <span className="font-block tracking-block-tight uppercase">
              ACA
            </span>
            <span className="font-display italic font-normal"> &amp; </span>
            <span className="font-block tracking-block-tight uppercase">
              Medicare
            </span>
            <span className="font-display italic font-normal"> distribution.</span>
          </h1>
          <p className="font-body text-lg leading-relaxed text-ink-wash max-w-2xl">
            Brown &amp; Sullivan is the directory of record for an ACA and
            Medicare distribution call center: every call recording, every voice
            verification, every Scope of Appointment, every TPMO disclosure,
            every enrollment submission. Each artifact is sealed against
            modification, indexed against the lead, and made retrievable in the
            language of the examiner — TCPA, CMS, HIPAA, FTC, and the several
            States.
          </p>
          <p className="font-body text-base text-ink-wash max-w-2xl">
            We do not sell. We catalog. We retain. We authorize.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <LinkButton href="/directory" variant="primary" size="lg">
              Enter the Directory
              <span aria-hidden="true">→</span>
            </LinkButton>
            <LinkButton href="/contact" variant="ghost" size="lg">
              Request Counsel
            </LinkButton>
          </div>
          <div className="ledger-sm mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 opacity-70">
            <span>VOL · I · CH · I</span>
            <span aria-hidden="true">·</span>
            <span>FILED · MMXXVI · IV</span>
            <span aria-hidden="true">·</span>
            <span>CASE · NO · BS-COMP-001</span>
          </div>
        </div>

        {/* Right: 2x3 block grid (spans 5) */}
        <div className="col-span-12 lg:col-span-5">
          <div className="ledger-sm mb-3 flex items-center justify-between">
            <span>EXHIBIT · A · THE FRAMEWORKS</span>
            <span className="opacity-70">VI · BLOCKS</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-3">
            {heroBlocks.map((b) => (
              <BlockTile
                key={b.letter}
                letter={b.letter}
                label={b.label}
                caption={b.code}
                variant={b.variant}
                size="lg"
                href={`/compliance#${b.label.toLowerCase().replace(/\s/g, "-")}`}
              />
            ))}
          </div>
          <p className="font-display italic text-sm mt-3 text-ink-wash">
            "The blocks below are the load-bearing letters of regulated
            distribution. We catalog the rest."
          </p>
        </div>
      </div>
    </section>
  );
}
