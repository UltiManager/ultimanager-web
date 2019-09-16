import * as React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import routes from "./routes";
import defaultTheme from "./styles/themes";

const App: React.FunctionComponent = () => (
  <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
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
