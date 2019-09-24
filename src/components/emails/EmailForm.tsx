import * as React from "react";
import ErrorList from "../forms/Error";
import FormControl from "../forms/FormControl";
import InputLabel from "../forms/InputLabel";
import TextInput from "../forms/TextInput";

interface Props {
  errors?: Record<string, string[]>;
  isLoading?: boolean;
  onSubmit: (email: string) => void;
  submitText?: string;
}

/**
 * Form to collect an email address.
 */
const EmailForm: React.FunctionComponent<Props> = ({
  errors = {},
  isLoading = false,
  onSubmit,
  submitText = "submit"
}) => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      onSubmit(email);
    },
    [email, onSubmit]
  );

  const handleEmailChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    [setEmail]
  );

  return (
    <form onSubmit={handleSubmit}>
      <ErrorList>{errors.non_field_errors}</ErrorList>
      <FormControl>
        <InputLabel htmlFor="email">Email:</InputLabel>
        <TextInput
          disabled={isLoading}
          id="email"
          name="email"
          onChange={handleEmailChange}
          required={true}
          type="email"
          value={email}
        />
        <ErrorList>{errors.email}</ErrorList>
      </FormControl>
      <button type="submit">{submitText}</button>
    </form>
  );
};

export default EmailForm;