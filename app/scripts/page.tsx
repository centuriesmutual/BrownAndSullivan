import { PageTitle } from "@/components/ui/page-title";
import { salesScripts, type ScriptDomain } from "@/content/scripts";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "Scripts Library · Brown & Sullivan",
  description:
    "Versioned, regulator-ready sales scripts for ACA Marketplace and Medicare distribution.",
  path: "/scripts",
});

const domains: ScriptDomain[] = ["ACA", "Medicare", "Compliance", "Verification"];

export default function ScriptsPage() {
  return (
    <>
      <PageTitle
        volume={2}
        chapter={4}
        eyebrow="SCRIPTS · LIBRARY"
        title="The book of approved language."
        subtitle="Every word the agent is permitted to read, indexed and versioned. Each entry below is canonical, regulator-ready, and binding upon the agent at the moment the recording opens."
        meta={[`${salesScripts.length} · SCRIPTS · APPROVED`, "VERSIONED · TBD"]}
      />

      {domains.map((d) => {
        const items = salesScripts.filter((s) => s.domain === d);
        if (!items.length) return null;
        return (
          <section
            key={d}
            id={d.toLowerCase()}
            className="border-t border-ink py-12 bg-paper [&:nth-child(even)]:bg-paper-cream"
          >
            <div className="container-grid grid grid-cols-12 gap-x-6 gap-y-8">
              <div className="col-span-12 lg:col-span-3">
                <div className="ledger-sm mb-2">DOMAIN · {d.toUpperCase()}</div>
                <h2 className="display-headline-sm">{d}</h2>
              </div>
              <ul className="col-span-12 lg:col-span-9 border border-ink">
                {items.map((s, i) => (
                  <li
                    key={s.id}
                    id={s.id}
                    className={`p-6 lg:p-8 grid grid-cols-12 gap-x-6 gap-y-3 ${
                      i !== 0 ? "border-t border-ink" : ""
                    } bg-paper hover:bg-paper-cream transition-colors`}
                  >
                    <div className="col-span-12 md:col-span-3 ledger-sm">
                      <div>{s.code}</div>
                      <div className="opacity-70 mt-1">{s.version}</div>
                      <div className="opacity-70 mt-1">
                        APPROVED · {s.lastApproved}
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <h3 className="font-display text-2xl leading-tight mb-1">
                        {s.title}
                      </h3>
                      <p className="font-body text-sm text-ink-wash leading-relaxed">
                        {s.description}
                      </p>
                      <div className="font-mono text-[0.6875rem] text-ink-wash mt-3 break-all">
                        {s.id}
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-3">
                      <div className="ledger-sm mb-2">REQUIRED · ELEMENTS</div>
                      <ul className="font-body text-sm leading-relaxed">
                        {s.required.map((r) => (
                          <li key={r} className="flex gap-2 items-start">
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1 w-1 bg-ink shrink-0"
                            />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      <section
        id="voice-verification"
        className="border-t border-ink bg-ink text-paper-cream py-14"
      >
        <div className="container-grid grid grid-cols-12 gap-x-6 gap-y-6">
          <div className="col-span-12 lg:col-span-4 ledger-sm">
            <div>EXHIBIT · VV · VERIFICATION</div>
            <div className="opacity-80 mt-2">
              CAPTURED · AS · DISCRETE · ARTIFACT
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2 className="display-headline-sm text-paper-cream">
              On voice verification.
            </h2>
            <p className="font-body text-base mt-4 max-w-2xl leading-relaxed">
              The Voice Verification artifact is captured as a separately
              addressable evidence object — distinct from the parent recording
              — so that an examiner can be served the verification alone, under
              its own watermark, without exposing the remainder of the call.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
