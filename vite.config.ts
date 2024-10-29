import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
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
  plugins: [
    react(),
    svgr({ include: "**/*.svg?react" }),
    tsconfigPaths(),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  ssr: {
    noExternal: ["react-dom"],
  },
});
