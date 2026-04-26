import { notFound } from "next/navigation";
import { ComplianceProgramDetail } from "@/components/compliance/compliance-program-detail";
import { getComplianceProgram } from "@/content/compliance-programs";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "HIPAA · Brown & Sullivan",
  description:
    "HIPAA Privacy & Security: BAAs, minimum necessary, encryption, and breach response at Brown & Sullivan.",
  path: "/hipaa",
});

export default function HipaaPage() {
  const program = getComplianceProgram("hipaa");
  if (!program) notFound();
  return <ComplianceProgramDetail program={program} />;
}
