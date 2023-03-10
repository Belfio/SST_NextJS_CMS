/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_API_URL: string
  readonly buildCommand: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}