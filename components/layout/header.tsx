import Link from "next/link";
import { primaryNav, siteConfig } from "@/lib/nav";
import { BlockTile } from "@/components/ui/block-tile";

export function Header() {
  return (
    <header className="border-b border-ink bg-paper">
      <div className="container-grid">
        <div className="grid grid-cols-1 lg:grid-cols-header-shell">
          {/* Left column: Wordmark + tagline + ref */}
          <div className="relative py-8 lg:py-10 pr-0 lg:pr-10">
            <Link href="/" className="block group">
              <div className="flex flex-col">
                <span
                  className="font-block uppercase tracking-block-tight text-[clamp(2rem,4vw,3.25rem)] leading-[0.86] group-hover:bg-ink group-hover:text-paper-cream transition-colors"
                >
                  BROWN
                  <span className="font-display italic font-normal mx-2 lowercase tracking-normal text-[0.55em] align-middle">
                    &amp;
                  </span>
                  SULLIVAN
                </span>
                <span className="font-display italic text-lg md:text-xl mt-2 text-ink-wash">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>
            <div className="mt-5 ledger-sm flex flex-col gap-1">
              <span>{siteConfig.established}</span>
              <span className="opacity-70">{siteConfig.reference}</span>
            </div>
            {/* Vertical hairline separator (desktop) */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute right-0 top-2 bottom-2 w-px bg-ink"
            />
          </div>

          {/* Right column: ABC nav + card-catalog search */}
          <div className="py-6 lg:py-10 lg:pl-10 flex flex-col gap-5">
            <nav aria-label="Primary">
              <ul className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
                {primaryNav.map((n) => (
                  <li key={n.letter}>
                    <BlockTile
                      letter={n.letter}
                      label={n.serif}
                      href={n.href}
                      variant="outline"
                      size="md"
                    />
                  </li>
                ))}
              </ul>
            </nav>
            <form
              role="search"
              className="catalog-search relative border-b border-ink"
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
                placeholder="SEARCH THE DIRECTORY · CTRL/⌘ + K"
                aria-keyshortcuts="Meta+K"
              />
              <span
                aria-hidden="true"
                className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 bg-ink"
              />
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
