const NextFederationPlugin = require("@module-federation/nextjs-mf");
const { FederationRuntimePlugin } = require("@module-federation/runtime");

const remotes = (items) => {
  return items.map(({ name, port, isServer }) => {
    const location = isServer ? "ssr" : "chunks";
    return `${name}@http://localhost:${port}/_next/static/${location}/remoteEntry.js`;
  });
};

module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: (config, options) => {
    // config.plugins.push(
    //   new NextFederationPlugin({
    //     name: "remote",
    //     filename: "static/chunks/remoteEntry.js",
    //     exposes: {
    //       "./test": "./components/test/index.js",
    //     },
    //     // dts: false,
    //     shared: {},
    //     extraOptions: {
    //       exposePages: true,
    //     },
    //   })
    // );
    return config;
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "*" },
          { key: "Access-Control-Allow-Headers", value: "*" },
          { key: "Cache-Control", value: "no-store" },
        ],
      },
      {
        source: "/:path*.(woff|woff2|ttf|eot|otf)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000" }],
      },
    ];
  },
};
