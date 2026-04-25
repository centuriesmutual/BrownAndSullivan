import Link from "next/link";

export function UtilityBar() {
  return (
    <div className="border-b border-gray bg-paper-cream/70">
      <div className="container-grid flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-2.5">
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 ledger-sm">
          <li>
            <span className="opacity-60">Office ·</span> TX
          </li>
          <li className="hidden sm:flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ink/45" />
            <span>SOC 2 Type II</span>
          </li>
          <li className="hidden md:flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ink/45" />
            <span>HIPAA Covered Entity</span>
          </li>
          <li className="hidden lg:flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ink/45" />
            <span>CMS TPMO Disclosed</span>
          </li>
        </ul>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-1 ledger-sm">
          <li className="hidden sm:block">
            <kbd className="rounded-md border border-gray bg-white px-1.5 py-0.5">⌘ K</kbd>
            <span className="ml-2 opacity-70">SEARCH</span>
          </li>
          <li>
            <Link
              href="/contact"
              className="firm-link"
            >
              Request appointment
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
