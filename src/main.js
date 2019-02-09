import Vue from 'vue'
import App from './App.vue'
import VueAxiosPlugin from 'vue-axios-plugin'

Vue.use(VueAxiosPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
