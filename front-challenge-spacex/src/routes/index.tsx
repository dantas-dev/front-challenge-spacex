import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DetailsMissionPage from '../pages/DetailsMissionPage';
import InitialPage from '../pages/InitialPage';

const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path={['/', '/dashboard']} exact component={InitialPage} />
        <Route path="/details/:id" exact component={DetailsMissionPage} />
      </Switch>
    </>
  );
};

export default Routes;
