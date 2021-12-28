import {createApp, provide, h} from 'vue'
import App from './App.vue'
import routes from './router'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
// import { createApolloProvider } from '@vue/apollo-option'
import { DefaultApolloClient } from '@vue/apollo-composable'

const apolloClient = new ApolloClient({
  link: createHttpLink({
    uri: 'https://api.spacex.land/graphql/',
  }),
  cache: new InMemoryCache(),
})

// const apolloProvider = createApolloProvider({
//   defaultClient: apolloClient,
// })

createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})
  .use(routes)
  .mount('#app')

// createApp(App)
//   .use(routes)
//   .use(apolloProvider)
//   .mount('#app')
