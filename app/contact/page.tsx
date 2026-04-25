import { PageTitle } from "@/components/ui/page-title";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact · Brown & Sullivan",
  description:
    "Counsel-style intake. Engagements are accepted under privilege and against a written engagement letter.",
};

export default function ContactPage() {
  return (
    <>
      <PageTitle
        volume={3}
        chapter={2}
        eyebrow="CONTACT · COUNSEL"
        title="Open a file."
        subtitle="The firm accepts written intake from prospective clients and from regulators with authority of inquiry. Replies are issued under privilege and within a stated business-day window."
        meta={["RESPONSE · WITHIN · X · BUSINESS · DAYS"]}
      />

      <section className="container-grid py-12 grid grid-cols-12 gap-x-6 gap-y-10">
        <form
          action="#"
          method="post"
          className="col-span-12 lg:col-span-8 border border-ink bg-paper-cream p-8 lg:p-12 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6"
        >
          <div className="ledger-sm sm:col-span-2 mb-2">
            INTAKE · FORM · 0001 · UNDER · PRIVILEGE
          </div>

          <Field name="name" label="Counterparty Name" required />
          <Field name="firm" label="Firm or Organization" required />
          <Field name="email" label="Email of Record" type="email" required />
          <Field name="phone" label="Telephone" type="tel" />
          <Field name="jurisdiction" label="Jurisdiction" placeholder="e.g. TX" />
          <Field name="role" label="Role" placeholder="Counsel · Officer · Examiner" />

          <label className="sm:col-span-2 flex flex-col gap-2">
            <span className="ledger-sm">SUBJECT · OF · INQUIRY</span>
            <select
              name="subject"
              className="border border-ink bg-paper px-3 py-3 font-mono text-sm uppercase tracking-stamp"
              defaultValue=""
            >
              <option value="" disabled>
                Select a subject
              </option>
              <option value="counsel">Request Counsel Engagement</option>
              <option value="audit">Examiner / Audit Production</option>
              <option value="cocounsel">Co-Counsel Inquiry</option>
              <option value="press">Press Inquiry (Written Reply Only)</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className="sm:col-span-2 flex flex-col gap-2">
            <span className="ledger-sm">STATEMENT · OF · MATTER</span>
            <textarea
              name="matter"
              rows={6}
              required
              placeholder="Describe the matter, the jurisdiction(s), the regulator (if any), and the requested response window."
              className="border border-ink bg-paper px-3 py-3 font-body text-sm leading-relaxed"
            />
          </label>

          <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-ink">
            <div className="ledger-sm opacity-70 max-w-md">
              By submitting, the counterparty acknowledges that no
              attorney-client relationship is formed until a written engagement
              letter is countersigned by counsel.
            </div>
            <Button type="submit" variant="primary" size="lg">
              File Intake →
            </Button>
          </div>
        </form>

        <aside className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="border border-ink p-6 bg-paper">
            <div className="ledger-sm mb-2">CHAMBERS · OF · COUNSEL</div>
            <h3 className="font-display text-2xl leading-tight mb-3">
              The firm is reached in writing.
            </h3>
            <ul className="font-body text-sm space-y-2 text-ink-wash">
              <li>counsel@brownandsullivan.example</li>
              <li>+1 · 512 · TBD · TBD</li>
              <li>One Congress Avenue · Austin · Texas</li>
            </ul>
          </div>
          <div className="border border-ink p-6 bg-ink text-paper-cream">
            <div className="ledger-sm mb-2 opacity-80">
              EXAMINER · INQUIRIES
            </div>
            <p className="font-display italic text-lg leading-relaxed">
              "An examiner with written authority of inquiry is owed a prompt
              and dignified response. We endeavor to deliver one."
            </p>
            <ul className="ledger-sm mt-4 space-y-1 opacity-80">
              <li>· STATE DOI</li>
              <li>· CMS</li>
              <li>· HHS · OCR</li>
              <li>· FTC</li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="ledger-sm">{label.toUpperCase()}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="border border-ink bg-paper px-3 py-3 font-body text-sm"
      />
    </label>
  );
}
