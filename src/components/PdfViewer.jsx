import { useEffect, useMemo, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { supabase } from "../lib/supabaseClient";

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

  const latestCvUrl = useMemo(() => {
    const { data } = supabase.storage.from("cv").getPublicUrl("latest-cv.pdf");

    // Cache buster so the browser does not keep showing the old CV
    return `${data.publicUrl}?v=${Date.now()}`;
  }, []);

  const pdfFile = file || latestCvUrl;

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const containerWidth = entries[0].contentRect.width;
      setWidth(containerWidth);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  function handleLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div
      ref={containerRef}
      className="w-full overflow-auto rounded-xl border p-4 max-w-200"
    >
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
              width={Math.min(width - 32, 800)}
            />
          ))}
      </Document>
    </div>
  );
}
