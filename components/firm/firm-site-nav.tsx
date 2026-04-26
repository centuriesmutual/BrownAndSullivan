import Link from "next/link";
import { cn } from "@/lib/utils";

const ITEMS = [
  { id: "about" as const, href: "/about", label: "About" },
  { id: "careers" as const, href: "/careers", label: "Careers" },
  { id: "contact" as const, href: "/contactus", label: "Contact" },
  { id: "legal" as const, href: "/legal", label: "Legal" },
];

export type FirmNavId = (typeof ITEMS)[number]["id"];

export function FirmSiteNav({ current }: { current: FirmNavId }) {
  return (
    <nav
      aria-label="Firm pages"
      className="border-b border-ink bg-paper-cream/90 backdrop-blur-md"
    >
      <div className="container-grid">
        <ul className="flex flex-col gap-0 sm:flex-row sm:flex-wrap sm:items-stretch">
          {ITEMS.map((item) => {
            const isActive = item.id === current;
            return (
              <li key={item.href} className="flex-1 min-w-[8rem] border-b border-ink sm:border-b-0 sm:border-r sm:last:border-r-0">
                <Link
                  href={item.href}
                  className={cn(
                    "flex min-h-[3rem] w-full items-center justify-center px-4 py-3 text-center font-mono text-[0.65rem] uppercase tracking-[0.2em] transition-colors sm:min-h-[3.25rem] sm:py-4",
                    isActive
                      ? "bg-ink text-paper"
                      : "text-ink hover:bg-paper"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
