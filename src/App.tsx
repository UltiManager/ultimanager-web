import * as React from "react";
import { ThemeProvider } from "styled-components";
import Container from "./components/Container";
import LoginForm from "./components/LoginForm";
import defaultTheme from "./styles/themes";

const App: React.FunctionComponent = () => (
  <ThemeProvider theme={defaultTheme}>
    <Container>
      <LoginForm onSubmit={(): void => {}} />
    </Container>
  </ThemeProvider>
);

export default App;
