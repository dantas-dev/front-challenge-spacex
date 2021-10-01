/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router';

import Dashboard from './pages/Dashboard';
import Mission from './pages/Mission';
import Header from './components/Header';

function App() {
  const [activeTheme, setActiveTheme] = React.useState('light');
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  const toggleTheme = () => {
    setActiveTheme(inactiveTheme);
  };

  React.useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);

  return (
    <>
      <Header toggleTheme={ toggleTheme } inactiveTheme={ inactiveTheme } />

      <Switch>
        <Route path="/missions/:missionId">
          <Mission />
        </Route>

        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
