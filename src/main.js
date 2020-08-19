import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import VueRouter from 'vue-router'
import {routes} from "./routes";
// import moment from 'moment-timezone';
import Axios from 'axios'

// Vue.use({
//   moment,
// })
// Vue.use(require('vue-jalali-moment'));
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if(token){
  Vue.prototype.$http.default.headers.common['Authorization'] = token
}

Vue.use(VueRouter)
Vue.config.productionTip = false
// Vue.use(require('vue-moment'));
const router = new VueRouter({
  mode:'history',
  routes
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
