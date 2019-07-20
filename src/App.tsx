import * as React from "react";
import { hot } from "react-hot-loader/root";
import LoginForm from "./components/LoginForm";

const App: React.FunctionComponent = () => (
  <div>
    <LoginForm onSubmit={(): void => {}} />
  </div>
);

export default hot(App);
