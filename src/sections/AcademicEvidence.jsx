import DownloadCVButton from "../components/DownloadCVButton";
import GridWorldDemo from "../components/GridWorldDemo";
import PdfViewer from "../components/PdfViewer";
import Section from "../components/Section";
import { moduleAchievements } from "../data/achievements";
import { academicItems } from "../data/academic";

export default function AcademicEvidence() {
  return (
    <Section
      id="academic"
      label="Education"
      title="Academic evidence"
      intro="My current academic status, work and willingness to relocate to the UK for a placement year"
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
        <h3 className="achievements-heading">Module achievements</h3>
        <p className="achievements-intro">
          Verified module outcomes from the University of Hertfordshire — full
          detail on the CV.
        </p>
        <div className="achievements-grid">
          {moduleAchievements.map(
            ({ id, title, subtitle, score, detail }) => (
              <article key={id} className="achievement-card panel">
                <p className="achievement-score">{score}</p>
                <h4 className="achievement-title">{title}</h4>
                <p className="achievement-subtitle">{subtitle}</p>
                <p className="achievement-detail">{detail}</p>
              </article>
            ),
          )}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="achievements-heading">Applied AI — grid world</h3>
        <p className="achievements-intro">
          From the Artificial Intelligence module (84% final exam). Compare how
          random, ethical, and exploitative agents behave on the same
          reversible environment.
        </p>
        <div className="mt-5">
          <GridWorldDemo />
        </div>
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
