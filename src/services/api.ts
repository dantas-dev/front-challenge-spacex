import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({
  uri: "https://api.spacex.land/graphql/"
});

const cache = new InMemoryCache();

const api = new ApolloClient({
  link: httpLink,
  cache
});

export default api;
