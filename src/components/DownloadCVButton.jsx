import { supabase } from "../lib/supabaseClient";

export default function DownloadCVButton({ className = "" }) {
  const { data } = supabase.storage
    .from("cv")
    .getPublicUrl("latest-cv.pdf");

  const cvUrl = data?.publicUrl;

  async function handleDownload() {
    if (!cvUrl) {
      window.open("/Nohim-hasitha-cv.pdf", "_blank");
      return;
    }

    try {
      const response = await fetch(`${cvUrl}?v=${Date.now()}`);
      const contentType = response.headers.get("content-type");

      if (!response.ok || !contentType?.includes("application/pdf")) {
        throw new Error("Not a PDF");
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Nohim-Hasitha-CV.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(cvUrl, "_blank", "noopener,noreferrer");
    }
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
