// webpack.dev.js

const path = require('path');

module.exports = {
  devtool: 'source-map',
  output: {
    publicPath: '/',
  },
  devServer: {
    allowedHosts: 'all',
    static: path.join(__dirname, 'devDist'), // 服务器资源的根目录，不写的话，默认为bundle.js
    hot: true, // 启用热加载
    host: '0.0.0.0', //
    port: 8001, // 端口号
    open: true, // 服务器启动后打开默认浏览器
    historyApiFallback: true, // 解决history模式刷新404
    proxy: [
      // {
      //   context: ['/authapi', '/basebase', '/dcbt', '/statistics'],
      //   target: 'http://np-content-riskmgr.uat.emapd.com/',
      //   changeOrigin: true,
      //   secure: false,
      // },
      {
        context: ['/authapi', '/basebase', '/dcbt', '/statistics'],
        target: 'http://np-ccm.eastmoney.com/',
        changeOrigin: true,
        secure: false,
      },
      // {
      //   context: ['/basebase', '/dcbt', '/statistics'],
      //   target: 'http://28.51.8.185:8080/',
      //   changeOrigin: true,
      //   secure: false,
      // },
    ],
    // '/authapi': {
    //   target: 'http://np-content-riskmgr.uat.emapd.com/',
    //   // target: 'http://28.51.8.66:8091',
    //   changeOrigin: true,
    //   secure: false,
    //   // pathRewrite: {
    //   //   "^/user": "",
    //   // },
    // },
    // '/basebase': {
    //   target: 'http://np-content-riskmgr.uat.emapd.com/',
    //   // target: 'http://28.51.8.66:8091',
    //   changeOrigin: true,
    //   secure: false,
    //   // pathRewrite: {
    //   //   "^/user": "",
    //   // },
    // },
    // '/dcbt': {
    //   target: 'http://np-content-riskmgr.uat.emapd.com',
    //   changeOrigin: true,
    //   secure: false,
    // },
    // '/statistics': {
    //   target: 'http://np-content-riskmgr.uat.emapd.com',
    //   changeOrigin: true,
    //   secure: false,
    // },
    // },
  },
  // mode: "development",
};
