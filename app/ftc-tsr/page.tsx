import { notFound } from "next/navigation";
import { ComplianceProgramDetail } from "@/components/compliance/compliance-program-detail";
import { getComplianceProgram } from "@/content/compliance-programs";

export const metadata = {
  title: "FTC TSR · Brown & Sullivan",
  description:
    "FTC Telemarketing Sales Rule: disclosures, caller ID, abandoned calls, and recordkeeping at Brown & Sullivan.",
};

export default function FtcTsrPage() {
  const program = getComplianceProgram("tsr");
  if (!program) notFound();
  return <ComplianceProgramDetail program={program} />;
}
