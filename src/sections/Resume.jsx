import Button from "../components/Button";
import PdfViewer from "../components/PdfViewer";
import Layout from "./Layout";
import cvPdf from "../assets/Nohim-hasitha-cv.pdf";

export default function Resume() {
  return (
    <>
      <Layout sectionName={"CV/Resume"} id={"contact"}>
        <div className="flex flex-col gap-y-10 justify-center items-center rounded-lg">
          <PdfViewer file={cvPdf}></PdfViewer>
          <a href={cvPdf} download="Nohim-CV.pdf">
            <Button className="border-gray-700 bg-blue-700 hover:bg-blue-400">
              Download CV
            </Button>
          </a>
        </div>
      </Layout>
    </>
  );
}
