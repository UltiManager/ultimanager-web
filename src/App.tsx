import * as React from "react";
import LoginForm from "./components/LoginForm";

const App: React.FunctionComponent = () => (
  <div>
    <LoginForm onSubmit={(): void => {}} />
  </div>
);

export default App;
