const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? process.env.PUBLIC_PATH
    : process.env.DEV_PUBLIC_PATH,

  productionSourceMap: false,

  configureWebpack: {
    plugins: [
      new CompressionPlugin(),
    ],
  },
}
