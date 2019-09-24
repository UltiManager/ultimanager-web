import * as React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import SendEmailVerificationForm from "../components/emails/SendEmailVerificationForm";

const SendVerificationEmail: React.FunctionComponent<RouteComponentProps> = ({
  match
}) => {
  return (
    <Switch>
      <Route
        exact={true}
        path={match.path}
        render={({ match: routeMatch }) => (
          <SendEmailVerificationForm successUrl={`${match.url}/success`} />
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

export default SendVerificationEmail;
