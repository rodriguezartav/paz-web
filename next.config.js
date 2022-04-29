const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  async redirects() {
    return [
      {
        source: "/libro",
        destination: "/posts/yosoyesto",
        permanent: true,
      },
      {
        source: "/1",
        destination: "https://www.amazon.com/dp/B09TLF5LVB",
        permanent: true,
      },
      {
        source: "/play",
        destination:
          "https://open.spotify.com/artist/5iR7YvWgvzgv3JIc3b0TvK?si=7YbuSAOBRgGCv-cojyuaBg",
        permanent: true,
      },
    ];
  },
  pageExtensions: ["js", "jsx", "mdx"],
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
});
