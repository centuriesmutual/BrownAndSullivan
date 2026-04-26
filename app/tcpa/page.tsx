import { notFound } from "next/navigation";
import { ComplianceProgramDetail } from "@/components/compliance/compliance-program-detail";
import { getComplianceProgram } from "@/content/compliance-programs";

export const metadata = {
  title: "TCPA · Brown & Sullivan",
  description:
    "Telephone Consumer Protection Act: consent, DNC, dialer policy, and retention at Brown & Sullivan.",
};

export default function TcpaPage() {
  const program = getComplianceProgram("tcpa");
  if (!program) notFound();
  return <ComplianceProgramDetail program={program} />;
}
