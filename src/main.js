import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import ProfilePageEmployer from "@/components/employer/ProfilePageEmployer";
import jobPosts from "@/components/jobPosts";
import LogIn from "@/components/authentication/LogIn";
import Registration from "@/components/authentication/Registration";


Vue.config.productionTip = false
Vue.use(VueRouter)

// Bootstrap
Vue.use(BootstrapVue);

const routes = [
  // { path: '/register', component: Register },
  { path: '/myProfile', component:ProfilePageEmployer},
  { path: '/posts', component: jobPosts},
  { path: '/login', component: LogIn},
  { path: '/signup', component: Registration},
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
