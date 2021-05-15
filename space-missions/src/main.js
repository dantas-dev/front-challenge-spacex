import Vue from 'vue'
import App from './App.vue'
import router from "./router";

import './assets/css/tailwind.css'
import ApolloClient from "apollo-client";
 import { HttpLink } from "apollo-link-http";
 import { InMemoryCache } from "apollo-cache-inmemory";
 import VueApollo from "vue-apollo"
 Vue.use(VueApollo);
Vue.config.productionTip = false

 // Create an http link:
 const link = new HttpLink({
  uri: 'https://api.spacex.land/graphql/',
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true
  })
});

const apolloProvider = new VueApollo({
  defaultClient: client,
})

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
