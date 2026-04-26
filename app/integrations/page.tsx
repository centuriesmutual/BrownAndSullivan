import { PageTitle } from "@/components/ui/page-title";
import { integrations } from "@/content/integrations";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "Integrations · Brown & Sullivan",
  description:
    "How the firm connects authorized carriers, enrollment channels, and training standards under contract, privilege, and applicable federal and state law.",
  path: "/integrations",
});

export default function IntegrationsPage() {
  return (
    <>
      <PageTitle
        volume={2}
        chapter={5}
        eyebrow="INTEGRATIONS"
        title="The counterparties to the file."
        subtitle="Brown & Sullivan operates through six counterparties. Each is bound by a Business Associate Agreement, a Data Processing Addendum, and a Recordkeeping Schedule. None of them sees more than the law and the contract require."
        meta={[`${integrations.length} · COUNTERPARTIES · CONTRACTED`]}
      />
      <section className="container-grid py-12">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-ink">
          {integrations.map((p, i) => (
            <li
              key={p.id}
              id={p.id}
              className="relative p-8 bg-paper hover:bg-paper-cream transition-colors"
              style={{
                borderLeft: i % 3 !== 0 ? "1px solid #0A0A0A" : undefined,
                borderTop: i >= 3 ? "1px solid #0A0A0A" : undefined,
              }}
            >
              <div className="ledger-sm mb-4">{p.code}</div>
              <div className="font-block uppercase text-[clamp(2rem,3.5vw,3.5rem)] leading-[0.86] tracking-block-tight">
                {p.display}
              </div>
              <div className="ledger-sm mt-3 opacity-70">
                CATEGORY · {p.category.toUpperCase()}
              </div>
              <p className="font-body text-base mt-5 leading-relaxed text-ink-wash">
                {p.description}
              </p>
              <ul className="mt-6 pt-4 border-t border-ink ledger-sm space-y-1 opacity-80">
                <li>· BAA · IN · FORCE</li>
                <li>· DPA · CURRENT</li>
                <li>· AUDIT · LEDGER · WIRED</li>
              </ul>
              <span
                aria-hidden="true"
                className="absolute bottom-3 right-3 h-2 w-2 bg-ink"
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
