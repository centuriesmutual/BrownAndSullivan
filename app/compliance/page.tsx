import { PageTitle } from "@/components/ui/page-title";
import { BlockTile } from "@/components/ui/block-tile";
import { compliancePrograms } from "@/content/compliance-programs";

const programs = compliancePrograms;

const programStandPageHref: Record<string, string> = {
  tcpa: "/tcpa",
  cms: "/cms",
  hipaa: "/hipaa",
  tsr: "/ftc-tsr",
};

export const metadata = {
  title: "Compliance · Brown & Sullivan",
  description:
    "TCPA, CMS, HIPAA, FTC TSR, State DOI, and SOC 2 — the regulatory perimeter under which the firm operates.",
};

export default function CompliancePage() {
  return (
    <>
      <PageTitle
        volume={2}
        chapter={2}
        eyebrow="THE COMPLIANCE PROGRAM"
        title="The perimeter under which we operate."
        subtitle="Six programs, no exceptions. Each is a separate body of law and each issues its own evidence. Brown & Sullivan organizes these into a single, indexable directory so that a question from any examiner returns the same answer."
        meta={["6 · PROGRAMS · ACTIVE", "AUDIT · MMXXVI · IV"]}
      />

      <section className="container-grid py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {programs.map((p) => (
          <BlockTile
            key={p.id}
            letter={p.letter}
            label={p.title.split(" ")[0] ?? p.id.toUpperCase()}
            caption={p.code}
            href={programStandPageHref[p.id] ?? `#${p.id}`}
            variant={p.id === "tcpa" || p.id === "tsr" || p.id === "soc2" ? "ink" : "cream"}
            size="md"
          />
        ))}
      </section>

      {programs.map((p) => (
        <section
          key={p.id}
          id={p.id}
          className="border-t border-ink py-14 bg-paper [&:nth-child(even)]:bg-paper-cream"
        >
          <div className="container-grid grid grid-cols-12 gap-x-6 gap-y-8">
            <div className="col-span-12 lg:col-span-4">
              <div className="ledger-sm mb-4">{p.code}</div>
              <div className="font-block uppercase text-[clamp(6rem,12vw,12rem)] leading-[0.78]">
                {p.letter}
              </div>
              <div className="ledger-sm mt-3 opacity-70">{p.citation}</div>
            </div>
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-5">
              <h2 className="display-headline-sm">{p.title}</h2>
              <ul className="font-body text-base text-ink-wash leading-relaxed space-y-3 max-w-3xl">
                {p.body.map((b) => (
                  <li key={b} className="flex gap-3 items-start">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 bg-ink shrink-0"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section
        id="engine"
        className="border-t border-ink bg-ink text-paper-cream py-14"
      >
        <div className="container-grid grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 lg:col-span-4 ledger-sm">
            <div>EXHIBIT · CE · ENGINE</div>
            <div className="opacity-80 mt-2">SIGNED · TOKENS · ONLY</div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2 className="display-headline-sm text-paper-cream">
              The Compliance Engine.
            </h2>
            <p className="font-body text-base mt-4 max-w-2xl leading-relaxed">
              The Engine collapses six bodies of law into a single decision: a
              signed token, issued or refused, in the moment before dial. No
              token, no call. No exceptions, no judgment calls, no humans in
              the loop.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
