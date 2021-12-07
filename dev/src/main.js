import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import VueApollo from "vue-apollo";

Vue.use(VueApollo);

new Vue({
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')