
// poi.config.js
module.exports = {
  configureWebpack(config, context) {
    // Do something like adding a plugin
    config.plugins.push(new BundleAnalyzerPlugin())
    // optionally return config
  }
}
