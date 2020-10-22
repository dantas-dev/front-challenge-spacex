import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Header from './components/Header';
import Mission from './pages/Missions';
import MissionDetails from './pages/MissionDetails';
import './styles/MissionCard.css';
import './styles/DetailCard.css';
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
          <BrowserRouter>
          <Switch>
            <Route exact path="/mission/:id"><MissionDetails /></Route>
            <Route path="/"><Mission /></Route>
          </Switch>
          </BrowserRouter>
        </section>
      </main>
    </ApolloProvider>
  );
}

export default App;
