import * as React from "react";
import { asLoadable } from "./loadable";
import { RouteComponentProps } from "react-router-dom";

export interface Route {
  // All components will have access to the route components provided by the
  // parent router.
  component: React.ComponentType<RouteComponentProps>;
  exact?: boolean;
  path: string;
}

const routes: Route[] = [
  {
    component: asLoadable({
      loader: () =>
        import(/* webpackChunkName: "register" */ "./pages/Register")
    }),
    path: "/register"
  }
];

export default routes;
