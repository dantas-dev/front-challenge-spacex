import { ApolloClient, InMemoryCache } from '@apollo/client';

const api = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache()
});

export default api;