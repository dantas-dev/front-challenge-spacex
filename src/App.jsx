import React from 'react';
import { Switch, Route } from 'react-router';

import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      {/* Header */}

      <Switch>
        <Route path="/missions/:missionId">
          Missions
        </Route>

        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
