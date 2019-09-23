import axios from "axios";
import { useCallback, useState } from "react";
import * as React from "react";
import { Redirect } from "react-router";
import { API_ROOT } from "../../settings";
import Container from "../Container";
import ErrorList from "../forms/Error";
import Heading from "../typography/Heading";

interface Props {
  successUrl: string;
  token: string;
}

const EmailVerificationForm: React.FunctionComponent<Props> = ({
  successUrl,
  token
}) => {
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [formComplete, setFormComplete] = useState(false);

  const handleSubmit = useCallback(async () => {
    setIsLoading(true);

    try {
      await axios.post(`${API_ROOT}/accounts/email-verifications/`, {
        token
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
  }, [setErrors, setFormComplete, setIsLoading, token]);

  if (formComplete) {
    return <Redirect push={true} to={successUrl} />;
  }

  return (
    <Container>
      <Heading>Verify Your Email</Heading>
      <p>Please click the button to verify ownership of your email address.</p>
      <ErrorList>{errors.token}</ErrorList>
      <button disabled={isLoading} onClick={handleSubmit}>
        Verify Email
      </button>
    </Container>
  );
};

export default EmailVerificationForm;
