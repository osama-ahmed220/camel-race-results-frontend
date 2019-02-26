import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import ProgramPage from "./pages/Program";
import ProgramList from "./pages/ProgramList";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} name="login" path="/" component={Login} />
        <Route
          exact={true}
          name="programs"
          path="/programs"
          component={ProgramList}
        />
        <Route
          exact={true}
          name="program"
          path="/program/:programID"
          component={ProgramPage}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
