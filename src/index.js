import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloProvider } from '@apollo/client';

import client from './services/apollo';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}> 
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
