import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dash from './pages/dashboard';
import Mission from './pages/mission';

export default function Routes() {
    return (
        <Router> 
            <Switch>
                <Route path="/" exact component={Dash}/>
                <Route path="/mission/:id" component={Mission}/>
            </Switch>
        </Router>
    );
}