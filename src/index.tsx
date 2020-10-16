import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloProvider
} from '@apollo/client';

import './index.css';
import Routes from './routes';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById('root')
);
