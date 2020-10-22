import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import vmmodal from 'vue-js-modal'

import '@/assets/css/tailwind.css'

Vue.use(vmmodal, { componentName: 'custom-modal' })

Vue.config.productionTip = false

new Vue({
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
