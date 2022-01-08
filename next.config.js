module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false,  path: false,
      assert: require.resolve('assert'),
            crypto: require.resolve('crypto-browserify'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),
            stream: require.resolve('stream-browserify')
    };

    return config;
  },
};