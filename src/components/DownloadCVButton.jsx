import { downloadCv } from "../lib/cvUrl";

export default function DownloadCVButton({ className = "" }) {
  async function handleDownload() {
    await downloadCv();
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      className={`btn btn-primary ${className}`}
    >
      Download CV
    </button>
  );
}
