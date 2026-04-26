import Link from "next/link";
import { PageTitle } from "@/components/ui/page-title";
import { pageMetadata } from "@/lib/seo-metadata";
import { FirmSiteNav } from "@/components/firm/firm-site-nav";

export const metadata = pageMetadata({
  title: "Careers · Brown & Sullivan",
  description:
    "Careers, co-counsel, and limited roster: how the firm adds producers and professional staff.",
  path: "/careers",
});

const paths = [
  {
    step: "01",
    title: "Co-counsel",
    body: "Referred matters and license gaps filled by local counsel, under joint engagement when the file requires it.",
  },
  {
    step: "02",
    title: "Producers & compliance",
    body: "Licensed staff and compliance leadership when the client’s program already sits in the directory.",
  },
  {
    step: "03",
    title: "Professional",
    body: "Operations and paraprofessional roles on invitation—after conflicts, never after a public posting alone.",
  },
] as const;

const sequence = [
  { code: "A", title: "First note", body: "Email the contact of record. No portal; one thread starts the file." },
  { code: "B", title: "Conflicts", body: "Screening runs against the existing roster. You may receive a short decline." },
  { code: "C", title: "Reply", body: "Written answers on business days if there is a possible fit. No phone screens without an appointment." },
] as const;

export default function CareersPage() {
  return (
    <>
      <PageTitle
        volume={3}
        chapter={2}
        eyebrow="CAREERS"
        title="A small bar; an index in the room."
        subtitle={
          "The firm does not run a public job board. Inquiries from licensed producers, compliance leaders, and counsel in complementary jurisdictions are welcome when referred or when a file already exists. Growth is by invitation and by conflict clearance."
        }
        meta={["NO · OPEN · REQ · BOARD", "CO-COUNSEL · WELCOME"]}
      />

      <FirmSiteNav current="careers" />

      <section className="border-b border-ink bg-paper">
        <div className="container-grid section-y">
          <div className="mb-10 max-w-2xl">
            <p className="ledger-sm mb-2">PATHS · INTO · THE · HOUSE</p>
            <h2 className="display-section text-balance">
              Three ways the roster grows.
            </h2>
          </div>
          <div className="grid gap-0 border border-ink md:grid-cols-3">
            {paths.map((p) => (
              <div
                key={p.step}
                className="border-ink/80 p-6 md:border-r md:last:border-r-0 md:p-8 [&:not(:last-child)]:border-b md:[&:not(:last-child)]:border-b-0"
              >
                <span className="font-block text-3xl text-ink/30">{p.step}</span>
                <h3 className="mt-4 font-display text-2xl leading-tight">{p.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-ink-wash">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-paper-cream">
        <div className="container-grid">
          <div className="soft-container p-0 overflow-hidden">
            <div className="border-b border-ink/20 bg-ink px-5 py-4 sm:px-8">
              <p className="ledger-sm text-paper/80">INTAKE · SEQUENCE</p>
            </div>
            <ol className="grid divide-y divide-ink/15 md:grid-cols-3 md:divide-x md:divide-y-0">
              {sequence.map((s) => (
                <li key={s.code} className="p-6 sm:p-8">
                  <span className="inline-flex h-9 w-9 items-center justify-center border-2 border-ink font-block text-sm">
                    {s.code}
                  </span>
                  <h3 className="mt-5 font-display text-xl">{s.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink-wash">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-ink bg-paper">
        <div className="container-grid section-y">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <h2 className="font-display text-2xl leading-tight md:text-3xl">
                The About file has the long-form posture; this is the same door,
                in your pocket from the footer.
              </h2>
              <p className="mt-4 font-body leading-relaxed text-ink-wash">
                <Link
                  href="/about#careers"
                  className="text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
                >
                  Careers &amp; co-counsel
                </Link>{" "}
                on the About page, or write first from{" "}
                <Link
                  href="/contactus"
                  className="text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
                >
                  Help Desk
                </Link>
                .
              </p>
            </div>
            <div className="border border-ink bg-paper-cream/80 p-8 md:p-10">
              <p className="font-body text-ink-wash leading-relaxed">
                <span className="font-medium text-ink">How to start.</span> Send a
                short note through the contact of record with your NPN (if
                licensed), home state, and the work you are interested in. The
                firm will reply in writing on business days if there is a
                possible fit. No résumé portal is kept on this site.
              </p>
              <Link
                href="/contactus"
                className="mt-6 inline-flex w-full items-center justify-center border-2 border-ink py-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink transition hover:bg-ink hover:text-paper sm:w-auto sm:px-8"
              >
                Contact · of · record
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
