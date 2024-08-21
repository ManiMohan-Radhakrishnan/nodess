// /** @type {import('next').NextConfig} */
// const nextBuildId = require("next-build-id");
// const nextConfig = {
//   // experimental: {
//   //   // target: "serverless",
//   images: {
//     unoptimized: true,
//     // allowFutureImage: true,
//   },
//   //   // optimizeCss: true,
//   // },

//   reactStrictMode: true,
//   swcMinify: true,
//   // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//   //   config.plugins.push(
//   //     new webpack.ProvidePlugin({
//   //       $: "jquery",
//   //       jQuery: "jquery",
//   //       "window.jQuery": "jquery",
//   //     })
//   //   );
//   //   return config;
//   // },
//   // images: {
//   //   domains: [
//   //     "jump-baseapi.guardiannft.org",
//   //     "cdn.guardianlink.io",
//   //     "mpcdn.guardiannft.org",
//   //     "mclgameadmin.guardiannft.org",
//   //     "blog.jump.trade",
//   //     "www.guardianlink.io",
//   //     "cdn.jump.trade",
//   //     "baseapi.jump.trade",
//   //     "www.facebook.com",
//   //     "www.google.com",
//   //     "mcladmin.guardiangames.trade",
//   //     "www.pexels.com",
//   //     "q.quora.com",
//   //     "glcdn.jump.trade",
//   //   ],
//   // },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**",
//       },
//     ],
//   },
//   generateBuildId: () => nextBuildId({ dir: __dirname }),
// };

// module.exports = nextConfig;

const nextBuildId = require("next-build-id");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // {
          //   key: 'Content-Security-Policy',
          //   value: "default-src 'self'; script-src 'self'; object-src 'none';",
          // },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
