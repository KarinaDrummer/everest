const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CompressionPlugin(),
    ],
  },
}
