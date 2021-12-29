import {createApp, provide, h} from 'vue'
import App from './App.vue'
import routes from './router'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

const apolloClient = new ApolloClient({
  link: createHttpLink({
    uri: 'https://api.spacex.land/graphql/',
  }),
  cache: new InMemoryCache(),
})

createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})
.component("font-awesome-icon", FontAwesomeIcon)
.use(routes)
.mount('#app')