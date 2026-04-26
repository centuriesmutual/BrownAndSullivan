import Link from "next/link";
import { PageTitle } from "@/components/ui/page-title";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "New Enrollment · Brown & Sullivan",
  description:
    "How new health insurance enrollments are opened under the firm’s compliance perimeter—Medicare, ACA, and controlled distribution.",
  path: "/new-enrollment",
});

export default function NewEnrollmentPage() {
  return (
    <>
      <PageTitle
        volume={2}
        chapter={3}
        eyebrow="NEW · ENROLLMENT"
        title="A new enrollment is a new file on the table."
        subtitle={
          "Whether the matter is a Medicare plan selection, a Marketplace QHP, or a carrier-specific appointment, Brown &amp; Sullivan requires the same things up front: licensed personnel, a recorded consent path, disclosure where the law says so, and a single evidence chain the firm can produce later."
        }
        meta={["CONTROLLED · INTAKE", "LICENSED · CHANNELS"]}
      />

      <section className="container-grid border-b border-ink py-12">
        <div className="grid max-w-3xl gap-6 font-body leading-relaxed text-ink-wash">
          <p>
            <span className="font-medium text-ink">Consumers and households.</span>{" "}
            This is not a live enrollment or quoting tool. If you need to start
            or change a plan, work with a licensed agent or the carrier using
            their official enrollment channels. The firm can answer policy and
            compliance questions for represented clients, not as a TPA.
          </p>
          <p>
            <span className="font-medium text-ink">Partners and carriers.</span>{" "}
            New book-of-business, EDE, or MGA programs are accepted under
            written engagement, conflicts clearance, and the directory objects
            that describe your model. Expect intake through counsel, not
            self-service upload on this page.
          </p>
          <p>
            <span className="font-medium text-ink">Start a matter.</span> For a
            structured first note, use{" "}
            <Link
              href="/contactus"
              className="text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
            >
              contact of record
            </Link>{" "}
            or the engagement desk on the home page. For technical integrations
            documentation, the separate{" "}
            <Link
              href="/integrations"
              className="text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
            >
              Integrations
            </Link>{" "}
            index still describes platform bridges.
          </p>
        </div>
      </section>
    </>
  );
}
