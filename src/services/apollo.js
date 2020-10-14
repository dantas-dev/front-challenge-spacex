import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/'
});

export default client;