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
      loader: () => import(/* webpackChunkName: "login" */ "./pages/Login")
    }),
    path: "/log-in"
  },
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
        import(
          /* webpackChunkName: "request-password-reset" */ "./pages/RequestPasswordReset"
        )
    }),
    path: "/request-password-reset"
  },
  {
    component: asLoadable({
      loader: () =>
        import(
          /* webpackChunkName: "request-verification-email" */ "./pages/RequestVerificationEmail"
        )
    }),
    path: "/request-verification-email"
  },
  {
    component: asLoadable({
      loader: () =>
        import(/* webpackChunkName: "reset-password" */ "./pages/ResetPassword")
    }),
    path: "/reset-password"
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
