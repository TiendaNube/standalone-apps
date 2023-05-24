import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dotenv from "dotenv";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")
  return {
    plugins: [react()],
    optimizeDeps: {
          include: ["@nimbus-ds/patterns", "@nimbus-ds/components"],
    },
    server:{
      port: 8000,
    },
    define: {
      "process.env": dotenv.config({ path: "../../.env" }).parsed,
      global: {},
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
  }
})

