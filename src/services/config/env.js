/* eslint-disable comma-dangle */
// module.exports = {
//     // 'api'：webpack.dev.js中proxy设置的代理
//     baseURL: isPro ? 'http://192.168.100.120/ceds' : '/api'
// }
let envBase;
switch (process.env.API_ENV) {
  case 'prd':
    envBase = {
      // baseURL: 'http://np-content-riskmgr.emapd.com',
      baseURL: 'http://np-ccm.eastmoney.com',
      serviceHost: 'https://njcas.eastmoney.com/cas/login',
      serviceHostSms: 'https://wxuc.eastmoney.com/mcas/loginbysms.html',
      serviceOut: 'https://njcas.eastmoney.com/cas/logout',
      qcpURL: 'http://np-qcp.eastmoney.com/#/home',
    };
    break;
  case 'uat':
    envBase = {
      // baseURL: "http://10.205.201.70:8081",
      baseURL: 'http://np-content-riskmgr.uat.emapd.com',
      serviceHost: 'https://njcas.eastmoney.com/cas/login',
      serviceHostSms: 'https://wxuc.eastmoney.com/mcas/loginbysms.html',
      serviceOut: 'https://njcas.eastmoney.com/cas/logout',
      qcpURL: 'http://np-qcp-test.emapd.com/#/detail',
    };
    break;
  case 'dev':
    envBase = {
      // baseURL: 'http://28.51.8.66:8082/',
      // wechartBaseURL: "http://28.51.8.66:8080/",
      serviceHost: 'https://njcas.eastmoney.com/cas/login',
      serviceHostSms: 'https://wxuc.eastmoney.com/mcas/loginbysms.html',
      serviceOut: 'https://njcas.eastmoney.com/cas/logout',
      redirectUrl: 'http://localhost:8001/',
    };
    break;
  case 'mock':
    envBase = {
      // baseURL: 'http://28.51.8.66:8082/',
      // wechartBaseURL: "http://28.51.8.66:8080/",
      serviceHost: 'https://njcas.eastmoney.com/cas/login',
      serviceHostSms: 'https://wxuc.eastmoney.com/mcas/loginbysms.html',
      serviceOut: 'https://njcas.eastmoney.com/cas/logout',
      redirectUrl: 'http://localhost:8001/ecrs/pgccheck/check',
    };
    break;
  default:
    envBase = {
      baseURL: '',
    };
}

export default envBase;
