import * as React from "react";
import { useCallback, useState } from "react";
import { Redirect } from "react-router-dom";
import AccountService from "../../services/AccountService";
import BaseText from "../BaseText";
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

      const response = await AccountService.requestEmailVerification(email);

      let formShouldBeCompleted = false;
      if (response.isError) {
        setErrors(response.errors || {});
      } else {
        formShouldBeCompleted = true;
      }

      setIsLoading(false);
      setFormComplete(formShouldBeCompleted);
    },
    [setErrors, setFormComplete, setIsLoading]
  );

  if (formComplete) {
    return <Redirect push={true} to={successUrl} />;
  }

  return (
    <Container size="small">
      <Heading>Send Verification Email</Heading>
      <BaseText>
        If your verification email was lost or expired, you may resend it by
        submitting the following form.
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

export default RequestEmailVerificationForm;
