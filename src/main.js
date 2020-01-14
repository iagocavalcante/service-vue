import Vue from 'vue'
import App from './App.vue'
import services from './plugins/services'

Vue.config.productionTip = false
Vue.use(services)

new Vue({
  render: h => h(App),
}).$mount('#app')
