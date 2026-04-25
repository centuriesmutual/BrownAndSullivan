import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-grid py-24 grid grid-cols-12 gap-x-6 gap-y-10 border-t border-ink">
      <div className="col-span-12 lg:col-span-4">
        <div className="ledger-sm mb-3">EXHIBIT · 404 · MISFILED</div>
        <div className="font-block text-[clamp(8rem,18vw,18rem)] leading-[0.78]">
          404
        </div>
      </div>
      <div className="col-span-12 lg:col-span-8 flex flex-col gap-5">
        <h1 className="display-headline-sm">This entry is not on file.</h1>
        <p className="font-body text-lg text-ink-wash max-w-2xl leading-relaxed">
          The page you have requested has either been re-shelved under a new
          reference code, withdrawn from the directory, or never accessioned.
        </p>
        <p className="font-body text-base text-ink-wash max-w-2xl">
          Counsel suggests returning to the front matter and consulting the
          alphabetical index.
        </p>
        <div className="flex flex-wrap gap-4 mt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-3 border-2 border-ink bg-ink text-paper-cream px-6 py-3 font-mono uppercase tracking-stamp text-[0.6875rem] hover:bg-paper-cream hover:text-ink"
          >
            Return to Front Matter →
          </Link>
          <Link
            href="/directory"
            className="inline-flex items-center gap-3 border-2 border-ink bg-paper text-ink px-6 py-3 font-mono uppercase tracking-stamp text-[0.6875rem] hover:bg-ink hover:text-paper-cream"
          >
            Consult the Directory
          </Link>
        </div>
      </div>
    </section>
  );
}
