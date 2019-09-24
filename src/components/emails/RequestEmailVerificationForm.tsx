import axios from "axios";
import * as React from "react";
import { useCallback, useState } from "react";
import { Redirect } from "react-router-dom";
import { API_ROOT } from "../../settings";
import Container from "../Container";
import Heading from "../typography/Heading";
import EmailForm from "./EmailForm";

interface Props {
  successUrl: string;
}

const RequestEmailVerificationForm: React.FunctionComponent<Props> = ({
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
      <EmailForm
        errors={errors}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        submitText="Send Email"
      />
    </Container>
  );
};

export default RequestEmailVerificationForm;
