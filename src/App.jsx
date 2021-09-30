import React from 'react';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <>
      Header

      <Switch>
        <Route path="/missions/:missionId">
          Mission
        </Route>

        <Route path="/">
          Dashboard
        </Route>
      </Switch>
    </>
  );
}

export default App;
