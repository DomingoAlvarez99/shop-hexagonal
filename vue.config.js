module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule('sass')
      .test(/\.sass$/)
      .use('sass-loader')
        .loader('sass-loader')
        .loader('css-loader')
        .loader('style-loader')
      .end()
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/ui/assets/styles/styles.scss";`
      }
    }
  }
}