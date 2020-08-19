const path = require('path')

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false,
  configureWebpack: (config) => {
    config.devtool = 'source-map'
  },
  chainWebpack: config => {
    config.resolve
      .alias
      .set('~', path.resolve(__dirname, 'src'))
  },

  devServer: {
    proxy: {
      '/api/token': {
        target: process.env.VUE_APP_BACKEND,
        changeOrigin: true
      }
    }
  }
}
