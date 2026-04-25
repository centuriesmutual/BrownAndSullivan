import { LinkButton } from "@/components/ui/button";

export function MinimalCta() {
  return (
    <section className="section-y">
      <div className="container-grid">
        <div className="mx-auto max-w-2xl text-center">
          <p className="ledger-sm mb-4">Engagement</p>
          <h2 className="display-section">Engagements are accepted on a limited basis.</h2>
          <p className="mt-4 text-base leading-7 text-ink-wash">
            Consumers, licensed agents, and carrier partners may request an
            appointment for review by Brown &amp; Sullivan.
          </p>
          <div className="mt-8">
            <LinkButton href="/contact" size="lg">
              Request Appointment
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
