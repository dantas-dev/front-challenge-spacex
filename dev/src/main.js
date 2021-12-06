import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/"
});

const apolloProvider = new VueApollo({
  defaultClient: client
});

Vue.use(VueApollo);

new Vue({
  provide: apolloProvider.provide(),
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')