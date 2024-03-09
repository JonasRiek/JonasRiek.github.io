// babel.config.js
module.exports = function(api) {
  api.cache(true); // Enable caching for faster builds

  const presets = [
    // Add your desired presets here
    '@babel/preset-env',
    '@babel/preset-react',
  ];

  const plugins = [
    // Add your desired plugins here
    '@babel/plugin-proposal-class-properties',
  ];

  return {
    presets,
    plugins,
  };
};
