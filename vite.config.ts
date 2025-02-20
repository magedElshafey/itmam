import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: "gzip" }),
    compression({ algorithm: "brotliCompress" }),
  ],
  build: {
    minify: "terser",
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      treeshake: true,
    },
  },
});
