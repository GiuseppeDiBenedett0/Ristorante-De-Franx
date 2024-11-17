import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "google1b861bb4cf894bde.html",
          dest: "",
        },
      ],
    }),
  ],
  base: "./",
  server: {
    hmr: true,
  },
  build: {
    outDir: "dist",
    assetsInclude: ["**/*.svg"],
    assetsInlineLimit: 0,
  },
});
