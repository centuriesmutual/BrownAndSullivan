import { LinkButton } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

export function CallToCounsel() {
  return (
    <section id="call-to-counsel" className="bg-paper-cream border-t border-ink">
      <SectionHeader
        index={10}
        eyebrow="CALL · TO · COUNSEL"
        title="A limited roster, accepted by the quarter."
        align="split"
      />
      <div className="container-grid pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-ink">
          <div className="lg:col-span-7 p-8 lg:p-12 bg-paper">
            <div className="ledger-sm mb-6">FROM · THE · DESK · OF · COUNSEL</div>
            <p className="font-display italic text-2xl leading-relaxed mb-5">
              Brown &amp; Sullivan accepts a limited roster of regulated
              distribution clients each quarter. We do not write coverage. We
              write the directory under which coverage is written, recorded,
              retained, and defended.
            </p>
            <p className="font-body text-base leading-relaxed text-ink-wash mb-4">
              Engagements begin with a forty-five minute conference of counsel,
              under privilege, in which we review the client's existing call
              flows, consent posture, retention schedule, and licensure
              footprint. A written assessment is delivered within ten business
              days. Implementation, when accepted, proceeds against a
              fixed-fee engagement letter.
            </p>
            <p className="font-body text-base leading-relaxed text-ink-wash mb-6">
              No engagement is accepted without a conflicts check, a written
              consent receipt, and the introduction of co-counsel where
              jurisdiction so requires.
            </p>
            <div className="ledger-sm flex flex-wrap items-center gap-x-5 gap-y-2 opacity-80">
              <span>RESPONSE · WITHIN · X · BUSINESS · DAYS</span>
              <span>·</span>
              <span>UNDER · PRIVILEGE</span>
              <span>·</span>
              <span>NO · OBLIGATION</span>
            </div>
          </div>

          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-ink bg-ink text-paper-cream relative flex flex-col">
            <div className="p-6 ledger-sm flex items-center justify-between border-b border-paper-cream/30">
              <span>EXHIBIT · CC · COUNSEL</span>
              <span className="opacity-70">REQ · 0001</span>
            </div>
            <LinkButton
              href="/contact"
              variant="primary"
              className="flex-1 h-auto p-8 lg:p-12 flex flex-col items-start justify-end text-left bg-ink text-paper-cream border-0 hover:bg-paper-cream hover:text-ink"
            >
              <span
                aria-hidden="true"
                className="block font-block uppercase leading-[0.86] text-[clamp(3.5rem,9vw,7rem)] tracking-block-tight"
              >
                REQUEST
                <br />
                COUNSEL
              </span>
              <span className="ledger-sm mt-6 opacity-80">
                CTRL/⌘ + ↵ · TO · DISPATCH
              </span>
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
