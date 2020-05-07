import Vue from 'vue'
import Router from 'vue-router'
import { Message } from 'element-ui';
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
  // mode: "history",
  // base: '/tcPlatform/',
  routes: baseRoute
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin)) { // 检查是否需要登录权限
    if (!sessionStorage.getItem('token')) { // 检查是否已登录
      Message.warning("请先登录！");
      next({
        name: 'login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

// 加载路由
router.addRoutes(headerMenus);
router.addRoutes(userTerminal);

export default router;