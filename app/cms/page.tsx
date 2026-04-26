import { notFound } from "next/navigation";
import { ComplianceProgramDetail } from "@/components/compliance/compliance-program-detail";
import { getComplianceProgram } from "@/content/compliance-programs";

export const metadata = {
  title: "CMS · Brown & Sullivan",
  description:
    "CMS Medicare Communications & Marketing Guidelines: TPMO, SOA, recording, and file-and-use at Brown & Sullivan.",
};

export default function CmsPage() {
  const program = getComplianceProgram("cms");
  if (!program) notFound();
  return <ComplianceProgramDetail program={program} />;
}
