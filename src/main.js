import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import vuetify from './plugins/vuetify';
import './plugins/core'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  apolloProvider: createProvider(),
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
