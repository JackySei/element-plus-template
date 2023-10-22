import './assets/css/index.scss';

import { createApp } from 'vue';

import App from './App.vue';
import router from './route';
import store from './store';
import ElementPlus from 'element-plus';
// import "./styles/element.scss";
import 'element-plus/dist/index.css';
import * as Icons from '@element-plus/icons';
// import "element-plus/theme-chalk/src/message.scss";
import Http from '@/services/config/http.js';
import JsMark from '@/assets/js/mark.js';
import directivesPlugin from '@/utils/directive/lazy.js';
if (process.env.NODE_ENV === 'development' && process.env.API_ENV === 'mock') {
  require('../mock');
}

// 动态路由部分;
// let registerRouteFresh = true;
// function resetRouter(res) {
//   const arr = [];
//   if (res) {
//     // console.log(res, 12345566);
//     res.filter((value) => {
//       let child = [];
//       if (value.children && value.children.length > 0) {
//         child = resetRouter(value.children);
//       }

//       arr.push({
//         name: value.menuLabel,
//         // redirect: value.menuRedirect ? JSON.parse(value.menuRedirect) : '',
//         redirect:
//           value.children && value.children.length > 0
//             ? { name: value.children[0].menuLabel }
//             : '',

//         path: value.menuPath,
//         meta: value.menuMeta ? JSON.parse(value.menuMeta) : '',
//         component: () => import(`@/views/${value.menuComponent}`),
//         children: child,
//       });
//       return value;
//     });
//   }

//   return arr;
// }
// function routerInit(data) {
//   const arr = [];
//   arr.push({
//     name: 'PGC',
//     path: '/',
//     meta: { title: '主页', icon: 'home' },
//     redirect: {
//       name: data && data.length > 0 ? data[0].menuLabel : '/noright',
//     },
//     component: () => import('@/views/index.vue'),
//     children: resetRouter(data),
//   });
//   return arr;
// }
// router.beforeEach(async (to, from, next) => {
//   // 首次或者刷新界面，next(...to, replace: true)会循环遍历路由，如果to找不到对应的路由会再执行一次beforeEach((to, from, next))直到找到对应路由
//   if (registerRouteFresh && to.name !== 'public' && to.name !== 'portal') {
//     // to.name !== 'public'->避免public 页面调用相关接口
//     const res = await Http.get('/authapi/pgcauth/getMenus').then((e) => {
//       const data = e.data.data;
//       if (data && data.length > 0) {
//         data.sort((a, b) => {
//           return a.permissionOrder > b.permissionOrder ? 1 : -1;
//         });
//       }

//       return data;
//     });
//     const arr = routerInit(res);
//     arr.forEach((value, index) => {
//       router.addRoute(value);
//     });
//     // 增加重定向404
//     const notFound = {
//       path: '/:catchAll(.*)*',
//       redirect: { name: 'error' },
//     };
//     router.addRoute(notFound);
//     if (res && res.length > 0) {
//       next({ ...to, replace: true });
//     } else {
//       next({ path: '/noright' });
//     }

//     registerRouteFresh = false;
//   } else {
//     next();
//   }
// });

const app = createApp(App);
// 全局报错查看
app.config.errorHandler = (err, vm, info) => {
  console.log('[全局异常]', err, vm, info);
};
app.config.globalProperties.$http = Http;
app.config.globalProperties.$JsMark = JsMark;
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key]);
});
app.use(directivesPlugin);
app.use(ElementPlus).use(store).use(router).mount('#app');
