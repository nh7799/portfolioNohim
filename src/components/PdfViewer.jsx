import { useEffect, useMemo, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { hasSupabaseConfig, supabase } from "../lib/supabaseClient";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function PdfViewer({ file }) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [numPages, setNumPages] = useState(null);

  const pdfFile = useMemo(() => {
    if (file) return file;

    if (hasSupabaseConfig && supabase) {
      const { data } = supabase.storage.from("cv").getPublicUrl("latest-cv.pdf");
      return data.publicUrl;
    }

    return "/Nohim-hasitha-cv.pdf";
  }, [file]);

  useEffect(() => {
    if (!containerRef.current) return undefined;

    const resizeObserver = new ResizeObserver((entries) => {
      const nextWidth = entries[0]?.contentRect?.width || 0;
      setWidth(nextWidth);
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  function handleLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div ref={containerRef} className="w-full max-w-5xl overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-sm sm:p-5">
      <div className="mb-4 flex flex-wrap gap-3">
        <a
          href={pdfFile}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-blue-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-500"
        >
          Open CV
        </a>
        <a
          href={pdfFile}
          download="Nohim-Hasitha-CV.pdf"
          className="rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2 text-sm font-bold transition hover:border-[var(--focus)]"
        >
          Download CV
        </a>
      </div>

      <div className="max-h-[78vh] overflow-auto rounded-2xl border border-[var(--border)] bg-white/60 p-2 dark:bg-slate-950/40 sm:p-4">
        <Document
          file={pdfFile}
          onLoadSuccess={handleLoadSuccess}
          loading={<p>Loading CV...</p>}
          error={<p>Could not load CV. Please try opening it directly.</p>}
        >
          {width > 0 &&
            Array.from(new Array(numPages || 0), (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={Math.min(width - 48, 850)}
              />
            ))}
        </Document>
      </div>
    </div>
  );
}
