import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const hasSupabaseConfig = Boolean(supabaseUrl && supabaseKey);

const notConfiguredError = new Error("Supabase is not configured");

function createSafeSupabaseMock() {
  const storageBucketMock = {
    getPublicUrl: () => ({
      data: {
        publicUrl: "",
      },
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
    select: async () => ({
      data: [],
      error: notConfiguredError,
    }),

    insert: async () => ({
      data: null,
      error: notConfiguredError,
    }),

    update: async () => ({
      data: null,
      error: notConfiguredError,
    }),

    delete: async () => ({
      data: null,
      error: notConfiguredError,
    }),

    eq: () => queryMock,
    order: () => queryMock,
    limit: () => queryMock,
    single: async () => ({
      data: null,
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
  ? createClient(supabaseUrl, supabaseKey)
  : createSafeSupabaseMock();