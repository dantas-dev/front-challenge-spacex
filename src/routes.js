import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Mission from './pages/Mission';

function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/mission/:id" exact component={Mission}/>
      </Switch>
  )
}

export default Routes;