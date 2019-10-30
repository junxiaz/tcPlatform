// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
import '../theme/index.css'
import './assets/style/index.scss'
import 'normalize.css' // a modern alternative to CSS resets
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI);

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
  store
})
