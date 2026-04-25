import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { integrations } from "@/content/integrations";

export function IntegrationsWall() {
  return (
    <section id="integrations" className="bg-paper-cream border-y border-ink">
      <SectionHeader
        index={8}
        eyebrow="INTEGRATIONS"
        title="Six counterparties, no logos."
        description="The platforms with which Brown & Sullivan transacts data: telephony, retention, enrollment, certification, submission, and licensing. Identified by their proper names, set in block letters, in the manner of a colophon."
        align="split"
      />
      <div className="container-grid pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-ink bg-paper">
          {integrations.map((p, i) => (
            <Link
              key={p.id}
              href={`/integrations#${p.id}`}
              className="group relative flex flex-col p-8 hover:bg-ink hover:text-paper-cream transition-colors block-press"
              style={{
                borderLeft:
                  i % 3 !== 0 ? "1px solid #0A0A0A" : undefined,
                borderTop: i >= 3 ? "1px solid #0A0A0A" : undefined,
              }}
            >
              <div className="ledger-sm mb-4">{p.code}</div>
              <div className="font-block uppercase text-[clamp(1.75rem,3vw,3rem)] leading-[0.9] tracking-block-tight">
                {p.display}
              </div>
              <div className="ledger-sm mt-3 opacity-70">
                CATEGORY · {p.category.toUpperCase()}
              </div>
              <p className="font-body text-sm leading-relaxed mt-5">
                {p.description}
              </p>
              <span
                aria-hidden="true"
                className="absolute bottom-4 right-4 h-2 w-2 bg-ink group-hover:bg-paper-cream"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
