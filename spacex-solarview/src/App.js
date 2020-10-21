import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Header from './components/Header';
import Mission from './components/Missions';
import './styles/MissionCard.css';
import './App.css';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <main className="App-container">
        <Header />
        <section className="App-section">
          <Mission />
        </section>
      </main>
    </ApolloProvider>
  );
}

export default App;
