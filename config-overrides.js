const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPlugin('@babel/plugin-transform-private-property-in-object'),
  addBabelPlugin('@babel/plugin-transform-private-methods')
);
