import * as React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import routes from "./routes";
import GlobalStyles from "./styles/globalStyles";
import defaultTheme from "./styles/themes";

const App: React.FunctionComponent = () => (
  <ThemeProvider theme={defaultTheme}>
    <React.Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <NavBar />
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
    </React.Fragment>
  </ThemeProvider>
);

export default App;
