import React from 'react';
import { Switch, Route } from 'react-router';

import Dashboard from './pages/Dashboard';
import Mission from './pages/Mission';

function App() {
  return (
    <>
      {/* Header */}

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
