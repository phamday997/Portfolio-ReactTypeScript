import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isProd = process.env.NODE_ENV === "production";

const base = isProd
  ? process.env.VITE_APP_PROD_BASE || "/Portfolio-ReactTypeScript/"
  : process.env.VITE_APP_DEV_BASE || "/";

export default defineConfig({
  plugins: [react()],
  base,
});
