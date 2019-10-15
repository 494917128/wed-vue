import Vue from 'vue'
import App from './App.vue'

import wed from 'vue-wed-dev'
import 'vue-wed-dev/lib/vue-wed-dev.css'
Vue.use(wed)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
