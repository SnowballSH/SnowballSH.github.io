// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { typst } from "astro-typst";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://snowballsh.github.io",
  base: "/",
  output: "static",
  integrations: [
    typst({
      options: {
        remPx: 14,
      },
      target: (id) => {
        if (/[\\/]src[\\/]content[\\/]blogs[\\/]/.test(id)) {
          // Render Chinese (.zh.typ) files as HTML to support Chinese fonts
          if (id.endsWith(".zh.typ")) {
            return "html";
          }
          if (id.endsWith(".html.typ") || /[\\/]html[\\/]/.test(id)) {
            return "html";
          }
          return "svg";
        }
        return "svg";
      },
    }),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ["@myriaddreamin/typst-ts-node-compiler"],
    },
  },
});
