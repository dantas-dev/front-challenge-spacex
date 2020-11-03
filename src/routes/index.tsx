import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Mission from '../pages/Missions'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/mission/:id"><Mission/></Route>
  </Switch>
);

export default Routes;