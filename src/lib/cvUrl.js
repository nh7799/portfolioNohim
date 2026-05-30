import { hasSupabaseConfig, supabase } from "./supabaseClient";

/**
 * Local fallback file must be here:
 *
 * public/Nohim-hasitha-cv.pdf
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

/**
 * Only cache the working remote URL.
 * Do NOT permanently cache the local fallback.
 */
let cachedRemoteUrl = null;
let lastRemoteCheckAt = 0;
let resolvePromise = null;

const REMOTE_RECHECK_INTERVAL_MS = 30 * 1000;

export function getSupabaseCvPublicUrl() {
  if (!hasSupabaseConfig || !supabase) return null;

  const { data } = supabase.storage
    .from(CV_STORAGE_BUCKET)
    .getPublicUrl(CV_STORAGE_OBJECT);

  return data?.publicUrl || null;
}

function withCacheBuster(url) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}v=${Date.now()}`;
}

async function isPdfBlob(blob) {
  const buffer = await blob.slice(0, 4).arrayBuffer();
  const bytes = new Uint8Array(buffer);

  return (
    bytes.length >= 4 &&
    bytes[0] === 0x25 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x44 &&
    bytes[3] === 0x46
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
 * 1. Check Supabase remote CV
 * 2. Use remote if available
 * 3. Otherwise fallback to local PDF
 *
 * Important:
 * Local fallback is NOT permanently cached.
 */
export async function resolveCvUrl({ forceRefresh = false } = {}) {
  const now = Date.now();

  if (
    !forceRefresh &&
    cachedRemoteUrl &&
    now - lastRemoteCheckAt < REMOTE_RECHECK_INTERVAL_MS
  ) {
    return cachedRemoteUrl;
  }

  if (!forceRefresh && resolvePromise) {
    return resolvePromise;
  }

  resolvePromise = (async () => {
    const supabaseUrl = getSupabaseCvPublicUrl();

    if (supabaseUrl) {
      const remoteWorks = await isReachablePdf(supabaseUrl);

      if (remoteWorks) {
        cachedRemoteUrl = supabaseUrl;
        lastRemoteCheckAt = Date.now();
        return supabaseUrl;
      }
    }

    cachedRemoteUrl = null;
    lastRemoteCheckAt = Date.now();

    return LOCAL_CV_PATH;
  })();

  try {
    return await resolvePromise;
  } finally {
    resolvePromise = null;
  }
}

export function invalidateCvUrlCache() {
  cachedRemoteUrl = null;
  lastRemoteCheckAt = 0;
  resolvePromise = null;
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
 * Always force-check Supabase when the user clicks download.
 */
export async function downloadCv() {
  const primaryUrl = await resolveCvUrl({ forceRefresh: true });

  try {
    const blob = await fetchPdfBlob(primaryUrl);
    triggerBlobDownload(blob);
    return primaryUrl;
  } catch {
    try {
      const localBlob = await fetchPdfBlob(LOCAL_CV_PATH);
      triggerBlobDownload(localBlob);
      return LOCAL_CV_PATH;
    } catch {
      window.open(LOCAL_CV_PATH, "_blank", "noopener,noreferrer");
      return LOCAL_CV_PATH;
    }
  }
}

/**
 * URL suitable for iframe / react-pdf preview.
 */
export async function resolveCvPreviewUrl({ forceRefresh = false } = {}) {
  const url = await resolveCvUrl({ forceRefresh });
  return withCacheBuster(url);
}