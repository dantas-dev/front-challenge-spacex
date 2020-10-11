import React from 'react';
import { GlobalStyle } from './GlobalStyles';
import Routes from './routes/index';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
};

export default App;
