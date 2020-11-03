import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {ApolloProvider}  from '@apollo/react-hooks';
import client from './services/api';
import Routes from './routes';
import GlobalStyle from './styles/global';


const App: React.FC = () => (
  <>
  <GlobalStyle/>
    <ApolloProvider client = {client as any}>
    <Router>
      <Routes />
    </Router>
    </ApolloProvider>
  </>
);

export default App;