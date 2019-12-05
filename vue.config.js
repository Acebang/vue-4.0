module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://pmtest.grgbanking.com:9001",
        ws: true,
        changeOrigin: true,
        pathRewrite: { "^/api": "" }
      }
    }
  },
  configureWebpack: {
    devtool: "source-map"
  },
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/"
};
