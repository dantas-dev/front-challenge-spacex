import React from "react";
import { Route, Switch } from "react-router-dom";

import DashBoard from "./pages/DashBoard";
import Mission from "./pages/Mission";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={DashBoard} />
        <Route path="/:id" exact component={Mission} />
      </Switch>
    </>
  );
}
