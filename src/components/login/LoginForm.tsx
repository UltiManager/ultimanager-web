import axios from "axios";
import * as React from "react";
import { useCallback, useState } from "react";
import { Redirect } from "react-router";
import { API_ROOT } from "../../settings";
import BaseText from "../BaseText";
import Container from "../Container";
import Link from "../Link";
import Heading from "../typography/Heading";
import LoginFormView from "./LoginFormView";

interface Props {
  successUrl: string;
}

const LoginForm: React.FunctionComponent<Props> = ({ successUrl }) => {
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [formComplete, setFormComplete] = useState(false);

  const handleSubmit = useCallback(
    async (email: string, password: string) => {
      setIsLoading(true);

      let formIsComplete = false;
      try {
        await axios.post(`${API_ROOT}/authentication/sessions/`, {
          email,
          password
        });
        formIsComplete = true;
      } catch (e) {
        if (e.response) {
          if (e.response.status === 400) {
            setErrors(e.response.data);
          }
        }
      } finally {
        setIsLoading(false);
        setFormComplete(formIsComplete);
      }
    },
    [setErrors, setFormComplete, setIsLoading]
  );

  if (formComplete) {
    return <Redirect push={true} to={successUrl} />;
  }

  return (
    <Container size="small">
      <Heading>Log In</Heading>
      <BaseText>
        Log in with your email and password. If you don&apos;t have an account,
        you can <Link to="/register">register</Link>.
      </BaseText>
      <LoginFormView
        errors={errors}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

export default LoginForm;
