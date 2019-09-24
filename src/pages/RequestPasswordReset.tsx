import * as React from "react";
import { RouteComponentProps, Switch, Route } from "react-router-dom";
import SendPasswordResetForm from "../components/password/SendPasswordResetForm";

const RequestPasswordReset: React.FunctionComponent<RouteComponentProps> = ({
  match
}) => (
  <Switch>
    <Route
      exact={true}
      path={match.path}
      render={({ match: routeMatch }) => (
        <SendPasswordResetForm successUrl={`${routeMatch.url}/success`} />
      )}
    />
    <Route
      exact={true}
      path={`${match.path}/success`}
      render={() => (
        <p>
          If the email address you provided is verified, a password reset token
          has been sent to it.
        </p>
      )}
    />
  </Switch>
);

export default RequestPasswordReset;
