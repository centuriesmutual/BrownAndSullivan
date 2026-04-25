import { LinkButton } from "@/components/ui/button";
import { SectionOpener } from "@/components/ui/section-opener";

export function Retainer() {
  return (
    <section
      id="retainer"
      aria-labelledby="retainer-heading"
      className="bg-paper-cream"
    >
      <div className="section-y">
        <SectionOpener
          index={8}
          filingLabel="RETAINER"
          title="The Retainer"
        />
        <div className="container-grid mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 border-2 border-ink bg-paper">
            {/* Left — closing line of a letter */}
            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col gap-6">
              <span className="ledger-sm">
                FROM · THE · DESK · OF · COUNSEL
              </span>
              <p className="font-display italic text-[clamp(1.5rem,2vw+0.5rem,2.25rem)] leading-snug">
                Brown &amp; Sullivan accepts a limited roster of consumer
                matters and a limited roster of regulated distribution clients
                each quarter.
              </p>
              <p className="body-prose body-prose-wash">
                Inquiries from licensed agents seeking appointment, carriers
                evaluating downstream distribution partners, and consumers
                seeking representation in Medicare or ACA matters are received
                by appointment. Each engagement begins with a written conflicts
                check and an executed engagement letter; nothing of substance
                is undertaken until both are on the record.
              </p>
              <ul className="ledger-sm flex flex-wrap items-center gap-x-4 gap-y-2 mt-2">
                <li>BY · APPOINTMENT · ONLY</li>
                <li aria-hidden="true">·</li>
                <li>UNDER · PRIVILEGE</li>
                <li aria-hidden="true">·</li>
                <li>WRITTEN · ENGAGEMENT · LETTER</li>
              </ul>
            </div>

            {/* Right — oversized REQUEST · APPOINTMENT block */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l-2 border-ink bg-ink text-paper-cream relative flex flex-col">
              <div className="px-6 py-4 ledger-sm flex items-center justify-between border-b border-paper-cream/30">
                <span>EXHIBIT · VIII · APPOINTMENT</span>
                <span className="opacity-70">REQ · 0001</span>
              </div>
              <LinkButton
                href="/contact"
                variant="primary"
                className="flex-1 h-auto p-8 lg:p-12 flex flex-col items-start justify-end text-left bg-ink text-paper-cream border-0 hover:bg-paper-cream hover:text-ink rounded-none"
              >
                <span
                  aria-hidden="true"
                  className="block font-block uppercase leading-[0.86] text-[clamp(3rem,7vw,6rem)] tracking-block-tight"
                >
                  REQUEST
                  <br />
                  APPOINTMENT
                </span>
                <span className="ledger-sm mt-6 opacity-80">
                  BY · APPOINTMENT · ONLY · M–F · 0900–1700 · CT
                </span>
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
