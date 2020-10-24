import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DASHBOARD from '../pages/dashboard';
import MISSION from '../pages/mission';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={DASHBOARD}  />
                <Route path="/mission/:id_mission" component={MISSION} />
            </Switch>
        </BrowserRouter >
    );
}

export default Routes;