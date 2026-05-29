import DownloadCVButton from "../components/DownloadCVButton";
import PdfViewer from "../components/PdfViewer";
import Section from "../components/Section";
import { academicItems } from "../data/academic";

export default function AcademicEvidence() {
  return (
    <Section
      id="academic"
      label="Education"
      title="Academic evidence"
      intro="Degree context and where to verify qualifications. CV includes full history."
    >
      <div className="panel px-5 sm:px-6">
        <dl>
          {academicItems.map(({ label, value }) => (
            <div key={label} className="snapshot-row">
              <dt className="snapshot-label">{label}</dt>
              <dd className="snapshot-value">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-10">
        <h3 className="text-sm font-semibold text-text">CV preview</h3>
        <p className="mt-1 text-sm text-text-secondary">
          Download for applications. Preview loads below when available.
        </p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
          <DownloadCVButton />
        </div>
        <div className="pdf-shell mt-6">
          <PdfViewer />
        </div>
      </div>
    </Section>
  );
}
