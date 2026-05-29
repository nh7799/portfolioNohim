import DownloadCVButton from "../components/DownloadCVButton";
import PdfViewer from "../components/PdfViewer";
import Reveal from "../components/Reveal";
import Section from "../components/Section";

export default function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="CV"
      description="Download or preview my latest CV. Updated for placement applications."
    >
      <Reveal>
        <div className="flex flex-col gap-6 sm:gap-8">
          <DownloadCVButton />
          <div className="pdf-shell w-full min-w-0">
            <PdfViewer />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
