import { lazy, Suspense } from "react";
import Layout from "./Layout";

const PdfViewer = lazy(() => import("../components/PdfViewer"));
const DownloadCVButton = lazy(() => import("../components/DownloadCVButton"));

export default function Resume() {
  return (
    <Layout sectionName="CV/Resume" id="resume">
      <div className="flex flex-col items-center justify-center gap-6 rounded-3xl">
        <Suspense fallback={<p>Loading CV viewer...</p>}>
          <PdfViewer />
          <DownloadCVButton className="border-0 bg-blue-700 text-white hover:bg-blue-500" />
        </Suspense>
      </div>
    </Layout>
  );
}
