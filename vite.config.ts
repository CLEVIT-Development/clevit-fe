import { defineConfig } from "vite";
import compression from "vite-plugin-compression";
import { createHtmlPlugin } from "vite-plugin-html";
import inspect from "vite-plugin-inspect";
import sitemap from "vite-plugin-sitemap";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    target: "esnext",
    minify: "terser",
    outDir: "dist",
    sourcemap: false,
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
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
          // Create separate chunks for React, React DOM, and react-jsx-runtime
          react: ["react", "react-dom", "react-router-dom", "react/jsx-runtime"],
          vendor: ["axios"], // Example for vendor libraries
          // Chunk specific libraries
          "react-calendly": ["react-calendly"],
          "react-phone-input-2": ["react-phone-input-2"],
          "tailwind-merge": ["tailwind-merge"],
          "react-alice-carousel": ["react-alice-carousel", "vanilla-swipe"],
          "react-hook-form": ["react-hook-form"],
          yup: ["yup"],
          "react-toastify": ["react-toastify"],
          classnames: ["classnames"],
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
    compression({ algorithm: "gzip", threshold: 0 }),
    createHtmlPlugin({
      minify: true,
    }),
    sitemap({
      hostname: "https://www.clevit.io", // Your site's hostname
      dynamicRoutes: [
        "/",
        "/about-us",
        "/services",
        "/portfolio",
        "/faq",
        "/contact-us",
        "//privacy-policy",
        "/terms-and-conditions",
        "/request-demo",
        "/web-development",
        "/blogs",
      ],
      exclude: ["/admin/**"],
      changefreq: "daily", // Frequency for updates
      priority: 1.0, // Default priority
      lastmod: new Date(), // Last modified date
      readable: true, // Optional, makes the XML human-readable
      generateRobotsTxt: true, // Generate robots.txt
      robots: [{ userAgent: "*", allow: "/" }], // Robots policy
    }),
  ],
  define: {
    global: "globalThis",
  },
});
