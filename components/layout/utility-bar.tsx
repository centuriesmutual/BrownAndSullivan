import Link from "next/link";

export function UtilityBar() {
  return (
    <div className="border-b border-gray bg-paper-cream/70">
      <div className="container-grid flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-2.5">
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 ledger-sm">
          <li>
            <span className="opacity-60">Office ·</span> USA
          </li>
          <li className="hidden sm:flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ink/45" />
            <span>Since 2025</span>
          </li>
          <li className="hidden md:flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ink/45" />
            <span>HIPAA Compliant</span>
          </li>
          <li className="hidden lg:flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ink/45" />
            <span>CMS Reviewed</span>
          </li>
        </ul>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-1 ledger-sm">
          <li>
            <Link
              href="/contactus"
              className="firm-link -m-1 inline-flex min-h-[2.75rem] min-w-[2.75rem] items-center justify-end px-1 py-2 sm:min-h-0 sm:min-w-0 sm:px-0 sm:py-0"
            >
              Help Desk
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
