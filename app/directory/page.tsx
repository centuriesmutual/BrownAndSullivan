import { PageTitle } from "@/components/ui/page-title";
import { LibraryCard } from "@/components/ui/library-card";
import {
  directoryEntries,
  type DirectoryCategory,
} from "@/content/directory";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "Directory · Brown & Sullivan",
  description:
    "The compliance directory of artifacts, agents, carriers, regulatory frameworks, operations, retention, authorization, and audit evidence.",
  path: "/directory",
});

const order: DirectoryCategory[] = [
  "Compliance Artifacts",
  "Agent Registry",
  "Carrier & Plan Catalog",
  "Regulatory Framework",
  "Operations",
  "Retention",
  "Authorization",
  "Lead Lifecycle",
  "Audit Evidence",
];

const sectionAnchorByCategory: Record<DirectoryCategory, string> = {
  "Compliance Artifacts": "artifacts",
  "Agent Registry": "agent-registry",
  "Carrier & Plan Catalog": "carrier-catalog",
  "Regulatory Framework": "regulatory-framework",
  Operations: "operations",
  Retention: "retention",
  Authorization: "authorization",
  "Lead Lifecycle": "lead-lifecycle",
  Scripts: "scripts",
  "Audit Evidence": "evidence",
};

export default function DirectoryPage({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  const q = (searchParams?.q ?? "").toLowerCase().trim();
  const filtered = q
    ? directoryEntries.filter((e) =>
        [e.title, e.summary, e.code, ...e.tags].join(" ").toLowerCase().includes(q)
      )
    : directoryEntries;

  return (
    <>
      <PageTitle
        volume={2}
        chapter={1}
        eyebrow="THE DIRECTORY"
        title="Browse the catalog of record."
        subtitle="The Brown & Sullivan Directory is organized after the manner of a card catalog. Each entry carries a Dewey-style reference code, a serif title, a brief summary, regulatory citations, and a date of last review."
        meta={[
          `${directoryEntries.length} · ENTRIES · INDEXED`,
          q ? `FILTER · ${q.toUpperCase()}` : "ALL · CATEGORIES",
        ]}
      />

      <div className="container-grid py-10">
        <form
          action="/directory"
          method="get"
          className="catalog-search border-b border-ink mb-10"
        >
          <label htmlFor="dir-q" className="sr-only">
            Search the directory
          </label>
          <input
            id="dir-q"
            type="search"
            name="q"
            defaultValue={q}
            placeholder="SEARCH · BY · TITLE · CODE · TAG · CITATION"
          />
        </form>
      </div>

      {order.map((cat) => {
        const items = filtered.filter((e) => e.category === cat);
        if (!items.length) return null;
        const anchor = sectionAnchorByCategory[cat];
        return (
          <section
            key={cat}
            id={anchor}
            className="border-t border-ink py-12 bg-paper [&:nth-child(even)]:bg-paper-cream"
          >
            <div className="container-grid grid grid-cols-12 gap-x-6 gap-y-8">
              <div className="col-span-12 md:col-span-3 flex flex-col gap-3">
                <span className="ledger-sm">CATEGORY · {anchor.toUpperCase()}</span>
                <h2 className="display-headline-sm">{cat}</h2>
                <span className="ledger-sm opacity-70">
                  {items.length} · ENTRIES
                </span>
              </div>
              <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 border border-ink">
                {items.map((e, i) => (
                  <div
                    key={e.id}
                    style={{
                      borderLeft: i % 3 !== 0 ? "1px solid #0A0A0A" : undefined,
                      borderTop: i >= 3 ? "1px solid #0A0A0A" : undefined,
                    }}
                  >
                    <LibraryCard
                      code={e.code}
                      title={e.title}
                      summary={e.summary}
                      metadata={e.regulatoryReferences}
                      reviewed={e.lastReviewed}
                      className="border-0 bg-paper hover:bg-ink"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {filtered.length === 0 ? (
        <section className="container-grid py-20 text-center">
          <p className="font-display text-3xl mb-3">No entries on file.</p>
          <p className="font-body text-ink-wash">
            The catalog returned nothing for that filter. Refine your terms or
            clear the search.
          </p>
        </section>
      ) : null}
    </>
  );
}
