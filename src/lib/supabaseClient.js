import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

/**
 * Supports both names:
 * - VITE_SUPABASE_ANON_KEY  recommended
 * - VITE_SUPABASE_KEY       your current name
 */
const supabaseKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_KEY;

export const hasSupabaseConfig = Boolean(supabaseUrl && supabaseKey);

const notConfiguredError = new Error("Supabase is not configured");

function createSafeSupabaseMock() {
  const storageBucketMock = {
    getPublicUrl: () => ({
      data: {
        publicUrl: "",
      },
    }),

    createSignedUrl: async () => ({
      data: null,
      error: notConfiguredError,
    }),

    upload: async () => ({
      data: null,
      error: notConfiguredError,
    }),

    download: async () => ({
      data: null,
      error: notConfiguredError,
    }),

    remove: async () => ({
      data: null,
      error: notConfiguredError,
    }),

    list: async () => ({
      data: [],
      error: notConfiguredError,
    }),
  };

  const queryMock = {
    select: () => queryMock,
    insert: () => queryMock,
    update: () => queryMock,
    delete: () => queryMock,
    eq: () => queryMock,
    order: () => queryMock,
    limit: () => queryMock,

    single: async () => ({
      data: null,
      error: notConfiguredError,
    }),

    maybeSingle: async () => ({
      data: null,
      error: notConfiguredError,
    }),

    then: async (resolve) =>
      resolve({
        data: [],
        error: notConfiguredError,
      }),
  };

  return {
    storage: {
      from: () => storageBucketMock,
    },

    from: () => queryMock,

    auth: {
      getUser: async () => ({
        data: { user: null },
        error: notConfiguredError,
      }),

      signInWithPassword: async () => ({
        data: null,
        error: notConfiguredError,
      }),

      signOut: async () => ({
        error: null,
      }),
    },
  };
}

export const supabase = hasSupabaseConfig
  ? createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  : createSafeSupabaseMock();

if (!hasSupabaseConfig) {
  console.warn(
    "Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY or VITE_SUPABASE_KEY in Vercel, then redeploy."
  );
}