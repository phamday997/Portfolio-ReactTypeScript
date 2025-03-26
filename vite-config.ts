import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isProd = process.env.NODE_ENV === "production";
const base = isProd ? "/Portfolio-ReactTypeScript/" : "/";

export default defineConfig({
  plugins: [react()],
  base,
});
