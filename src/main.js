// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue/dist/vue.js';

import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
import VueRouter from 'vue-router';

import App from './App';

import routes from "@/routes.js"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

Vue.config.productionTip = false;

Vue.use(VueApollo);
Vue.use(VueRouter);

const parseBoolean = (b) => b ? 'Sim' : 'Não';



new Vue({
  el: '#app',
  template: '<App/>',
  router: new VueRouter({
    routes,
  }),
  components: {App},
  apolloProvider: new VueApollo({
    defaultClient: new ApolloClient({
      uri: 'https://api.spacex.land/graphql',
    }),
  }),
  methods: {
    parseBoolean,
    filterList: (a) => Array.isArray(a) ? a.filter((v) => v && v.id) : [],
  },
});
