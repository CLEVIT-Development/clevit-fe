import { defineConfig } from "vite";
import compression from "vite-plugin-compression";
import { createHtmlPlugin } from "vite-plugin-html";
import inspect from "vite-plugin-inspect";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    target: "esnext",
    minify: "esbuild",
    outDir: "dist",
    sourcemap: false,
    chunkSizeWarningLimit: 500,
    modulePreload: {
      resolveDependencies: () => {
        return [];
      },
    },
    rollupOptions: {
      output: {
        sourcemap: false,
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"], // Create separate chunks for React and React DOM
          vendor: ["axios", "lodash"], // Example for vendor libraries
          // Chunk specific libraries
          "react-calendly": ["react-calendly"],
          "react-phone-input-2": ["react-phone-input-2"],
          "tailwind-merge": ["tailwind-merge"],
        },
      },
    },
  },
  server: {
    port: 3000,
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"], // Pre-bundle dependencies
  },
  plugins: [
    inspect(),
    react(),
    svgr({ include: "**/*.svg?react" }),
    tsconfigPaths(),
    compression({ algorithm: "gzip" }),
    createHtmlPlugin({
      minify: true,
    }),
  ],
});
