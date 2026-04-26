import { JurisdictionPills } from "@/components/sections/home/jurisdiction-pills";
import { MinimalCta } from "@/components/sections/home/minimal-cta";
import { MinimalHero } from "@/components/sections/home/minimal-hero";
import { WorkflowSystem } from "@/components/sections/home/workflow-system";

export default function HomePage() {
  return (
    <>
      <MinimalHero />
      <WorkflowSystem />
      <JurisdictionPills />
      <MinimalCta />
    </>
  );
}
