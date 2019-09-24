import * as React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import routes from "./routes";
import defaultTheme from "./styles/themes";

const App: React.FunctionComponent = () => (
  <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/request-password-reset">Request Password Reset</Link>
        </li>
        <li>
          <Link to="/send-verification-email">Send Verification Email</Link>
        </li>
      </ul>
      <Switch>
        {routes.map(route => (
          <Route
            component={route.component}
            exact={!!route.exact}
            key={route.path}
            path={route.path}
          />
        ))}
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
