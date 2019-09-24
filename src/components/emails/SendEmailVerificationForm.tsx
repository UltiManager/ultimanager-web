import axios from "axios";
import { useCallback, useState } from "react";
import * as React from "react";
import { API_ROOT } from "../../settings";
import { Redirect } from "react-router-dom";
import Container from "../Container";
import ErrorList from "../forms/Error";
import Heading from "../typography/Heading";
import SendVerificationEmailFormView from "./SendVerificationEmailFormView";

interface Props {
  successUrl: string;
}

const SendEmailVerificationForm: React.FunctionComponent<Props> = ({
  successUrl
}) => {
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [formComplete, setFormComplete] = useState(false);

  const handleSubmit = useCallback(
    async (email: string) => {
      setIsLoading(true);

      try {
        await axios.post(`${API_ROOT}/accounts/email-verification-requests/`, {
          email
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
    <Container>
      <Heading>Send Verification Email</Heading>
      <p>
        If your verification email was lost or expired, you may resend it by
        submitting the following form.
      </p>
      <ErrorList>{errors.non_field_errors}</ErrorList>
      <SendVerificationEmailFormView
        errors={errors}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

export default SendEmailVerificationForm;
