import * as React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import RegistrationForm from "../components/registration/RegistrationForm";

const Register: React.FunctionComponent<RouteComponentProps> = ({ match }) => {
  return (
    <Switch>
      <Route
        exact={true}
        path={match.path}
        render={({ match }) => (
          <RegistrationForm successUrl={`${match.url}/complete`} />
        )}
      />
      <Route
        path={`${match.path}/complete`}
        render={() => <p>Registration complete! Check your email.</p>}
      />
    </Switch>
  );
};

export default Register;
