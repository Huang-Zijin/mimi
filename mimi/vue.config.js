module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}