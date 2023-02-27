import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [mdx(), tailwind(), react()],
  site: "https://julianbattye.co.uk/sessions",
  base: "sessions",
});
