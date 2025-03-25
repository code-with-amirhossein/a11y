import { defineConfig } from "vitepress";
export const shared = defineConfig({
  rewrites: {
    "en/:rest*": ":rest*",
  },
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  base: "/a11y",

  themeConfig: {
    editLink: {
      pattern: "https://github.com/code-with-amirhossein/a11y/edit/main/:path",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/amir78729" }],
  },
});
