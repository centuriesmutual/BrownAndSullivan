import { LinkButton } from "@/components/ui/button";

interface Admission {
  letter: string;
  authority: string;
  serif: string;
  variant: "ink" | "cream";
}

const admissions: Admission[] = [
  { letter: "C", authority: "CMS", serif: "CMS · Marketing Rules", variant: "ink" },
  { letter: "T", authority: "TCPA", serif: "TCPA · Written Consent", variant: "cream" },
  { letter: "H", authority: "HIPAA", serif: "HIPAA · Covered Entity", variant: "cream" },
  { letter: "F", authority: "FTC", serif: "FTC · Telemarketing Sales Rule", variant: "ink" },
  { letter: "D", authority: "DOI", serif: "DOI · State Insurance Departments", variant: "ink" },
  { letter: "S", authority: "SOC", serif: "SOC · 2 Type II", variant: "cream" },
];

export function LetterheadHero() {
  return (
    <section
      id="letterhead"
      aria-labelledby="letterhead-headline"
      className="border-b border-ink"
    >
      {/* Top strip — letterhead masthead */}
      <div className="border-b border-ink bg-paper-cream">
        <div className="container-grid py-3">
          <p className="ledger-sm flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-block tracking-block-tight">
              BROWN &amp; SULLIVAN
            </span>
            <span aria-hidden="true">·</span>
            <span>COUNSEL FOR REGULATED HEALTH INSURANCE DISTRIBUTION</span>
            <span aria-hidden="true">·</span>
            <span>TEXAS</span>
            <span aria-hidden="true">·</span>
            <span>LICENSED IN XXXVII STATES</span>
            <span aria-hidden="true">·</span>
            <span>TPMO</span>
            <span aria-hidden="true">·</span>
            <span>CMS-DISCLOSED</span>
          </p>
        </div>
      </div>

      {/* Body — 7/5 split */}
      <div className="container-grid section-y grid grid-cols-12 gap-x-8 gap-y-12">
        {/* Left — declaration */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-7">
          <span className="filing-index">I. PRACTICE OF THE FIRM</span>
          <h1
            id="letterhead-headline"
            className="display-letterhead font-display"
          >
            <span className="italic font-normal">A licensed practice in </span>
            <span className="font-block uppercase tracking-block-tight">
              Medicare
            </span>
            <span className="italic font-normal"> and </span>
            <span className="font-block uppercase tracking-block-tight">
              ACA
            </span>
            <span className="italic font-normal">
              {" "}
              health insurance distribution, conducted under the disciplines of
              compliance counsel.
            </span>
          </h1>
          <div className="flex flex-col gap-4 max-w-2xl">
            <p className="body-prose body-prose-wash">
              Brown &amp; Sullivan is a regulated distribution firm. Our agents
              are appointed, licensed, and certified. Our engagements are
              recorded. Our disclosures are delivered before any product is
              presented.
            </p>
            <p className="body-prose body-prose-wash">
              The record of every consumer interaction is retained for the
              period required by the Centers for Medicare &amp; Medicaid
              Services and the Telephone Consumer Protection Act, and produced
              on lawful demand.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <LinkButton href="/contact" variant="primary" size="lg">
              Request Counsel
              <span aria-hidden="true">→</span>
            </LinkButton>
            <LinkButton href="#notice" variant="ghost" size="lg">
              Read the Disclosures Below
            </LinkButton>
          </div>
        </div>

        {/* Right — Standing & Admissions card */}
        <aside
          aria-labelledby="standing-heading"
          className="col-span-12 lg:col-span-5 firm-card border-2 p-6 lg:p-8 bg-paper"
        >
          <header className="flex items-center justify-between border-b border-ink pb-4 mb-5">
            <h2
              id="standing-heading"
              className="font-display smcp text-2xl tracking-wide"
            >
              Standing &amp; Admissions
            </h2>
            <span aria-hidden="true" className="h-2 w-2 bg-ink" />
          </header>
          <ul className="grid grid-cols-2 gap-3">
            {admissions.map((a) => (
              <li key={a.authority} className="flex flex-col gap-2">
                <div
                  className={[
                    "relative aspect-square border-2 border-ink flex items-center justify-center",
                    a.variant === "ink"
                      ? "bg-ink text-paper-cream"
                      : "bg-paper-cream text-ink",
                  ].join(" ")}
                >
                  <span
                    aria-hidden="true"
                    className="font-block text-[clamp(2rem,4vw,3.25rem)] leading-[0.78]"
                  >
                    {a.letter}
                  </span>
                  <span className="sr-only">{a.authority}</span>
                  <span className="absolute top-1.5 left-2 stamp-label opacity-80">
                    {a.authority}
                  </span>
                </div>
                <p className="font-display italic text-[0.9rem] leading-snug">
                  {a.serif}
                </p>
              </li>
            ))}
          </ul>
          <footer className="mt-6 pt-4 border-t border-ink ledger-sm">
            ADMITTED · XXXVII STATES · NPN ON FILE · AHIP CURRENT
          </footer>
        </aside>
      </div>
    </section>
  );
}
