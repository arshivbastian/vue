import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//ُSemantic Library
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css' 
//Bootstrap Libarary
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(SuiVue);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
