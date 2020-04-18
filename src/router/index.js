import Vue from 'vue'
import Router from 'vue-router'
import sellerPages from './sellerPages'
import {headerMenus ,userTerminal} from "./userTerminal.js";

Vue.use(Router);

let baseRoute = [
  {
    path: '/401',
    name: '权限不足',
    component: rb => require(['../pages/Common/401.vue'], rb)
  }, 
  {
    path: '/404',
    name: '找不到页面',
    component: rb => require(['../pages/Common/404.vue'], rb)
  },
  sellerPages,
];

let router = new Router({
  routes: baseRoute
});

// 加载路由
router.addRoutes(headerMenus)
router.addRoutes(userTerminal)

export default router;