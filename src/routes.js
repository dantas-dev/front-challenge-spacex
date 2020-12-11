import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Mission from './pages/Mission'

function Routes() {
    return (
        <HashRouter>
            <Route path="/" exact component={Dashboard}></Route>
            <Route path="/mission" component={Mission}></Route>
        </HashRouter>
    )
}

export default Routes