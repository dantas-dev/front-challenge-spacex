import { ApolloClient } from '@apollo/client';

const api = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
});

export default api