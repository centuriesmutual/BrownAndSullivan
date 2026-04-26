import Link from "next/link";
import type { DirectoryEntry } from "@/content/directory";
import { cn } from "@/lib/utils";

export function FilingExhibitRequestBlurb({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-ink bg-paper-cream/80">
      <div className="container-grid max-w-4xl py-8 lg:py-10">
        <p className="font-body text-sm leading-7 text-ink-wash lg:text-[15px] lg:leading-8">
          {children}
        </p>
        <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-ink/45">
          Use the request link on each entry or{" "}
          <Link
            href="/contactus"
            className="text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
          >
            contact the firm
          </Link>{" "}
          to name your organization, the jurisdiction, and the artifact you need
          for examination or file-building.
        </p>
      </div>
    </div>
  );
}

export function FilingExhibitList({ entries, startIndex = 1 }: { entries: DirectoryEntry[]; startIndex?: number }) {
  return (
    <ol className="container-grid list-none space-y-6 py-10">
      {entries.map((e, i) => (
        <li
          key={e.id}
          id={e.id}
          className="overflow-hidden rounded-xl border-2 border-ink shadow-sm"
        >
          <article
            className={cn(
              "p-6 md:p-8",
              i % 2 === 0 ? "bg-paper" : "bg-paper-cream/70"
            )}
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-10">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <span className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.12em] text-ink/55">
                    {e.code}
                  </span>
                  <span className="font-mono text-[0.6rem] tracking-[0.08em] text-ink/40">
                    REVIEWED · {e.lastReviewed}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-2xl font-medium leading-tight tracking-tight text-ink md:text-[1.75rem]">
                  <span className="mr-2 font-mono text-base font-medium text-ink/35">
                    {String(startIndex + i).padStart(2, "0")} ·
                  </span>
                  {e.title}
                </h2>
                <p className="mt-3 max-w-3xl font-body text-sm leading-relaxed text-ink-wash">
                  {e.summary}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-ink/70">
                  {e.regulatoryReferences.map((ref) => (
                    <span
                      key={ref}
                      className="inline-flex border border-ink/12 bg-white/50 px-2.5 py-1 font-mono"
                    >
                      {ref}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex shrink-0 flex-col sm:flex-row lg:flex-col">
                <Link
                  href="/contactus"
                  className="inline-flex items-center justify-center border-2 border-ink bg-ink px-4 py-2.5 text-center text-xs font-medium uppercase tracking-[0.1em] text-paper-cream transition hover:bg-paper-cream hover:text-ink"
                >
                  Request · forms · attestation
                </Link>
              </div>
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}
