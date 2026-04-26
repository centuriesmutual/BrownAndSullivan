import Link from "next/link";
import { PageTitle } from "@/components/ui/page-title";
import { Jurisdictions } from "@/components/sections/jurisdictions";
import { pageMetadata } from "@/lib/seo-metadata";
import { FirmSiteNav } from "@/components/firm/firm-site-nav";
import { licensedCount } from "@/lib/states";

export const metadata = pageMetadata({
  title: "About · Brown & Sullivan",
  description:
    "Established MMXXV in the State of Texas. A compliance counsel and directory of record for regulated distribution.",
  path: "/about",
});

const principles = [
  {
    code: "PR · 01",
    title: "We catalog before we counsel.",
    body: "The directory comes first. An assertion that cannot be tied to a sealed artifact is not an assertion we will make on a client's behalf.",
  },
  {
    code: "PR · 02",
    title: "We retain before we delete.",
    body: "Every artifact is retained against the most conservative regulatory clock that touches it. Disposition occurs only on counsel's written notice.",
  },
  {
    code: "PR · 03",
    title: "We authorize before we dial.",
    body: "The Compliance Engine refuses ambiguity. Every outbound contact begins with a signed token or it does not begin at all.",
  },
  {
    code: "PR · 04",
    title: "We answer the examiner in his own language.",
    body: "The directory is organized so that a question phrased in TCPA, in CMS, in HIPAA, in FTC, or in the language of any State DOI returns the same authoritative answer.",
  },
];

const statRows = (n: number) =>
  [
    { label: "Founded", value: "MMXXV" },
    { label: "Headquarters", value: "Lubbock, Texas" },
    { label: "Jurisdictions", value: `${n} States` },
    { label: "Roster", value: "Limited" },
  ] as const;

export default function AboutPage() {
  const stats = statRows(licensedCount);
  return (
    <>
      <PageTitle
        volume={3}
        chapter={1}
        eyebrow="THE FIRM"
        title="Established MMXXV, in the State of Texas."
        subtitle="Brown & Sullivan is a compliance directory practice for the regulated distribution of insurance products. We are headquartered in the State of Texas and licensed to advise in thirty-seven States. We accept a limited roster of clients each quarter."
        meta={["EST · MMXXV", "HQ · TEXAS", "LICENSED · IN · XXXVII"]}
      />

      <FirmSiteNav current="about" />

      <section className="relative overflow-hidden border-b border-ink bg-paper-cream">
        <div
          className="pointer-events-none select-none font-display text-[clamp(3.5rem,16vw,12rem)] font-medium leading-none text-ink/[0.05]"
          aria-hidden
        >
          <div className="container-grid relative py-10">
            <span className="block -translate-x-[2%]">MMXXV</span>
          </div>
        </div>
        <div className="container-grid relative -mt-10 pb-12 md:-mt-16 md:pb-16">
          <div className="grid grid-cols-2 gap-px border border-ink bg-ink/25 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-paper px-4 py-6 md:px-5 md:py-7">
                <div className="ledger-sm text-ink/55">{s.label}</div>
                <div className="mt-2 font-display text-lg leading-tight text-ink md:text-xl">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-grid">
          <div className="mb-10 flex flex-col gap-3 border-b border-ink pb-8 md:flex-row md:items-end md:justify-between">
            <p className="ledger-sm">THE · PRINCIPLES · OF · THE · HOUSE</p>
            <p className="max-w-md font-body text-sm leading-relaxed text-ink-wash">
              Filed as operating rules, not marketing copy. Every engagement is
              measured against these four posts.
            </p>
          </div>

          <div className="soft-container overflow-hidden">
            <ol className="divide-y divide-ink/20">
              {principles.map((p, i) => (
                <li
                  key={p.code}
                  className="block-press grid gap-6 px-5 py-8 transition-colors hover:bg-paper-cream/50 sm:grid-cols-[4.5rem_1fr] sm:gap-8 sm:px-8 sm:py-9"
                >
                  <div className="font-block text-4xl leading-none text-ink/90">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="ledger-sm mb-2 text-ink/60">{p.code}</div>
                    <h3 className="font-display text-2xl leading-tight tracking-tight md:text-[1.75rem]">
                      {p.title}
                    </h3>
                    <p className="mt-3 font-body text-base leading-relaxed text-ink-wash">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Jurisdictions />

      <section
        id="careers"
        className="border-t border-ink bg-paper-cream"
      >
        <div className="container-grid section-y">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <div className="ledger-sm mb-3 text-ink/70">CAREERS · &amp; · CO-COUNSEL</div>
              <h2 className="display-headline-sm max-w-sm text-balance">
                A small bar.
              </h2>
              <p className="mt-6 max-w-md font-body leading-relaxed text-ink-wash">
                The firm does not maintain a public job board. Inquiries from
                licensed producers, compliance officers, and counsel in
                complementary jurisdictions are welcome.
              </p>
              <Link
                href="/careers"
                className="mt-8 inline-flex items-center border-2 border-ink bg-ink px-6 py-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-paper transition hover:bg-ink/90"
              >
                Open · careers · file
              </Link>
            </div>
            <div className="border border-ink bg-paper p-8 shadow-[0_20px_60px_rgba(10,10,10,0.06)] md:p-10">
              <p className="font-body text-ink-wash leading-relaxed">
                Engagements requiring co-counsel are paired by jurisdiction, line
                of authority, and matter type. References are exchanged on
                request, under privilege.
              </p>
              <p className="mt-6 border-t border-ink/10 pt-6 font-body text-sm italic text-ink-wash/90">
                For the dedicated path and how to write first, use the
                firm&rsquo;s{" "}
                <Link
                  href="/careers"
                  className="text-ink underline decoration-ink/30 underline-offset-2 not-italic hover:decoration-ink"
                >
                  careers
                </Link>{" "}
                page in the same chapter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="press" className="border-t border-ink bg-ink text-paper-cream">
        <div className="container-grid section-y">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <p className="ledger-sm text-paper-cream/70">PRESS · &amp; · INQUIRIES</p>
            </div>
            <div className="lg:col-span-8 max-w-2xl">
              <p className="font-display text-2xl leading-snug tracking-tight md:text-3xl">
                The firm does not take questions through social channels. Initial
                contact is in writing, on the record.
              </p>
              <p className="mt-6 font-body leading-relaxed text-paper-cream/80">
                Press inquiries are accepted in writing only and are answered, if
                at all, in writing. The firm does not comment on active matters,
                ongoing examinations, or the operations of named clients.
              </p>
              <p className="mt-6 ledger-sm text-paper-cream/50">
                ROUTE · INQUIRIES · VIA{" "}
                <Link
                  href="/contactus"
                  className="text-paper-cream underline decoration-paper-cream/30 underline-offset-4 hover:decoration-paper-cream"
                >
                  CONTACT · US
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
