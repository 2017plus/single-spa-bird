const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'http://localhost:4000',
  devServer: {
    port: 4000,
  },
  chainWebpack: (config => {
    // vue工程独立运行时需要剔除这个插件，防止冲突
    if (config.plugins.has('SystemJSPublicPathWebpackPlugin')) {
      config.plugins.delete('SystemJSPublicPathWebpackPlugin')
    }
  })
})
