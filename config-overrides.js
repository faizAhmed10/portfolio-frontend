const { override, addBabelPreset, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPreset("@babel/preset-env"),
  addBabelPlugin(["@babel/plugin-transform-class-properties", { "loose": true }]),
  addBabelPlugin(["@babel/plugin-transform-private-methods", { "loose": true }]),
  addBabelPlugin(["@babel/plugin-transform-private-property-in-object", { "loose": true }]),
  addBabelPlugin("@babel/plugin-transform-nullish-coalescing-operator")
);


