import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'


Vue.config.productionTip = false
Vue.use(VueRouter)

// Bootstrap
Vue.use(BootstrapVue);

const routes = [
  // { path: '/register', component: Register },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
