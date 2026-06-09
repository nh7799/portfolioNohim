import Section from "../components/Section";
import { LOCAL_CERTIFICATES_PATH , ORACLE_CERTIFICATES_PATH} from "../lib/cvUrl";
import PdfViewer from "../components/PdfViewer";

export default function Certificates({}) {
  return (
    <Section
      id="certificates"
      label="Certificates"
      title="Certificates"
      intro="Certificates related to my academic and professional career"
    >
        <div className="flex flex-col gap-6 sm:gap-8">
        <PdfViewer file={ORACLE_CERTIFICATES_PATH} />
        <PdfViewer file={LOCAL_CERTIFICATES_PATH} />
        </div>
    </Section>
  );
}
