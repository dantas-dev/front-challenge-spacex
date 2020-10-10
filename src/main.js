import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

Vue.config.productionTip = false;

const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/"
});

const apolloProvider = new VueApollo({
    defaultClient: client
});

Vue.use(VueApollo);

new Vue({
    router,
    apolloProvider,
    render: (h) => h(App)
}).$mount("#app");
