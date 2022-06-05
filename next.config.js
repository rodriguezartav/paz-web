const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["es_CR", "en_US"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "es_CR",
  },
  async redirects() {
    return [
      {
        source: "/libro",
        destination: "/posts/yosoyesto",
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
