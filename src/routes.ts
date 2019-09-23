import * as React from "react";
import { asLoadable } from "./loadable";
import { RouteComponentProps } from "react-router-dom";

export interface Route<Props> {
  // All components will have access to the route components provided by the
  // parent router.
  component: React.ComponentType<Props>;
  exact?: boolean;
  path: string;
}

const routes: Route<RouteComponentProps>[] = [
  {
    component: asLoadable({
      loader: () =>
        import(/* webpackChunkName: "register" */ "./pages/Register")
    }),
    path: "/register"
  },
  {
    component: asLoadable({
      loader: () =>
        import(/* webpackChunkName: "verify-email" */ "./pages/VerifyEmail")
    }),
    path: "/verify-email"
  }
];

export default routes;
