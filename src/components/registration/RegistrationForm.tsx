import axios from "axios";
import * as React from "react";
import { useCallback, useState } from "react";
import { Redirect } from "react-router";
import { API_ROOT } from "../../settings";
import BaseText from "../BaseText";
import Container from "../Container";
import Link from "../Link";
import Heading from "../typography/Heading";
import RegistrationFormView from "./RegistrationFormView";

interface Props {
  successUrl: string;
}

const RegistrationForm: React.FunctionComponent<Props> = ({ successUrl }) => {
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [formComplete, setFormComplete] = useState(false);

  const handleSubmit = useCallback(
    async ({ email, name, password }) => {
      setIsLoading(true);

      try {
        await axios.post(`${API_ROOT}/accounts/users/`, {
          email,
          name,
          password
        });
        setFormComplete(true);
      } catch (e) {
        if (e.response) {
          if (e.response.status === 400) {
            setErrors(e.response.data);
          }
        }
      } finally {
        setIsLoading(false);
      }
    },
    [setErrors, setFormComplete, setIsLoading]
  );

  if (formComplete) {
    return <Redirect push={true} to={successUrl} />;
  }

  return (
    <Container size="small">
      <Heading>Register</Heading>
      <BaseText>
        If you have already created an account, you may{" "}
        <Link to="/log-in">log in</Link>.
      </BaseText>
      <RegistrationFormView
        errors={errors}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

export default RegistrationForm;
