import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Mission from './pages/Mission';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/mission/:missionId">
          <Mission />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
