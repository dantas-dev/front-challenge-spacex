import React from 'react'
import Routes from './routes'
import Header from './components/Header'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header className="page-header" />
      <div className="content">
        <Routes className="routes" />
      </div>
    </div>
  );
}

export default App;
