import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageTitle } from "@/components/ui/page-title";
import { pageMetadata } from "@/lib/seo-metadata";
import { FirmSiteNav } from "@/components/firm/firm-site-nav";
import Link from "next/link";

const EMAIL = "counsel@brownandsullivan.example";
const PHONE_DISPLAY = "+1 (806) 555-0140";
const PHONE_TEL = "+18065550140";

const hours = [
  { label: "Mon–Fri", value: "9:00–17:00 CT" },
  { label: "Holidays", value: "Firm calendar" },
  { label: "First response", value: "Business days" },
] as const;

export const metadata = pageMetadata({
  title: "Help Desk · Brown & Sullivan",
  description:
    "Telephone and email of record for Brown & Sullivan. No web form; reach the firm directly.",
  path: "/contactus",
});

export default function ContactUsPage() {
  return (
    <>
      <PageTitle
        volume={3}
        chapter={3}
        eyebrow="HELP · DESK"
        title="Reach the firm directly."
        subtitle="Use the email or telephone of record below. This page does not host a web form. For a structured first note, you may also use the engagement desk on the home page, which opens your mail client."
        meta={["NO · WEB · FORM"]}
      />

      <FirmSiteNav current="contact" />

      <section className="border-b border-ink bg-paper-cream/60">
        <div className="container-grid section-y">
          <div className="grid items-stretch gap-0 overflow-hidden border border-ink bg-paper lg:grid-cols-2">
            <div className="relative min-h-[280px] border-b border-ink lg:min-h-[420px] lg:border-b-0 lg:border-r">
              <Image
                src="/counsel-hero.svg"
                alt=""
                fill
                className="object-cover object-top"
                unoptimized
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" aria-hidden />
              <p className="absolute bottom-4 left-4 right-4 font-mono text-[0.6rem] uppercase leading-relaxed tracking-[0.16em] text-paper/90 drop-shadow">
                COUNSEL · IN · A · SEALED · FILE · FIRST
              </p>
            </div>
            <div className="flex flex-col p-6 sm:p-8 md:p-10">
              <h2 className="ledger-sm mb-6">DIRECT · CHANNELS</h2>
              <ul className="flex flex-1 flex-col gap-6 font-body text-ink">
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="group flex items-start gap-4 rounded-lg p-1 transition hover:bg-paper-cream/80"
                  >
                    <Mail
                      className="mt-0.5 h-6 w-6 shrink-0 text-ink/70"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-[0.14em] text-ink/55">
                        Email
                      </span>
                      <span className="mt-1 block break-all text-base">{EMAIL}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="group flex items-start gap-4 rounded-lg p-1 transition hover:bg-paper-cream/80"
                  >
                    <Phone
                      className="mt-0.5 h-6 w-6 shrink-0 text-ink/70"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-[0.14em] text-ink/55">
                        Phone
                      </span>
                      <span className="mt-1 block font-mono text-base tracking-tight">
                        {PHONE_DISPLAY}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-4 p-1">
                  <MapPin
                    className="mt-0.5 h-6 w-6 shrink-0 text-ink/70"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-[0.14em] text-ink/55">
                      Office
                    </span>
                    <span className="mt-1 block text-base text-ink-wash">
                      Lubbock, Texas · By appointment
                    </span>
                  </span>
                </li>
              </ul>
              <p className="mt-8 border-t border-ink/15 pt-6 text-xs leading-relaxed text-ink-wash">
                Do not send protected health information by unsecured email; follow
                instructions from counsel for secure channels. See also{" "}
                <Link
                  href="/legal#privacy-policy"
                  className="text-ink underline decoration-ink/30 underline-offset-2"
                >
                  privacy policy
                </Link>{" "}
                and{" "}
                <Link href="/legal" className="text-ink underline decoration-ink/30 underline-offset-2">
                  legal notices
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-0 border border-ink sm:grid-cols-3">
            {hours.map((row) => (
              <div
                key={row.label}
                className="border-ink/80 px-4 py-5 text-center sm:border-r sm:last:border-r-0"
              >
                <div className="ledger-sm text-ink/55">{row.label}</div>
                <div className="mt-1 font-display text-lg text-ink">{row.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
