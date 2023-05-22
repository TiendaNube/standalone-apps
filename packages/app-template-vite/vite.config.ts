import dotenv from "dotenv";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@nimbus-ds/patterns", "@nimbus-ds/components"],
  },
  server:{
    port:8000,
  },
  define: {
    global: {},
    "process.env": dotenv.config({ path: "../../.env" }).parsed,
  },
  resolve: {
    alias: {
      "@": path.resolve(
        __dirname,
        "src"
      ),
      "@nimbus-ds/patterns": path.resolve(
        __dirname,
        "../../node_modules/@nimbus-ds/patterns/dist/index.js"
      ),
      "@nimbus-ds/components": path.resolve(
        __dirname,
        "../../node_modules/@nimbus-ds/components/dist/index.js"
      ),
    },
  },
})
