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
 * Do not cache aggressively.
 * The issue you are seeing is usually caused by old preview/cache behaviour.
 */
let cachedRemoteUrl = null;
let cachedRemoteUrlAt = 0;
let resolvePromise = null;

const REMOTE_URL_CACHE_MS = 10 * 1000;

export function getSupabaseCvPublicUrl() {
  if (!hasSupabaseConfig || !supabase) return null;

  const { data } = supabase.storage
    .from(CV_STORAGE_BUCKET)
    .getPublicUrl(CV_STORAGE_OBJECT);

  return data?.publicUrl || null;
}

/**
 * Signed URLs are better for avoiding stale previews because
 * they generate a fresh URL instead of always using the exact same public URL.
 */
async function getSupabaseCvSignedUrl() {
  if (!hasSupabaseConfig || !supabase) return null;

  try {
    const { data, error } = await supabase.storage
      .from(CV_STORAGE_BUCKET)
      .createSignedUrl(CV_STORAGE_OBJECT, 60);

    if (error) return null;

    return data?.signedUrl || null;
  } catch {
    return null;
  }
}

async function getBestSupabaseCvUrl() {
  const signedUrl = await getSupabaseCvSignedUrl();

  if (signedUrl) {
    return signedUrl;
  }

  return getSupabaseCvPublicUrl();
}

function withCacheBuster(url, key = "v") {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}${key}=${Date.now()}`;
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

async function fetchPdfBlob(url) {
  const response = await fetch(withCacheBuster(url, "download"), {
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
 * Resolve CV URL:
 * 1. Prefer Supabase
 * 2. Only use local fallback if Supabase URL cannot be created
 *
 * Important:
 * This version does NOT fetch-check Supabase before previewing,
 * because fetch checks can fail and wrongly force the site back to local.
 */
export async function resolveCvUrl({ forceRefresh = false } = {}) {
  const now = Date.now();

  if (
    !forceRefresh &&
    cachedRemoteUrl &&
    now - cachedRemoteUrlAt < REMOTE_URL_CACHE_MS
  ) {
    return cachedRemoteUrl;
  }

  if (!forceRefresh && resolvePromise) {
    return resolvePromise;
  }

  resolvePromise = (async () => {
    const supabaseUrl = await getBestSupabaseCvUrl();

    if (supabaseUrl) {
      cachedRemoteUrl = supabaseUrl;
      cachedRemoteUrlAt = Date.now();
      return supabaseUrl;
    }

    cachedRemoteUrl = null;
    cachedRemoteUrlAt = 0;

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
  cachedRemoteUrlAt = 0;
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

function triggerDirectDownload(url) {
  const link = document.createElement("a");
  link.href = withCacheBuster(url, "direct");
  link.download = CV_DOWNLOAD_NAME;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

/**
 * Download CV:
 * 1. Try fresh Supabase URL
 * 2. Try blob download
 * 3. If browser blocks blob/CORS, open direct Supabase URL
 * 4. Final fallback: local PDF
 */
export async function downloadCv() {
  invalidateCvUrlCache();

  const primaryUrl = await resolveCvUrl({ forceRefresh: true });

  try {
    const blob = await fetchPdfBlob(primaryUrl);
    triggerBlobDownload(blob);
    return primaryUrl;
  } catch {
    if (primaryUrl !== LOCAL_CV_PATH) {
      try {
        triggerDirectDownload(primaryUrl);
        return primaryUrl;
      } catch {
        // Continue to local fallback
      }
    }

    try {
      const localBlob = await fetchPdfBlob(LOCAL_CV_PATH);
      triggerBlobDownload(localBlob);
      return LOCAL_CV_PATH;
    } catch {
      window.open(
        withCacheBuster(LOCAL_CV_PATH, "fallback"),
        "_blank",
        "noopener,noreferrer"
      );
      return LOCAL_CV_PATH;
    }
  }
}

/**
 * URL suitable for iframe / react-pdf preview.
 *
 * This always forces a fresh preview URL.
 */
export async function resolveCvPreviewUrl({ forceRefresh = true } = {}) {
  const url = await resolveCvUrl({ forceRefresh });
  return withCacheBuster(url, "preview");
}