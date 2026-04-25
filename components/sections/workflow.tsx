import { SectionHeader } from "@/components/ui/section-header";
import { toRoman } from "@/lib/utils";

const lifecycle = [
  {
    title: "Initiated",
    body: "An agent requests a call. The dialer halts. Nothing leaves the system without authorization.",
  },
  {
    title: "Authorized",
    body: "The Compliance Engine resolves consent, licensure, jurisdiction, time-of-day, DNC, and product line into a single signed token.",
  },
  {
    title: "Ringing",
    body: "RingCentral places the call under the appropriate caller-ID. The webhook fires; the lifecycle clock starts.",
  },
  {
    title: "Connected",
    body: "Two channels of audio are recorded at the bridge from the first hello, including the agent identification.",
  },
  {
    title: "Disclosures Delivered",
    body: "TPMO disclosure (if Medicare-eligible) is read verbatim within the first minute. Recording disclosure is captured. ACA-equivalent disclosures are delivered for Marketplace calls.",
  },
  {
    title: "Presentation",
    body: "Plan presentation proceeds on script — at least two plans, network and formulary verified, APTC math stated where applicable.",
  },
  {
    title: "Dispositioned",
    body: "Outcome is coded against the lead. Recording is sealed, indexed to Box.com, and the audit ledger is appended.",
  },
];

const ledger = `# bs-os :: outbound call lifecycle ::
> POST /v1/dial.request
< 202 ACCEPTED
< token: cmp_eng.tok.6f1aa-9c2e
< gates: [consent.1to1, lic.state, ahip.cycle,
<         dnc.federal, dnc.internal, tod.local,
<         appt.carrier, product.scope]

> rc.webhook :: call.initiated
> rc.webhook :: call.authorized   (token attached)
> rc.webhook :: call.ringing
> rc.webhook :: call.connected
> rc.webhook :: rec.tpmo.opened
> rc.webhook :: rec.tpmo.closed
> rc.webhook :: rec.soa.captured
> rc.webhook :: call.disconnected
> rc.webhook :: rec.ready

> POST /v1/box.archive
< 201 CREATED  meta: { lead, npn, plan, dur }
< retention: cms.10yr
< hash: sha256:9c2e6f1a-…-aa1b
< audit: ledger.append(ok)`;

export function Workflow() {
  return (
    <section id="outbound-call-lifecycle" className="bg-paper-cream">
      <SectionHeader
        index={5}
        eyebrow="THE OUTBOUND CALL LIFECYCLE"
        title="The outbound call, step by step."
        description="Seven stages — Initiated, Authorized, Ringing, Connected, Disclosures Delivered, Presentation, Dispositioned. Each issues evidence. Each is independently auditable. The system never dials without the signed token in hand."
        align="split"
      />
      <div className="container-grid pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-workflow-split gap-0 border border-ink bg-paper">
          <ol className="p-6 lg:p-10 flex flex-col">
            {lifecycle.map((step, i) => (
              <li
                key={step.title}
                className="grid grid-cols-[6rem_1fr] gap-6 py-5 border-t first:border-t-0 border-ink/30"
              >
                <div className="flex flex-col items-start">
                  <span className="font-display text-3xl leading-none roman">
                    {toRoman(i + 1)}
                  </span>
                  <span className="ledger-sm mt-2 opacity-70">
                    STEP · {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-body text-base text-ink-wash mt-2 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <aside className="p-6 lg:p-10 border-t lg:border-t-0 lg:border-l border-ink bg-ink text-paper-cream">
            <div className="flex items-center justify-between mb-4 ledger-sm opacity-80">
              <span>LEDGER · ENTRY · 0014.b</span>
              <span>POSTED · MMXXVI · IV · 12</span>
            </div>
            <pre className="font-mono text-[0.75rem] leading-6 whitespace-pre-wrap break-words overflow-hidden">
              {ledger}
            </pre>
            <div className="mt-6 pt-4 border-t border-paper-cream/40 ledger-sm opacity-80 flex justify-between">
              <span>BS · OS · v.MMXXVI.IV</span>
              <span>SEALED · ✓</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
