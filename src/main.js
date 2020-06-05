/*
 * @Author: your name
 * @Date: 2020-03-06 09:16:49
 * @LastEditTime: 2020-05-13 16:37:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \tc_platform\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
import '../theme/index.css'
import './assets/style/index.scss'
import './assets/style/font/iconfont.css'
import 'normalize.css' // a modern alternative to CSS resets
import store from './store' // 导入vuex文件
import api from './api' // 导入api接口

Vue.prototype.$api = api; // 将api挂载到vue的原型上

import 'babel-polyfill';//ie浏览器显示问题

Vue.config.productionTip = false

Vue.use(ElementUI);

// if(sessionStorage.getItem('token')) {
//   const token = sessionStorage.getItem('token')
// }
// if(sessionStorage.getItem('userId')) {
//   const userId = sessionStorage.getItem('userId')
// }
// if(sessionStorage.getItem('account')) {
//   const account = sessionStorage.getItem('account')
// }

/*
* v-has
*/

Vue.directive('has', {
  inserted: function (el, binding) {
    if (Vue.prototype.$_has && !Vue.prototype.$_has(binding.value)) {
      el.parentNode.removeChild(el);
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});