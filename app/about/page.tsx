import { PageTitle } from "@/components/ui/page-title";
import { Jurisdictions } from "@/components/sections/jurisdictions";

export const metadata = {
  title: "About · Brown & Sullivan",
  description:
    "Established MMXXV in the State of Texas. A compliance counsel and directory of record for regulated distribution.",
};

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

export default function AboutPage() {
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

      <section className="container-grid py-14 grid grid-cols-12 gap-x-6 gap-y-8">
        <div className="col-span-12 lg:col-span-4 ledger-sm">
          THE · PRINCIPLES · OF · THE · HOUSE
        </div>
        <ol className="col-span-12 lg:col-span-8 border border-ink bg-paper">
          {principles.map((p, i) => (
            <li
              key={p.code}
              className="grid grid-cols-[6rem_1fr] gap-6 px-6 py-7 border-b last:border-b-0 border-ink"
            >
              <div className="font-block text-3xl leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div className="ledger-sm mb-2 opacity-70">{p.code}</div>
                <h3 className="font-display text-2xl leading-tight">{p.title}</h3>
                <p className="font-body text-base text-ink-wash mt-2 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <Jurisdictions />

      <section
        id="careers"
        className="container-grid py-14 grid grid-cols-12 gap-x-6 gap-y-8 border-t border-ink"
      >
        <div className="col-span-12 lg:col-span-4">
          <div className="ledger-sm mb-3">CAREERS · &amp; · CO-COUNSEL</div>
          <h2 className="display-headline-sm">A small bar.</h2>
        </div>
        <div className="col-span-12 lg:col-span-8 font-body text-ink-wash leading-relaxed">
          <p className="mb-4">
            Brown &amp; Sullivan does not maintain a public job board. Inquiries
            from licensed producers, compliance officers, and counsel admitted
            in jurisdictions where we are not directly licensed are welcome —
            referred matters and co-counsel arrangements are how the firm
            grows.
          </p>
          <p>
            Engagements requiring co-counsel are paired by jurisdiction, line
            of authority, and matter type. References are exchanged on
            request, under privilege.
          </p>
        </div>
      </section>

      <section
        id="press"
        className="bg-paper-cream border-t border-ink py-14"
      >
        <div className="container-grid grid grid-cols-12 gap-x-6 gap-y-6">
          <div className="col-span-12 lg:col-span-4 ledger-sm">
            PRESS · &amp; · INQUIRIES
          </div>
          <div className="col-span-12 lg:col-span-8 font-body text-ink-wash leading-relaxed">
            <p>
              Press inquiries are accepted in writing only and are answered, if
              at all, in writing. The firm does not comment on active matters,
              ongoing examinations, or the operations of named clients.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
