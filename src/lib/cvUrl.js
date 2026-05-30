import { hasSupabaseConfig, supabase } from "./supabaseClient";

export const LOCAL_CV_PATH = "/Nohim-hasitha-cv.pdf";
export const CV_STORAGE_BUCKET = "cv";
export const CV_STORAGE_OBJECT = "latest-cv.pdf";
export const CV_DOWNLOAD_NAME = "Nohim-Hasitha-CV.pdf";

let cachedUrl = null;
let resolvePromise = null;

export function getSupabaseCvPublicUrl() {
  if (!hasSupabaseConfig) return null;

  const { data } = supabase.storage
    .from(CV_STORAGE_BUCKET)
    .getPublicUrl(CV_STORAGE_OBJECT);

  return data?.publicUrl || null;
}

function withCacheBuster(url) {
  if (url.startsWith("/")) {
    return `${url}?v=${Date.now()}`;
  }
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}v=${Date.now()}`;
}

async function isReachablePdf(url) {
  try {
    const response = await fetch(withCacheBuster(url), {
      method: "GET",
      cache: "no-store",
      headers: { Range: "bytes=0-4" },
    });

    if (!response.ok && response.status !== 206) {
      return false;
    }

    const contentType = response.headers.get("content-type") ?? "";
    if (
      contentType.includes("application/pdf") ||
      contentType.includes("octet-stream")
    ) {
      return true;
    }

    const buffer = await response.arrayBuffer();
    const bytes = new Uint8Array(buffer);
    return (
      bytes.length >= 4 &&
      bytes[0] === 0x25 &&
      bytes[1] === 0x50 &&
      bytes[2] === 0x44 &&
      bytes[3] === 0x46
    );
  } catch {
    return false;
  }
}

/** Resolve CV URL: Supabase public URL when reachable, otherwise local static PDF. */
export async function resolveCvUrl({ forceRefresh = false } = {}) {
  if (!forceRefresh && cachedUrl) {
    return cachedUrl;
  }

  if (!forceRefresh && resolvePromise) {
    return resolvePromise;
  }

  resolvePromise = (async () => {
    const supabaseUrl = getSupabaseCvPublicUrl();

    if (supabaseUrl && (await isReachablePdf(supabaseUrl))) {
      cachedUrl = supabaseUrl;
      return supabaseUrl;
    }

    cachedUrl = LOCAL_CV_PATH;
    return LOCAL_CV_PATH;
  })();

  try {
    return await resolvePromise;
  } finally {
    resolvePromise = null;
  }
}

export function invalidateCvUrlCache() {
  cachedUrl = null;
}

function triggerBlobDownload(blob) {
  const blobUrl = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = blobUrl;
  link.download = CV_DOWNLOAD_NAME;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(blobUrl);
}

async function fetchPdfBlob(url) {
  const response = await fetch(withCacheBuster(url), { cache: "no-store" });

  if (!response.ok) {
    throw new Error("CV fetch failed");
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (
    !contentType.includes("application/pdf") &&
    !contentType.includes("octet-stream")
  ) {
    throw new Error("CV response is not a PDF");
  }

  return response.blob();
}

/** Download CV — tries resolved URL, then local fallback on failure. */
export async function downloadCv() {
  const primaryUrl = await resolveCvUrl();

  try {
    triggerBlobDownload(await fetchPdfBlob(primaryUrl));
    return primaryUrl;
  } catch {
    if (primaryUrl !== LOCAL_CV_PATH) {
      invalidateCvUrlCache();
      try {
        triggerBlobDownload(await fetchPdfBlob(LOCAL_CV_PATH));
        cachedUrl = LOCAL_CV_PATH;
        return LOCAL_CV_PATH;
      } catch {
        window.open(LOCAL_CV_PATH, "_blank", "noopener,noreferrer");
        return LOCAL_CV_PATH;
      }
    }

    window.open(LOCAL_CV_PATH, "_blank", "noopener,noreferrer");
    return LOCAL_CV_PATH;
  }
}

/** URL suitable for react-pdf / iframe preview. */
export async function resolveCvPreviewUrl({ forceRefresh = false } = {}) {
  const url = await resolveCvUrl({ forceRefresh });
  return withCacheBuster(url);
}
