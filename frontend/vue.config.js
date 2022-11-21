const { defineConfig } = require('@vue/cli-service')
// const { path } = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  // alias: {
  //   '~': path.resolve(__dirname, 'src'),
  //   'assets': path.resolve(__dirname, 'src/assets')
  // },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    port: 3030
  },
  outputDir: '../backend/public', 
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/css/_mixins.scss";
          @import "@/assets/css/_variables.scss";
          @import "@/assets/css/_mediaQueries.scss";
          @import "@/assets/css/_svg.scss";
          @import "@/assets/css/_common.scss";
          @import "@/assets/fontello/css/fontello.css";
          @import "@/assets/css/reset.css";
        `
      },
    },
  },
});
