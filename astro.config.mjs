// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

const base = "ac-2025-website";

// https://astro.build/config
export default defineConfig({
  site: "https://dublin-digital-radio.github.io",
  base,
  redirects: {
    "/schedule": `/${base}/schedule/may-1`,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
