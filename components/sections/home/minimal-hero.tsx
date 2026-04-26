import Image from "next/image";
import { LinkButton } from "@/components/ui/button";

export function MinimalHero() {
  return (
    <section className="bg-white pb-[clamp(5rem,8vw,7rem)] pt-[clamp(2.5rem,4.25vw,4rem)]">
      <div className="container-grid">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-3xl">
            <h1 className="display-letterhead max-w-4xl">
              Counsel for regulated health insurance distribution.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-wash">
              Brown &amp; Sullivan advises and operates at the intersection of
              licensed enrollment, required consumer disclosures, recorded
              engagements, and retained audit evidence.
            </p>
            <div className="mt-8 max-w-xl border-l border-gray pl-5 text-sm leading-6 text-ink-wash">
              <p>
                Medicare: controlled intake; marketing under MCMG and
                carrier-filed materials; sales and counseling by licensed,
                appointed personnel.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <LinkButton href="/practice" size="lg">
                Our Practice
              </LinkButton>
              <LinkButton href="/contactus" variant="ghost" size="lg">
                Contact us
              </LinkButton>
            </div>
          </div>

          <aside
            aria-label="Professional office environment"
            className="relative"
          >
            <div className="absolute -right-6 -top-6 hidden h-40 w-40 rounded-[2rem] bg-paper-cream lg:block" />
            <div className="absolute -bottom-6 -left-6 hidden h-48 w-48 rounded-[2rem] border border-gray bg-white lg:block" />
            <figure className="soft-container relative overflow-hidden p-3">
              <div className="relative aspect-[6/7] w-full min-h-[380px] overflow-hidden rounded-[1.5rem] border border-gray/80 bg-paper-cream shadow-[0_2px_0_#e8e6e0,0_28px_80px_rgba(10,10,10,0.1)] sm:min-h-[400px]">
                <Image
                  src="/hero-ambient.jpg"
                  alt="Bright modern workspace with large windows and city views, representing a controlled professional environment"
                  fill
                  className="object-cover object-center grayscale contrast-[0.98]"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/[0.07] via-transparent to-white/[0.12]"
                  aria-hidden
                />
              </div>
              <figcaption className="mt-2 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-ink/40">
                Representative practice setting
              </figcaption>
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
}
