import Button from "../components/Button";
import PdfViewer from "../components/PdfViewer";
import Layout from "./Layout";
import cvPdf from "/Nohim-hasitha-cv.pdf";

export default function Resume() {
  return (
    <>
      <Layout sectionName={"CV/Resume"} id={"contact"}>
        <div className="flex flex-col gap-y-10 justify-center items-center rounded-lg">
          <PdfViewer file={cvPdf}></PdfViewer>
          <a
            href="/Nohim-hasitha-cv.pdf"
            download="Nohim-hasitha-cv.pdf"
            className="rounded-lg bg-blue-700 px-5 py-3 text-white hover:bg-blue-500"
          >
            <Button className="border-gray-700 bg-blue-700 hover:bg-blue-400">
              Download CV
            </Button>
          </a>
        </div>
      </Layout>
    </>
  );
}
