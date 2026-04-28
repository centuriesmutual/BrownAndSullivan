import Image from "next/image";
import { LinkButton } from "@/components/ui/button";

export function MinimalHero() {
  return (
    <section className="bg-white pb-[clamp(5rem,8vw,7rem)] pt-[clamp(2.5rem,4.25vw,4rem)]">
      <div className="container-grid">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-3xl">
            <h1 className="display-letterhead max-w-4xl break-words">
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
                Request Appointment
              </LinkButton>
            </div>
          </div>

          <aside
            aria-label="Professional office environment"
            className="relative"
          >
            <div className="absolute -right-6 -top-6 hidden h-40 w-40 rounded-[2rem] bg-paper-cream lg:block" />
            <div className="absolute -bottom-6 -left-6 hidden h-48 w-48 rounded-[2rem] border border-gray bg-white lg:block" />
            <figure className="soft-container relative mx-auto w-full max-w-[min(100%,22rem)] overflow-hidden p-3 sm:max-w-md lg:mx-0 lg:max-w-none">
              <div className="relative aspect-[5/8] w-full overflow-hidden rounded-[1.5rem] border border-gray/80 bg-white shadow-[0_2px_0_#e8e6e0,0_28px_80px_rgba(10,10,10,0.1)]">
                <Image
                  src="/brownlady.jpg"
                  alt="Professional illustration of counsel with law books and scales of justice"
                  fill
                  className="object-contain object-[center_40%]"
                  sizes="(min-width: 1024px) min(42vw, 24rem), (min-width: 640px) 60vw, 100vw"
                  priority
                />
              </div>
              <figcaption className="mt-2 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-ink/40">
                Representative counsel
              </figcaption>
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
}
