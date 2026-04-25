import Link from "next/link";

export function UtilityBar() {
  return (
    <div className="border-b border-ink bg-paper">
      <div className="container-grid flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-2">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-1 ledger-sm">
          <li>
            <span className="opacity-60">JUR ·</span> TX · HQ
          </li>
          <li className="hidden sm:flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-ink" />
            <span>SOC · 2 · TYPE · II</span>
          </li>
          <li className="hidden md:flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-ink" />
            <span>HIPAA · COVERED · ENTITY</span>
          </li>
          <li className="hidden lg:flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-ink" />
            <span>CMS · TPMO · DISCLOSED</span>
          </li>
        </ul>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-1 ledger-sm">
          <li className="hidden sm:block">
            <kbd className="border border-ink px-1.5 py-0.5">⌘ K</kbd>
            <span className="ml-2 opacity-70">SEARCH</span>
          </li>
          <li>
            <Link
              href="/contact"
              className="underline underline-offset-4 decoration-1 hover:bg-ink hover:text-paper-cream px-1"
            >
              COUNSEL · ON · CALL
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
