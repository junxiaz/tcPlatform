import Vue from 'vue'
import Router from 'vue-router'
import {headerMenus ,userTerminal} from "./userTerminal.js";

Vue.use(Router);

let baseRoute = [
  // {
  //   path: '/',
  //   name: '布局',
  //   component: rb => require(['../pages/Common/Abstract.vue'], rb)
  // }, 
  // {
  //   path: '/home',
  //   name: '首页',
  //   hide: true,
  //   component: rb => require(['../pages/Home/Home.vue'], rb)
  // }, 
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

// 初始化菜单路由以及用户端其他路由
router.addRoutes(headerMenus)
router.addRoutes(userTerminal)

export default router;