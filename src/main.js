import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import VueRouter from 'vue-router'
import {routes} from "./routes";
import moment from 'moment-timezone'

Vue.use({
  moment,
})

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(require('vue-moment'));
const router = new VueRouter({
  mode:'history',
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
