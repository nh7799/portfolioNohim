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
          <a
            href="/Nohim-hasitha-cv.pdf"
            download="Nohim-hasitha-cv.pdf"
            className="rounded-lg  px-5 py-3 text-white"
          >
            <DownloadCVButton className=" bg-blue-700 hover:bg-blue-400 border-0">
              Download CV
            </DownloadCVButton>
          </a>
        </div>
      </Layout>
    </>
  );
}
