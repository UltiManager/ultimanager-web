import * as React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import EmailVerificationForm from "../components/emails/EmailVerificationForm";

const VerifyEmail: React.FunctionComponent<RouteComponentProps> = ({
  match
}) => {
  return (
    <Switch>
      <Route
        exact={true}
        path={`${match.path}/success`}
        render={() => <p>Your email address has been verified.</p>}
      />
      <Route
        path={`${match.path}/:token`}
        render={({ match: routeMatch }) => (
          <EmailVerificationForm
            successUrl={`${match.url}/success`}
            token={routeMatch.params.token}
          />
        )}
      />
    </Switch>
  );
};

export default VerifyEmail;
