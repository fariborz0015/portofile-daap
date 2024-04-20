import type { MetadataRoute } from "next";

export default function manifest() {
  return {
    name: "Fariborzz ",
    short_name: "Fariborz shalghouni",
    description: "senior Front End Developer",
    categories: ["web3", "front-end", "nextjs", "senior developer"],
    start_url: "/",
    display: "standalone",
    background_color: "#007aff",
    theme_color: "#007aff",
    lang: "en-Us",
    dir: "ltr",
    icons: [
      { src: "/favicon.png", sizes: "64x64", type: "image/png" },
      { src: "/favicon.png", sizes: "192x192", type: "image/png" },
      { src: "/favicon.png", sizes: "512x512", type: "image/png" },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: `fariborZZ`,
        short_name: "   fariborz shalghouni    ",
        description: "senior Front End Developer",
        url: "/",
        icons: [
          {
            src: "/public/favicon.png",
            sizes: "96x96",
            type: "image/svg+xml",
          },
          {
            src: "/public/favicon.png",
            sizes: "96x96",
            type: "image/svg+xml",
            purpose: "maskable",
          },
        ],
      },
    ],
  } satisfies MetadataRoute.Manifest;
}
