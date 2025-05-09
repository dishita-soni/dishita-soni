module.exports = {
  experimental: {
    turbo: {
      resolveAlias: {
        canvas: "./empty-module.ts",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ghchart.rshah.org",
        port: "",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true, // <-- enable SVG rendering
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // for extra safety
  },
};
