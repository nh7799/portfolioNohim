import { hasSupabaseConfig, supabase } from "../lib/supabaseClient";

export default function DownloadCVButton({ className = "" }) {
  const cvUrl =
    hasSupabaseConfig && supabase
      ? supabase.storage.from("cv").getPublicUrl("latest-cv.pdf").data.publicUrl
      : "/Nohim-hasitha-cv.pdf";

  return (
    <a
      href={cvUrl}
      target="_blank"
      rel="noopener noreferrer"
      download="Nohim-Hasitha-CV.pdf"
      className={`inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[var(--ring)] ${className}`}
    >
      Download Latest CV
    </a>
  );
}
