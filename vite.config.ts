import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      app: path.resolve(__dirname, "./src/app"),
      "@": path.resolve(__dirname, "./src"),
      assets: path.resolve(__dirname, "./src/assets"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
      },
      output: {
        assetFileNames: "assets/[name].[hash][extname]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
  },
});
