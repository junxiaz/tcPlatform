import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       redirect: '/home',
//       component: () => import('@/pages/Home/Home')
//     },
//     {
//       path: '/home',
//       component: () => import('@/pages/Home/Home')
//     },
//     {
//       path: '/label',
//       component: () => import('@/pages/Label/Label')
//     },
//     {
//       path: '/hall',
//       component: () => import('@/pages/Hall/Hall')
//     },
//     {
//       path: '/demand',
//       component: () => import('@/pages/Demand/Demand')
//     },
//   ]
// })

let baseRoute = [
  {
    path: '/',
    name: '布局',
    component: rb => require(['../pages/Common/Abstract.vue'], rb)
  }, 
  {
    path: '/home',
    name: '首页',
    component: rb => require(['../pages/Home/Home.vue'], rb)
  }, 
  {
    path: '/login',
    name: '登录',
    component: rb => require(['../pages/Login/Login.vue'], rb)
  },
  {
    path: '/401',
    name: '无权访问',
    component: rb => require(['../pages/Common/401.vue'], rb)
  }, 
  {
    path: '/404',
    name: '找不到页面',
    component: rb => require(['../pages/Common/404.vue'], rb)
  }
];

let router = new Router({
  routes: baseRoute
});

// router.beforeEach((to, from, next) => {
//   let routeName = to.meta.name || to.name;
//   window.document.title = (routeName ? routeName + ' - ' : '') + '天臣';
//   next();
// })

export default router;