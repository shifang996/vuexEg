import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
//axios全局引用
import axios from 'axios'
Vue.prototype.$axios=axios;

//vue提示
Vue.config.productionTip = false
//vue工具提示
Vue.config.devtools=false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
