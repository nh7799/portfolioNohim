import Button from "../components/Button";
import DownloadCVButton from "../components/DownloadCVButton";
import PdfViewer from "../components/PdfViewer";
import Layout from "./Layout";
import cvPdf from "/Nohim-hasitha-cv.pdf";

export default function Resume() {
  return (
    <>
      <Layout sectionName={"CV/Resume"} id={"contact"}>
        <div className="flex flex-col gap-y-10 justify-center items-center rounded-lg">
          <PdfViewer></PdfViewer>

          <DownloadCVButton className=" bg-blue-700 hover:bg-blue-400 border-0">
            Download CV
          </DownloadCVButton>
        </div>
      </Layout>
    </>
  );
}
