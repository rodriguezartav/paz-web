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
