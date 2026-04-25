import Link from "next/link";
import { PageTitle } from "@/components/ui/page-title";
import { agents, carrierLines } from "@/content/agents";
import { states, licensedCount } from "@/lib/states";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Agent Registry · Brown & Sullivan",
  description:
    "Producer licensure index by NPN, domicile, AHIP cycle, and carrier appointments — reconciled nightly against State NIPR.",
};

const totalAppointments = agents.reduce(
  (sum, a) => sum + a.appointments,
  0
);
const active = agents.filter((a) => a.status === "ACTIVE").length;

export default function AgentsPage() {
  return (
    <>
      <PageTitle
        volume={2}
        chapter={6}
        eyebrow="THE · AGENT · REGISTRY"
        title="A producer is the most regulated noun on the file."
        subtitle="Every outbound call routes only to a producer who is licensed in the destination state, current with AHIP for the plan year, appointed with the carrier whose product is being discussed, and authorized for the line of authority. The Compliance Engine refuses any other call."
        meta={[
          `${active} · PRODUCERS · ACTIVE`,
          `${totalAppointments} · APPOINTMENTS · IN · FORCE`,
          `LICENSED · ${licensedCount} · STATES`,
        ]}
      />

      {/* Stats strip */}
      <section className="border-t border-ink bg-paper-cream">
        <div className="container-grid grid grid-cols-2 lg:grid-cols-4 gap-0 border-x border-b border-ink bg-paper">
          {[
            { label: "Producers · Active", value: active.toString().padStart(2, "0") },
            { label: "Producers · Probation", value: "01" },
            { label: "States · Licensed", value: licensedCount.toString() },
            { label: "Carrier · Appointments", value: totalAppointments.toString() },
          ].map((s, i) => (
            <div
              key={s.label}
              className={cn(
                "p-6 lg:p-8",
                i !== 0 ? "border-l border-ink" : ""
              )}
            >
              <div className="ledger-sm mb-3 opacity-80">
                {s.label.toUpperCase()}
              </div>
              <div className="font-block text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.86]">
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Producer ledger */}
      <section
        id="nipr"
        className="container-grid py-14 grid grid-cols-12 gap-x-6 gap-y-8"
      >
        <div className="col-span-12 lg:col-span-4">
          <div className="ledger-sm mb-2">EXHIBIT · NPN · LEDGER</div>
          <h2 className="display-headline-sm">Producers of record.</h2>
          <p className="font-body text-ink-wash mt-3 leading-relaxed">
            The ledger below reconciles nightly against State NIPR by NPN.
            Producers in PROBATION status are blocked from the dialer until the
            adverse condition is cleared.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-8 border border-ink overflow-x-auto bg-paper-cream">
          <table className="min-w-full font-mono text-[0.75rem]">
            <thead className="bg-ink text-paper-cream">
              <tr className="text-left">
                <Th>NPN</Th>
                <Th>NAME</Th>
                <Th>DOM</Th>
                <Th>STATES</Th>
                <Th>AHIP</Th>
                <Th>APPT</Th>
                <Th>STATUS</Th>
              </tr>
            </thead>
            <tbody>
              {agents.map((a) => (
                <tr
                  key={a.npn}
                  className="border-t border-ink hover:bg-ink hover:text-paper-cream transition-colors"
                >
                  <Td>{a.npn}</Td>
                  <Td className="font-body text-sm">{a.name}</Td>
                  <Td>{a.domicile}</Td>
                  <Td>{a.licensedStates}</Td>
                  <Td className="opacity-80">{a.ahip}</Td>
                  <Td>{a.appointments}</Td>
                  <Td>
                    <span
                      className={cn(
                        "inline-block border px-2 py-0.5 tracking-stamp",
                        a.status === "ACTIVE"
                          ? "border-current"
                          : a.status === "PROBATION"
                          ? "bg-ink text-paper-cream border-ink"
                          : "opacity-50"
                      )}
                    >
                      {a.status}
                    </span>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Licensure map */}
      <section
        id="licensure"
        className="bg-paper-cream border-t border-ink py-14"
      >
        <div className="container-grid grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 lg:col-span-4">
            <div className="ledger-sm mb-2">EXHIBIT · J · LICENSURE · MAP</div>
            <h2 className="display-headline-sm">{licensedCount} States, by letterform.</h2>
            <p className="font-body text-ink-wash mt-3 leading-relaxed">
              The map is set in State postal codes. Filled tiles indicate
              jurisdictions in which the firm currently maintains an active
              roster of licensed producers. Texas carries the headquarters
              accent.
            </p>
          </div>
          <ul
            className="col-span-12 lg:col-span-8 grid gap-1 border border-ink p-3 bg-paper"
            style={{ gridTemplateColumns: "repeat(10, minmax(0, 1fr))" }}
          >
            {states.map((s) => (
              <li
                key={s.code}
                title={`${s.name} — ${s.licensed ? "LICENSED" : "UNFILED"}`}
                className={cn(
                  "relative aspect-square flex items-center justify-center border border-ink",
                  s.licensed
                    ? "bg-ink text-paper-cream"
                    : "bg-paper text-ink-wash/60"
                )}
              >
                <span className="font-block text-[clamp(0.7rem,1.2vw,1rem)]">
                  {s.code}
                </span>
                {s.hq ? (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-1 right-1 h-1.5 w-1.5 bg-paper-cream"
                  />
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Appointments by line */}
      <section
        id="appointments"
        className="container-grid py-14 grid grid-cols-12 gap-x-6 gap-y-8"
      >
        <div className="col-span-12 lg:col-span-4">
          <div className="ledger-sm mb-2">EXHIBIT · APPT · LINES</div>
          <h2 className="display-headline-sm">Carrier appointments by line.</h2>
        </div>
        <ul className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-ink">
          {carrierLines.map((c, i) => (
            <li
              key={c.code}
              className="p-6 bg-paper hover:bg-ink hover:text-paper-cream transition-colors"
              style={{
                borderLeft: i % 3 !== 0 ? "1px solid #0A0A0A" : undefined,
                borderTop: i >= 3 ? "1px solid #0A0A0A" : undefined,
              }}
            >
              <div className="ledger-sm mb-3">{c.code}</div>
              <div className="font-display text-2xl leading-tight mb-2">
                {c.label}
              </div>
              <div className="font-block text-[3rem] leading-none">
                {c.count}
              </div>
              <div className="ledger-sm mt-2 opacity-80">
                APPOINTMENTS · IN · FORCE
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="container-grid pb-14">
        <div className="border border-ink p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-paper-cream">
          <div className="lg:col-span-8">
            <div className="ledger-sm mb-3">CO-COUNSEL · &amp; · APPOINTMENT</div>
            <h3 className="display-headline-sm mb-3">
              Producers seeking appointment, contact counsel.
            </h3>
            <p className="font-body text-ink-wash max-w-2xl">
              Brown &amp; Sullivan adds producers to the roster on referral and
              after a written conflicts check. NPN, AHIP cycle, and at least
              one State license must be furnished at intake.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border-2 border-ink bg-ink text-paper-cream px-8 py-4 font-mono uppercase tracking-stamp text-[0.75rem] hover:bg-paper-cream hover:text-ink"
            >
              File Appointment Inquiry →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-3 py-2 tracking-stamp uppercase text-[0.625rem] font-medium border-r border-paper-cream/30 last:border-r-0 align-middle">
      {children}
    </th>
  );
}

function Td({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <td
      className={cn(
        "px-3 py-2 align-middle border-r border-ink/20 last:border-r-0",
        className
      )}
    >
      {children}
    </td>
  );
}
