import Vue from 'vue'
import Home from './Home.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Home)
}).$mount('#home')
