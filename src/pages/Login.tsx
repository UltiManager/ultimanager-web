import * as React from "react";
import { RouteComponentProps, Switch, Route } from "react-router-dom";
import LoginForm from "../components/login/LoginForm";

const Login: React.FunctionComponent<RouteComponentProps> = ({ match }) => (
  <Switch>
    <Route
      exact={true}
      path={`${match.path}/success`}
      render={() => <p>You have logged in.</p>}
    />
    <Route
      exact={true}
      path={`${match.path}`}
      render={() => <LoginForm successUrl={`${match.url}/success`} />}
    />
  </Switch>
);

export default Login;
