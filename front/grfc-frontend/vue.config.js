const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/static/dist/' : 'http://127.0.0.1:8081',
  outputDir: '../../grfc_backend/static/dist',
  indexPath: '../../templates/base-vue.html',
  configureWebpack: {
    devServer: {
      devMiddleware: {
        index: true,
        publicPath: 'http://127.0.0.1:8081',
        headers: {"Access-Control-Allow-Origin": "*"},
        writeToDisk: filePath => filePath.endsWith('index.html'),
      },
    },
  }
});
