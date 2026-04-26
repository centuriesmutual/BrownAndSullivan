import Image from "next/image";
import { LinkButton } from "@/components/ui/button";

export function MinimalHero() {
  return (
    <section className="section-y bg-white">
      <div className="container-grid">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="soft-pill mb-8 inline-flex px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-ink-wash">
              Medicare · ACA · Regulatory Counsel
            </div>
            <h1 className="display-letterhead max-w-4xl">
              Counsel for regulated health insurance distribution.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-wash">
              Brown &amp; Sullivan advises and operates at the intersection of
              licensed enrollment, required consumer disclosures, recorded
              engagements, and retained audit evidence.
            </p>
            <div className="mt-8 grid max-w-xl gap-3 border-l border-gray pl-5 text-sm leading-6 text-ink-wash">
              <p>
                Medicare and ACA matters are handled through controlled intake,
                documented notice, and review by licensed personnel.
              </p>
              <p>
                The firm is presently active in Texas, Arizona, and North
                Carolina.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <LinkButton href="/directory" size="lg">
                View Directory
              </LinkButton>
              <LinkButton href="#disclosures" variant="ghost" size="lg">
                View Disclosures
              </LinkButton>
            </div>
          </div>

          <aside aria-label="Professional counsel portrait" className="relative">
            <div className="absolute -right-6 -top-6 hidden h-40 w-40 rounded-[2rem] bg-paper-cream lg:block" />
            <div className="absolute -bottom-6 -left-6 hidden h-48 w-48 rounded-[2rem] border border-gray bg-white lg:block" />
            <figure className="soft-container relative overflow-hidden p-3">
              <Image
                src="/counsel-hero.svg"
                alt="Professional counsel in a restrained office setting"
                width={960}
                height={1120}
                className="aspect-[6/7] w-full rounded-[1.25rem] object-cover"
                priority
              />
              <figcaption className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-white/88 p-4 shadow-[0_18px_50px_rgba(10,10,10,0.12)] backdrop-blur-md">
                <p className="text-sm font-medium text-ink">Brown &amp; Sullivan</p>
                <p className="mt-1 text-xs leading-5 text-ink-wash">
                  Regulated distribution counsel · Texas principal office
                </p>
              </figcaption>
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
}
