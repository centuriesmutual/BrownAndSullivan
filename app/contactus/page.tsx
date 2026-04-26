import { Mail, Phone } from "lucide-react";
import { PageTitle } from "@/components/ui/page-title";

const EMAIL = "counsel@brownandsullivan.example";
const PHONE_DISPLAY = "+1 (806) 555-0140";
const PHONE_TEL = "+18065550140";

export const metadata = {
  title: "Contact Us · Brown & Sullivan",
  description:
    "Telephone and email of record for Brown & Sullivan. No web form; reach the firm directly.",
};

export default function ContactUsPage() {
  return (
    <>
      <PageTitle
        volume={3}
        chapter={3}
        eyebrow="CONTACT · US"
        title="Reach the firm directly."
        subtitle="Use the email or telephone of record below. This page does not host a web form. For a structured first note, you may also use the engagement desk on the home page, which opens your mail client."
        meta={["NO · WEB · FORM"]}
      />

      <section className="container-grid border-b border-ink py-12">
        <div className="max-w-lg border border-ink bg-paper-cream p-8">
          <h2 className="ledger-sm mb-6">DIRECT · CHANNELS</h2>
          <ul className="flex flex-col gap-6 font-body text-ink">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-start gap-3 text-ink transition hover:opacity-80"
              >
                <Mail
                  className="mt-0.5 h-5 w-5 shrink-0 text-ink/70"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span>
                  <span className="block text-xs font-medium uppercase tracking-[0.14em] text-ink/55">
                    Email
                  </span>
                  <span className="mt-1 block text-base">{EMAIL}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${PHONE_TEL}`}
                className="group flex items-start gap-3 text-ink transition hover:opacity-80"
              >
                <Phone
                  className="mt-0.5 h-5 w-5 shrink-0 text-ink/70"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span>
                  <span className="block text-xs font-medium uppercase tracking-[0.14em] text-ink/55">
                    Phone
                  </span>
                  <span className="mt-1 block text-base font-mono tracking-tight">
                    {PHONE_DISPLAY}
                  </span>
                </span>
              </a>
            </li>
          </ul>
          <p className="mt-8 border-t border-ink/15 pt-6 text-xs leading-relaxed text-ink-wash">
            Business days · 9:00–17:00 Central Time, excluding firm holidays. Do
            not send protected health information by unsecured email; follow
            instructions from counsel for secure channels.
          </p>
        </div>
      </section>
    </>
  );
}
