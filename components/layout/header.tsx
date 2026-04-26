import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/nav";

export function Header() {
  return (
    <header className="border-b border-gray bg-white/86 backdrop-blur-xl">
      <div className="container-grid flex flex-wrap items-center justify-between gap-4 py-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 text-ink transition-opacity hover:opacity-80"
        >
          <Image
            src="/footer-mark.svg"
            alt=""
            width={98}
            height={40}
            unoptimized
            className="h-8 w-auto opacity-90 transition group-hover:opacity-100"
            role="presentation"
          />
          <span className="font-body text-sm font-semibold uppercase tracking-[0.24em]">
            {siteConfig.name}
          </span>
        </Link>
        <Link
          href="/contactus"
          className="text-sm font-medium text-ink transition hover:opacity-80"
        >
          Contact us
        </Link>
      </div>
    </header>
  );
}
