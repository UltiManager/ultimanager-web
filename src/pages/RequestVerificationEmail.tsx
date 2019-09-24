import * as React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import RequestEmailVerificationForm from "../components/emails/RequestEmailVerificationForm";

const RequestVerificationEmail: React.FunctionComponent<
  RouteComponentProps
> = ({ match }) => {
  return (
    <Switch>
      <Route
        exact={true}
        path={match.path}
        render={({ match: routeMatch }) => (
          <RequestEmailVerificationForm
            successUrl={`${routeMatch.url}/success`}
          />
        )}
      />
      <Route
        exact={true}
        path={`${match.path}/success`}
        render={() => <p>Verification email sent. Check your inbox.</p>}
      />
    </Switch>
  );
};

export default RequestVerificationEmail;
