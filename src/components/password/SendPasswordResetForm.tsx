import axios from "axios";
import * as React from "react";
import { useCallback, useState } from "react";
import { Redirect } from "react-router-dom";
import { API_ROOT } from "../../settings";
import BaseText from "../BaseText";
import Container from "../Container";
import EmailForm from "../emails/EmailForm";
import Heading from "../typography/Heading";

interface Props {
  successUrl: string;
}

const SendPasswordResetForm: React.FunctionComponent<Props> = ({
  successUrl
}) => {
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [formComplete, setFormComplete] = useState(false);

  const handleSubmit = useCallback(
    async (email: string) => {
      setIsLoading(true);

      let newFormComplete = false;
      try {
        await axios.post(`${API_ROOT}/accounts/password-reset-requests/`, {
          email
        });
        newFormComplete = true;
      } catch (e) {
        if (e.response) {
          if (e.response.status === 400) {
            setErrors(e.response.data);
          }
        }
      } finally {
        setIsLoading(false);
        setFormComplete(newFormComplete);
      }
    },
    [setErrors, setFormComplete, setIsLoading]
  );

  if (formComplete) {
    return <Redirect push={true} to={successUrl} />;
  }

  return (
    <Container size="small">
      <Heading>Request a Password Reset</Heading>
      <BaseText>
        If you have lost or forgotten your password, enter your email address
        and we&apos;ll send you a link to reset it.
      </BaseText>
      <EmailForm
        errors={errors}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        submitText="Send Email"
      />
    </Container>
  );
};

export default SendPasswordResetForm;
