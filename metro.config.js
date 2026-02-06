const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// point at the actual CSS file inside the app folder
module.exports = withNativeWind(config, {
  input: "./app/global.css",
  inlineRem: 16,
});
