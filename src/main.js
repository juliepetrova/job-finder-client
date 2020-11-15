import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from  "@/store";
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/styles/index.css'
import '@fortawesome/fontawesome-free/css/all.css';



Vue.config.productionTip = false

// Bootstrap
Vue.use(BootstrapVue);

Vue.prototype.$http = axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = "Bearer " + token
}


new Vue({
  render: h => h(App),
  router,
  store,
  axios,
}).$mount('#app')
