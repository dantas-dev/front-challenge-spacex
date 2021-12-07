import Vue from 'vue'
import App from './App.vue'
import store from './store'

import responsive from 'vue-responsive'

Vue.use(responsive)

import VueApollo from "vue-apollo";

Vue.use(VueApollo);

new Vue({
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')