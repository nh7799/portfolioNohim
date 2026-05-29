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

  const pdfFile =
    useMemo(() => {
      if (file) return file;
      if (!hasSupabaseConfig || !supabase) return null;
      const { data } = supabase.storage
        .from("cv")
        .getPublicUrl("latest-cv.pdf");
      return `${data.publicUrl}?v=${Date.now()}`;
    }, [file]) || "/Nohim-hasitha-cv.pdf";

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const ro = new ResizeObserver(([entry]) =>
      setWidth(entry.contentRect.width),
    );
    ro.observe(node);
    return () => ro.disconnect();
  }, []);

  const pageWidth = width > 0 ? Math.min(width - 32, 680) : undefined;

  return (
    <div ref={containerRef} className="panel pdf-shell p-4">
      <Document
        file={pdfFile}
        onLoadSuccess={({ numPages: n }) => setNumPages(n)}
        loading={<p className="py-6 text-sm text-text-secondary">Loading CV…</p>}
        error={
          <p className="py-6 text-sm text-text-secondary">
            Preview unavailable — use Download CV above.
          </p>
        }
      >
        {pageWidth &&
          Array.from({ length: numPages || 0 }, (_, i) => (
            <div key={i} className="mb-4 flex justify-center last:mb-0">
              <Page pageNumber={i + 1} width={pageWidth} />
            </div>
          ))}
      </Document>
    </div>
  );
}
