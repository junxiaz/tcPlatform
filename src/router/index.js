import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/pages/Home/Home')
    },
    {
      path: '/home',
      component: () => import('@/pages/Home/Home')
    }
  ]
})
