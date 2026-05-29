import { supabase } from "../lib/supabaseClient";

export default function DownloadCVButton({ className = "" }) {
  const { data } = supabase.storage
    .from("cv")
    .getPublicUrl("latest-cv.pdf");

  const cvUrl = data?.publicUrl;

  async function handleDownload() {
    if (!cvUrl) {
      alert("CV is not available right now.");
      return;
    }

    try {
      const response = await fetch(`${cvUrl}?v=${Date.now()}`);

      const contentType = response.headers.get("content-type");

      if (!response.ok || !contentType?.includes("application/pdf")) {
        throw new Error("The file returned is not a PDF.");
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
    } catch (error) {
      console.error("CV download failed:", error);
      window.open(cvUrl, "_blank", "noopener,noreferrer");
    }
  }

  if (!cvUrl) {
    return (
      <button
        type="button"
        disabled
        className={`cursor-not-allowed rounded-lg bg-gray-400 px-5 py-3 text-white ${className}`}
      >
        CV Unavailable
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      className={`rounded-lg bg-blue-700 px-5 py-3 text-white hover:bg-blue-500 ${className}`}
    >
      Download CV
    </button>
  );
}