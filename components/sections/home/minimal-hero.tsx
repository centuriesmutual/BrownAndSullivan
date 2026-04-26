import dynamic from "next/dynamic";
import { LinkButton } from "@/components/ui/button";

const HeroScholBlocks3D = dynamic(
  () =>
    import("./hero-schol-blocks-3d").then((m) => m.HeroScholBlocks3D),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex aspect-[6/7] w-full min-h-[380px] items-center justify-center rounded-[1.25rem] bg-paper-cream"
        aria-hidden
      />
    ),
  }
);

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

          <aside
            aria-label="Scholastic letter blocks, three-dimensional still render"
            className="relative"
          >
            <div className="absolute -right-6 -top-6 hidden h-40 w-40 rounded-[2rem] bg-paper-cream lg:block" />
            <div className="absolute -bottom-6 -left-6 hidden h-48 w-48 rounded-[2rem] border border-gray bg-white lg:block" />
            <figure className="soft-container relative overflow-hidden p-3">
              <span className="sr-only">
                A static three-dimensional render of scholastic wooden letter
                blocks, including B, ampersand, S, and secondary A and C blocks,
                in firm monochrome.
              </span>
              <HeroScholBlocks3D />
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
}
