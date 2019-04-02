// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import Vuex from 'vuex'
import store from './store'
 
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {

  if (to.path == '/login') {
    sessionStorage.removeItem('state');
  }
  let state = sessionStorage.getItem('state');
  if (!state && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
