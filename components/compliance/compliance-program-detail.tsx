import Link from "next/link";
import { PageTitle } from "@/components/ui/page-title";
import type { ComplianceProgram } from "@/content/compliance-programs";

export function ComplianceProgramDetail({ program }: { program: ComplianceProgram }) {
  return (
    <>
      <PageTitle
        volume={2}
        chapter={2}
        eyebrow={program.code}
        title={program.title}
        subtitle={
          "Primary citations: " +
          program.citation +
          ". The bullets below are how the firm has encoded this program into operating controls, evidence classes, and dialer policy—not legal advice, and not a substitute for the underlying statute or rule text."
        }
        meta={["PROGRAM · DETAIL", "COMPLIANCE · PERIMETER"]}
      />
      <section className="border-b border-ink bg-paper py-14">
        <div className="container-grid grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 lg:col-span-4">
            <div className="font-block text-[clamp(5rem,10vw,10rem)] uppercase leading-[0.78]">
              {program.letter}
            </div>
            <div className="ledger-sm mt-4 opacity-70">{program.citation}</div>
          </div>
          <div className="col-span-12 flex flex-col gap-5 lg:col-span-8">
            <ul className="max-w-3xl space-y-3 font-body text-base leading-relaxed text-ink-wash">
              {program.body.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 bg-ink"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2 text-sm text-ink-wash">
              <Link
                href="/compliance"
                className="font-medium text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
              >
                All compliance programs
              </Link>
              <span className="mx-2 text-ink/30">·</span>
              <Link
                href="/contactus"
                className="font-medium text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
              >
                Contact the firm
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
