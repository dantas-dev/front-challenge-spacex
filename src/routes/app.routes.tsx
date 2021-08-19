import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Body } from '../pages/Main/index';


const AuthRoutes: React.FC = () => (
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Body} />
          </Switch>
      </BrowserRouter>
);

export default AuthRoutes;
