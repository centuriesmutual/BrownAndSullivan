import { notFound } from "next/navigation";
import { ComplianceProgramDetail } from "@/components/compliance/compliance-program-detail";
import { getComplianceProgram } from "@/content/compliance-programs";

export const metadata = {
  title: "HIPAA · Brown & Sullivan",
  description:
    "HIPAA Privacy & Security: BAAs, minimum necessary, encryption, and breach response at Brown & Sullivan.",
};

export default function HipaaPage() {
  const program = getComplianceProgram("hipaa");
  if (!program) notFound();
  return <ComplianceProgramDetail program={program} />;
}
