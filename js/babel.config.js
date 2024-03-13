// babel.config.js
module.exports = function(api) {
  api.cache(true); // Aktiviere Caching für schnellere Builds

  const presets = [
    // Gewünschte Presets für Umgebung und ...
    '@babel/preset-env',
    '@babel/preset-react',
  ];

  const plugins = [
    // Füge hier deine gewünschten Plugins hinzu
    '@babel/plugin-proposal-class-properties',
  ];

  return {
    presets,
    plugins,
  };
};
