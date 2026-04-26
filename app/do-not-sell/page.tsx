import Link from "next/link";
import { PageTitle } from "@/components/ui/page-title";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "Do Not Sell · Brown & Sullivan",
  description:
    "Opt-out of the sale or sharing of personal information under applicable state privacy laws. Process and contact of record for Brown & Sullivan.",
  path: "/do-not-sell",
});

export default function DoNotSellPage() {
  return (
    <>
      <PageTitle
        volume={4}
        chapter={1}
        eyebrow="PRIVACY · OPT-OUT"
        title="Do not sell or share my personal information."
        subtitle={
          "Certain state laws give residents the right to direct a business not to sell their personal information and, in some jurisdictions, to limit the use of sensitive personal information for certain purposes. Brown & Sullivan operates in regulated health insurance distribution; this page describes how to exercise an opt-out where that right applies."
        }
        meta={["WRITTEN · REQUEST · OF · RECORD", "NO · DISCRIMINATION"]}
      />

      <section className="container-grid border-b border-ink py-12">
        <div className="grid max-w-3xl gap-6 font-body leading-relaxed text-ink-wash">
          <p>
            <span className="font-medium text-ink">Who may use this path.</span>{" "}
            If you are a California resident (or a resident of another state that
            provides a comparable right) and you believe Brown &amp; Sullivan
            has collected personal information about you in a context covered by
            that law, you may submit a request not to sell or share your
            personal information, or to limit use of sensitive personal
            information, as applicable.
          </p>
          <p>
            <span className="font-medium text-ink">How to submit.</span> The
            firm does not operate a marketing web form for this purpose. Send a
            written request by email or mail with enough information to allow
            us to verify your identity and, if you are an agent, your
            relationship to any file we may hold. We will respond within the
            time frame required by applicable law.
          </p>
          <p>
            <span className="font-medium text-ink">Contact of record.</span> Use
            the{" "}
            <Link
              href="/contactus"
              className="text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
            >
              contact page
            </Link>{" "}
            for email and telephone. Do not include bank account, health, or
            other sensitive details beyond what is necessary to verify the
            request; we may request additional information to confirm
            identity.
          </p>
          <p className="text-sm">
            <span className="font-medium text-ink">Authorized agents.</span> If
            you are submitting a request on behalf of another person, the firm
            may require a signed agency authorization and proof of identity.
          </p>
        </div>
      </section>
    </>
  );
}
