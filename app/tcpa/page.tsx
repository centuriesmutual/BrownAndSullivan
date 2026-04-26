import { notFound } from "next/navigation";
import { ComplianceProgramDetail } from "@/components/compliance/compliance-program-detail";
import { getComplianceProgram } from "@/content/compliance-programs";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "TCPA · Brown & Sullivan",
  description:
    "Telephone Consumer Protection Act: consent, DNC, dialer policy, and retention at Brown & Sullivan.",
  path: "/tcpa",
});

export default function TcpaPage() {
  const program = getComplianceProgram("tcpa");
  if (!program) notFound();
  return <ComplianceProgramDetail program={program} />;
}
