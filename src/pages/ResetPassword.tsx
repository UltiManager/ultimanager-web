import * as React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import PasswordResetForm from "../components/password/PasswordResetForm";

const ResetPassword: React.FunctionComponent<RouteComponentProps> = ({
  match
}) => {
  return (
    <Switch>
      <Route
        exact={true}
        path={`${match.path}/success`}
        render={() => <p>Your password has been reset.</p>}
      />
      <Route
        path={`${match.path}/:token`}
        render={({ match: routeMatch }) => (
          <PasswordResetForm
            successUrl={`${match.url}/success`}
            token={routeMatch.params.token}
          />
        )}
      />
    </Switch>
  );
};

export default ResetPassword;
