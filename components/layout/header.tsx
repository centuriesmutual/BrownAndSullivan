import Link from "next/link";
import { primaryNav, siteConfig } from "@/lib/nav";

export function Header() {
  return (
    <header className="border-b border-gray bg-white/86 backdrop-blur-xl">
      <div className="container-grid flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Link
          href="/"
          className="font-body text-sm font-semibold uppercase tracking-[0.24em] text-ink transition-opacity hover:opacity-70"
        >
          {siteConfig.name}
        </Link>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <nav aria-label="Primary">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-wash">
              {primaryNav
                .filter((n) =>
                  ["Directory", "Compliance", "Audit", "Scripts", "Contact"].includes(
                    n.label
                  )
                )
                .map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="firm-link">
                      {n.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
          <form
            role="search"
            className="relative w-full lg:w-64"
            action="/directory"
            method="get"
          >
            <label htmlFor="site-search" className="sr-only">
              Search the directory
            </label>
            <input
              id="site-search"
              name="q"
              type="search"
              autoComplete="off"
              placeholder="Search directory"
              aria-keyshortcuts="Meta+K"
              className="h-10 w-full rounded-full border border-gray bg-white px-4 pr-12 text-sm outline-none transition focus:border-ink/40 focus:shadow-[0_0_0_4px_rgba(10,10,10,0.06)]"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-gray bg-paper-cream px-1.5 py-0.5 font-mono text-[10px] text-ink-wash">
              ⌘K
            </kbd>
          </form>
        </div>
      </div>
    </header>
  );
}
