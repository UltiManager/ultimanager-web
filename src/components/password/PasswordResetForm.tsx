import axios from "axios";
import * as React from "react";
import { useCallback, useState } from "react";
import { Redirect } from "react-router";
import { API_ROOT } from "../../settings";
import Container from "../Container";
import ErrorList from "../forms/Error";
import Heading from "../typography/Heading";
import PasswordResetFormView from "./PasswordResetFormView";

interface Props {
  successUrl: string;
  token: string;
}

const PasswordResetForm: React.FunctionComponent<Props> = ({
  successUrl,
  token
}) => {
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [formComplete, setFormComplete] = useState(false);

  const handleSubmit = useCallback(
    async (password: string) => {
      setIsLoading(true);

      let formIsComplete = false;
      try {
        await axios.post(`${API_ROOT}/accounts/password-resets/`, {
          password,
          token
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
    [setErrors, setFormComplete, setIsLoading, token]
  );

  if (formComplete) {
    return <Redirect push={true} to={successUrl} />;
  }

  return (
    <Container>
      <Heading>Reset Your Password</Heading>
      <p>Use the following form to reset your password.</p>
      <ErrorList>{errors.token}</ErrorList>
      <PasswordResetFormView
        errors={errors}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

export default PasswordResetForm;
