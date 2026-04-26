import { notFound } from "next/navigation";
import { ComplianceProgramDetail } from "@/components/compliance/compliance-program-detail";
import { getComplianceProgram } from "@/content/compliance-programs";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "FTC TSR · Brown & Sullivan",
  description:
    "FTC Telemarketing Sales Rule: disclosures, caller ID, abandoned calls, and recordkeeping at Brown & Sullivan.",
  path: "/ftc-tsr",
});

export default function FtcTsrPage() {
  const program = getComplianceProgram("tsr");
  if (!program) notFound();
  return <ComplianceProgramDetail program={program} />;
}
