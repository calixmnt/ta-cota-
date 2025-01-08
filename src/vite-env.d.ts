/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_SUPABASE_KEY: string;
    VITE_SUPABASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}