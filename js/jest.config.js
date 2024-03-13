// jest.config.js
module.exports = {
  transform: {
    '\\.js$': 'babel-jest', // Verwende Babel, um .js-Dateien zu transformieren
  },
  testEnvironment: 'jsdom', // Testumgebung: jsdom
};
