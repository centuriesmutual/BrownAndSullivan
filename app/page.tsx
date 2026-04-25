import { AdvisoryModules } from "@/components/sections/home/advisory-modules";
import { AuditSystem } from "@/components/sections/home/audit-system";
import { DisclosureAccordion } from "@/components/sections/home/disclosure-accordion";
import { JurisdictionPills } from "@/components/sections/home/jurisdiction-pills";
import { MinimalCta } from "@/components/sections/home/minimal-cta";
import { MinimalHero } from "@/components/sections/home/minimal-hero";
import { WorkflowSystem } from "@/components/sections/home/workflow-system";

export default function HomePage() {
  return (
    <>
      <MinimalHero />
      <DisclosureAccordion />
      <AdvisoryModules />
      <WorkflowSystem />
      <AuditSystem />
      <JurisdictionPills />
      <MinimalCta />
    </>
  );
}
