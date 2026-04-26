import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/nav";

export function Header() {
  return (
    <header className="border-b border-gray bg-white/86 backdrop-blur-xl">
      <div className="container-grid py-4">
        <Link
          href="/"
          className="inline-block transition-opacity hover:opacity-80"
          aria-label={siteConfig.name}
        >
          <Image
            src="/footer-mark.svg"
            alt=""
            width={98}
            height={40}
            unoptimized
            className="h-8 w-auto opacity-90"
            role="presentation"
          />
        </Link>
      </div>
    </header>
  );
}
