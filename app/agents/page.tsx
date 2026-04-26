import Link from "next/link";
import { PageTitle } from "@/components/ui/page-title";
import {
  FilingExhibitList,
  FilingExhibitRequestBlurb,
} from "@/components/filing-exhibits/filing-exhibit-list";
import { directoryEntries } from "@/content/directory";
import { agents, carrierLines } from "@/content/agents";
import { states, licensedCount } from "@/lib/states";
import { cn } from "@/lib/utils";

const agentRegistryExhibits = directoryEntries.filter(
  (e) => e.category === "Agent Registry"
);

const totalAppointments = agents.reduce(
  (sum, a) => sum + a.appointments,
  0
);
const active = agents.filter((a) => a.status === "ACTIVE").length;

export const metadata = {
  title: "Agent Registry · Brown & Sullivan",
  description:
    "Registry objects for producer licensure, AHIP, and carrier appointments, plus the live NPN ledger reconciled to NIPR.",
};

export default function AgentsPage() {
  return (
    <>
      <PageTitle
        volume={2}
        chapter={6}
        eyebrow="THE · AGENT · REGISTRY"
        title="Every producer is a file before they are a voice."
        subtitle="The registry is how the firm proves that a named producer may discuss a product in a jurisdiction: state license, current training, and carrier appointment, each a distinct record class. The exhibit cards below are the same objects the Compliance Engine enforces on the wire."
        meta={[
          `${agentRegistryExhibits.length} · REGISTRY · OBJECTS · INDEXED`,
          `${active} · PRODUCERS · ON · ROSTER`,
        ]}
      />
      <FilingExhibitRequestBlurb>
        Regulators, carriers, and MGA partners requesting producer attestations
        or file extracts should use the request links below to identify the
        object—state licensure index, AHIP status, or appointment ledger. For a
        roster change or a new appointment, the firm will respond from counsel
        after conflicts review.
      </FilingExhibitRequestBlurb>
      <FilingExhibitList entries={agentRegistryExhibits} />

      {/* Stats strip */}
      <section className="border-t border-ink bg-paper-cream">
        <div className="container-grid grid grid-cols-2 gap-0 border-x border-b border-ink bg-paper lg:grid-cols-4">
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
        className="container-grid grid grid-cols-12 gap-x-6 gap-y-8 py-14"
      >
        <div className="col-span-12 lg:col-span-4">
          <div className="ledger-sm mb-2">EXHIBIT · NPN · LEDGER</div>
          <h2 className="display-headline-sm">Producers of record.</h2>
          <p className="mt-3 font-body leading-relaxed text-ink-wash">
            The ledger below reconciles nightly against State NIPR by NPN.
            Producers in PROBATION status are blocked from the dialer until the
            adverse condition is cleared.
          </p>
        </div>
        <div className="col-span-12 overflow-x-auto border border-ink bg-paper-cream lg:col-span-8">
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
                  className="border-t border-ink transition-colors hover:bg-ink hover:text-paper-cream"
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
                            ? "border-ink bg-ink text-paper-cream"
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
        className="border-t border-ink bg-paper-cream py-14"
      >
        <div className="container-grid grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 lg:col-span-4">
            <div className="ledger-sm mb-2">EXHIBIT · J · LICENSURE · MAP</div>
            <h2 className="display-headline-sm">{licensedCount} States, by letterform.</h2>
            <p className="mt-3 font-body leading-relaxed text-ink-wash">
              The map is set in State postal codes. Filled tiles indicate
              jurisdictions in which the firm currently maintains an active
              roster of licensed producers. Texas carries the headquarters
              accent.
            </p>
          </div>
          <ul
            className="col-span-12 grid gap-1 border border-ink bg-paper p-3 lg:col-span-8"
            style={{ gridTemplateColumns: "repeat(10, minmax(0, 1fr))" }}
          >
            {states.map((s) => (
              <li
                key={s.code}
                title={`${s.name} — ${s.licensed ? "LICENSED" : "UNFILED"}`}
                className={cn(
                  "relative flex aspect-square items-center justify-center border border-ink",
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
        className="container-grid grid grid-cols-12 gap-x-6 gap-y-8 py-14"
      >
        <div className="col-span-12 lg:col-span-4">
          <div className="ledger-sm mb-2">EXHIBIT · APPT · LINES</div>
          <h2 className="display-headline-sm">Carrier appointments by line.</h2>
        </div>
        <ul className="col-span-12 grid grid-cols-1 border border-ink sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
          {carrierLines.map((c, i) => (
            <li
              key={c.code}
              className="bg-paper p-6 transition-colors hover:bg-ink hover:text-paper-cream"
              style={{
                borderLeft: i % 3 !== 0 ? "1px solid #0A0A0A" : undefined,
                borderTop: i >= 3 ? "1px solid #0A0A0A" : undefined,
              }}
            >
              <div className="ledger-sm mb-3">{c.code}</div>
              <div className="mb-2 font-display text-2xl leading-tight">
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

      <section className="container-grid pb-14">
        <div className="grid grid-cols-1 items-center gap-6 border border-ink bg-paper-cream p-8 lg:grid-cols-12 lg:gap-6 lg:p-12">
          <div className="lg:col-span-8">
            <div className="ledger-sm mb-3">CO-COUNSEL · &amp; · APPOINTMENT</div>
            <h3 className="mb-3 display-headline-sm">
              Producers seeking appointment, contact counsel.
            </h3>
            <p className="max-w-2xl font-body text-ink-wash">
              Brown &amp; Sullivan adds producers to the roster on referral and
              after a written conflicts check. NPN, AHIP cycle, and at least
              one State license must be furnished at intake.
            </p>
          </div>
          <div className="flex justify-start lg:col-span-4 lg:justify-end">
            <Link
              href="/contactus"
              className="inline-flex items-center gap-3 border-2 border-ink bg-ink px-8 py-4 font-mono text-[0.75rem] uppercase tracking-stamp text-paper-cream hover:bg-paper-cream hover:text-ink"
            >
              File appointment inquiry →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="border-r border-paper-cream/30 px-3 py-2 align-middle text-[0.625rem] font-medium uppercase tracking-stamp last:border-r-0">
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
        "border-r border-ink/20 px-3 py-2 align-middle last:border-r-0",
        className
      )}
    >
      {children}
    </td>
  );
}
