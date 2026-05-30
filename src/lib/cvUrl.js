import { hasSupabaseConfig, supabase } from "./supabaseClient";

/**
 * IMPORTANT:
 * Put your PDF here:
 *
 * public/Nohim-hasitha-cv.pdf
 *
 * Do NOT put it inside src/assets if you want this direct URL to work on Vercel.
 */
const PUBLIC_BASE_URL = import.meta.env.BASE_URL || "/";

function joinPublicPath(filename) {
  const base = PUBLIC_BASE_URL.endsWith("/")
    ? PUBLIC_BASE_URL
    : `${PUBLIC_BASE_URL}/`;

  return `${base}${filename}`;
}

export const LOCAL_CV_PATH = joinPublicPath("Nohim-hasitha-cv.pdf");

export const CV_STORAGE_BUCKET = "cv";
export const CV_STORAGE_OBJECT = "latest-cv.pdf";
export const CV_DOWNLOAD_NAME = "Nohim-Hasitha-CV.pdf";

let cachedUrl = null;
let resolvePromise = null;
let cacheVersion = Date.now();

function refreshCacheVersion() {
  cacheVersion = Date.now();
}

export function getSupabaseCvPublicUrl() {
  if (!hasSupabaseConfig || !supabase) return null;

  const { data } = supabase.storage
    .from(CV_STORAGE_BUCKET)
    .getPublicUrl(CV_STORAGE_OBJECT);

  return data?.publicUrl || null;
}

function withCacheBuster(url) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}v=${cacheVersion}`;
}

async function isPdfBlob(blob) {
  const buffer = await blob.slice(0, 4).arrayBuffer();
  const bytes = new Uint8Array(buffer);

  return (
    bytes.length >= 4 &&
    bytes[0] === 0x25 && // %
    bytes[1] === 0x50 && // P
    bytes[2] === 0x44 && // D
    bytes[3] === 0x46    // F
  );
}

async function isReachablePdf(url) {
  try {
    const response = await fetch(withCacheBuster(url), {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      return false;
    }

    const blob = await response.blob();

    const contentType = response.headers.get("content-type") ?? "";

    if (
      contentType.includes("application/pdf") ||
      contentType.includes("application/octet-stream")
    ) {
      return true;
    }

    return await isPdfBlob(blob);
  } catch {
    return false;
  }
}

/**
 * Resolve CV URL:
 * 1. Use Supabase public URL if available and valid
 * 2. Otherwise fallback to the local PDF inside /public
 */
export async function resolveCvUrl({ forceRefresh = false } = {}) {
  if (forceRefresh) {
    invalidateCvUrlCache();
  }

  if (!forceRefresh && cachedUrl) {
    return cachedUrl;
  }

  if (!forceRefresh && resolvePromise) {
    return resolvePromise;
  }

  resolvePromise = (async () => {
    const supabaseUrl = getSupabaseCvPublicUrl();

    if (supabaseUrl) {
      const supabaseWorks = await isReachablePdf(supabaseUrl);

      if (supabaseWorks) {
        cachedUrl = supabaseUrl;
        return supabaseUrl;
      }
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
  resolvePromise = null;
  refreshCacheVersion();
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
  const response = await fetch(withCacheBuster(url), {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("CV fetch failed");
  }

  const blob = await response.blob();

  const contentType = response.headers.get("content-type") ?? "";

  if (
    contentType.includes("application/pdf") ||
    contentType.includes("application/octet-stream")
  ) {
    return blob;
  }

  const validPdf = await isPdfBlob(blob);

  if (!validPdf) {
    throw new Error("CV response is not a valid PDF");
  }

  return blob;
}

/**
 * Download CV:
 * 1. Try resolved URL
 * 2. If Supabase fails, fallback to local public PDF
 * 3. If download fails, open the local PDF in a new tab
 */
export async function downloadCv() {
  const primaryUrl = await resolveCvUrl();

  try {
    const blob = await fetchPdfBlob(primaryUrl);
    triggerBlobDownload(blob);
    return primaryUrl;
  } catch {
    if (primaryUrl !== LOCAL_CV_PATH) {
      invalidateCvUrlCache();

      try {
        const localBlob = await fetchPdfBlob(LOCAL_CV_PATH);
        cachedUrl = LOCAL_CV_PATH;
        triggerBlobDownload(localBlob);
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

/**
 * URL suitable for iframe / react-pdf preview.
 *
 * This returns a cache-busted URL, but the cache version is stable
 * until invalidateCvUrlCache() or forceRefresh is used.
 */
export async function resolveCvPreviewUrl({ forceRefresh = false } = {}) {
  const url = await resolveCvUrl({ forceRefresh });
  return withCacheBuster(url);
}