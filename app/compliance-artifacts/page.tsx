import { PageTitle } from "@/components/ui/page-title";
import {
  FilingExhibitList,
  FilingExhibitRequestBlurb,
} from "@/components/filing-exhibits/filing-exhibit-list";
import { directoryEntries } from "@/content/directory";
import { pageMetadata } from "@/lib/seo-metadata";

const complianceArtifacts = directoryEntries.filter(
  (e) => e.category === "Compliance Artifacts"
);

export const metadata = pageMetadata({
  title: "Compliance Artifacts · Brown & Sullivan",
  description:
    "Sealed compliance artifacts—call records, verifications, SOA, TPMO disclosures, and consent evidence—with regulatory references and attestation request path.",
  path: "/compliance-artifacts",
});

export default function ComplianceArtifactsPage() {
  return (
    <>
      <PageTitle
        volume={1}
        chapter={4}
        eyebrow="COMPLIANCE · ARTIFACTS"
        title="Forms, attestations, and the sealed file."
        subtitle={
          "Examiners, carriers, and counsel use this page to map Brown & Sullivan’s evidence classes before they request copies. Each object below is maintained under a reference code, a review calendar, and the citations that govern production."
        }
        meta={[
          `${complianceArtifacts.length} · ENTRIES · SEALED · CLASSES`,
          "NOT · A · GENERIC · FORM · LIBRARY",
        ]}
      />
      <FilingExhibitRequestBlurb>
        If you are building a file for CMS, a State DOI, a carrier document request,
        or a privilege review, start by identifying the artifact class below. The
        firm does not post blank templates on the public web. Certified excerpts,
        retention attestations, and form packets are released under written
        request and counsel approval, subject to privilege and the duty to
        protect consumer data.
      </FilingExhibitRequestBlurb>
      <FilingExhibitList entries={complianceArtifacts} />
    </>
  );
}
