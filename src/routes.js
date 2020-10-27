import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Mission from './pages/Mission'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Dashboard}></Route>
            <Route path="/mission" component={Mission}></Route>
        </BrowserRouter>
    )
}

export default Routes