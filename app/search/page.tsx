import { PageTitle } from "@/components/ui/page-title";

export const metadata = {
  title: "Search · Brown & Sullivan",
  description:
    "Search the firm’s compliance directory by title, code, tag, or citation.",
};

export default function SearchPage() {
  return (
    <>
      <PageTitle
        volume={2}
        chapter={1}
        eyebrow="SEARCH"
        title="The catalog, not a search engine."
        subtitle={
          "The directory is the firm’s public index. Enter a term to filter entries by title, code, description, or tag; the same query is supported from the home keyboard shortcut and the main directory view."
        }
        meta={["DIRECTORY · FILTER", "BY · TERM"]}
      />

      <section className="container-grid border-b border-ink py-10">
        <form
          action="/directory"
          method="get"
          className="max-w-2xl border border-ink bg-paper p-4"
        >
          <label htmlFor="footer-search-q" className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-ink/55">
            Query
          </label>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <input
              id="footer-search-q"
              name="q"
              type="search"
              placeholder="Title · code · tag · citation"
              className="min-h-11 flex-1 border border-ink bg-white px-3 font-mono text-sm outline-none focus:ring-2 focus:ring-ink/20"
            />
            <button
              type="submit"
              className="border-2 border-ink bg-ink px-6 font-mono text-xs uppercase tracking-[0.1em] text-paper-cream transition hover:bg-paper-cream hover:text-ink"
            >
              Search directory
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-ink-wash">
          Tip: <kbd className="rounded border border-ink/20 bg-paper-cream px-1.5 font-mono text-xs">⌘K</kbd> from any page
          opens the catalog drawer; results land on the directory with your
          term applied.
        </p>
      </section>
    </>
  );
}
