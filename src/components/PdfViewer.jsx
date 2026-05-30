import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { LOCAL_CV_PATH, resolveCvPreviewUrl } from "../lib/cvUrl";

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
  const [pdfFile, setPdfFile] = useState(null);
  const [previewFailed, setPreviewFailed] = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadPreview() {
      setNumPages(null);
      setPreviewFailed(false);

      if (file) {
        setPdfFile(file);
        setUsingFallback(false);
        return;
      }

      try {
        const previewUrl = await resolveCvPreviewUrl({
          forceRefresh: true,
        });

        if (!cancelled) {
          setPdfFile(previewUrl);
          setUsingFallback(previewUrl.includes(LOCAL_CV_PATH));
        }
      } catch {
        if (!cancelled) {
          setPdfFile(null);
          setUsingFallback(false);
          setPreviewFailed(true);
        }
      }
    }

    loadPreview();

    return () => {
      cancelled = true;
    };
  }, [file]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const ro = new ResizeObserver(([entry]) =>
      setWidth(entry.contentRect.width),
    );

    ro.observe(node);

    return () => ro.disconnect();
  }, []);

  function handleDocumentError(error) {
    console.error("CV preview failed:", error);
    setPreviewFailed(true);
  }

  const pageWidth = width > 0 ? Math.min(width - 32, 680) : undefined;

  return (
    <div ref={containerRef} className="panel pdf-shell p-4">
      {previewFailed ? (
        <p className="py-6 text-sm text-text-secondary">
          Preview unavailable — use Download CV above.
        </p>
      ) : !pdfFile ? (
        <p className="py-6 text-sm text-text-secondary">Loading CV…</p>
      ) : (
        <Document
          key={pdfFile}
          file={pdfFile}
          onLoadSuccess={({ numPages: n }) => {
            setNumPages(n);
            setPreviewFailed(false);
          }}
          onLoadError={handleDocumentError}
          loading={<p className="py-6 text-sm text-text-secondary">Loading CV…</p>}
          error={
            <p className="py-6 text-sm text-text-secondary">
              Preview unavailable — use Download CV above.
            </p>
          }
        >
          {pageWidth &&
            pdfFile &&
            Array.from({ length: numPages || 0 }, (_, i) => (
              <div key={`${pdfFile}-${i}`} className="mb-4 flex justify-center last:mb-0">
                <Page pageNumber={i + 1} width={pageWidth} />
              </div>
            ))}
        </Document>
      )}
    </div>
  );
}