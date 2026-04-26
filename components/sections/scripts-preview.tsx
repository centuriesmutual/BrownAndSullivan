import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { salesScripts } from "@/content/scripts";

export function ScriptsPreview() {
  return (
    <section id="scripts" className="bg-paper">
      <SectionHeader
        index={6}
        eyebrow="SCRIPTS LIBRARY"
        title="The book of approved language."
        description="Every word the agent is permitted to read, indexed and versioned. The script is the contract. The recording is the proof."
        align="split"
      />
      <div className="container-grid pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-ink">
          {salesScripts.map((s, i) => (
            <Link
              key={s.id}
              href={`/scripts#${s.id}`}
              className="group relative flex flex-col p-6 lg:p-7 bg-paper hover:bg-ink hover:text-paper-cream transition-colors border-ink"
              style={{
                borderLeft:
                  i % 3 !== 0 ? "1px solid #0A0A0A" : undefined,
                borderTop: i >= 3 ? "1px solid #0A0A0A" : undefined,
              }}
            >
              <div className="flex items-center justify-between mb-4 ledger-sm">
                <span>{s.code}</span>
                <span className="opacity-70">{s.version}</span>
              </div>
              <h3 className="font-display text-2xl leading-tight mb-3">
                {s.title}
              </h3>
              <p className="font-body text-sm leading-relaxed mb-6">
                {s.description}
              </p>
              <div className="mt-auto pt-4 border-t border-current ledger-sm flex items-center justify-between">
                <span>{s.domain.toUpperCase()}</span>
                <span className="font-medium tracking-wide opacity-80 group-hover:opacity-100">
                  VIEW · SCRIPT →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
