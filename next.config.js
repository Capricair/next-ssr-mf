const NextFederationPlugin = require("@module-federation/nextjs-mf");

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    home: `home@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    shop: `shop@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
  };
};

module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: (config, options) => {
    // config.plugins.push(
    //   new NextFederationPlugin({
    //     name: "federation",
    //     filename: "static/chunks/remoteEntry.js",
    //     exposes: {
    //       "./test": "./components/test/index.js",
    //     },
    //     remotes: remotes(options.isServer),
    //     shared: {},
    //     extraOptions: {
    //       exposePages: true,
    //     },
    //   })
    // );
    return config;
  },
};
