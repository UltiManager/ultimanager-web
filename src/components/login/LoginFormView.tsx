import * as React from "react";
import styled from "styled-components";
import ErrorList from "../forms/ErrorList";
import FormControl from "../forms/FormControl";
import HelpText from "../forms/HelpText";
import InputLabel from "../forms/InputLabel";
import TextInput from "../forms/TextInput";
import Link from "../Link";

const FormButtons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

interface Props {
  errors?: Record<string, string[]>;
  isLoading?: boolean;
  onSubmit: (email: string, password: string) => void;
}

const LoginFormView: React.FunctionComponent<Props> = ({
  errors = {},
  isLoading = false,
  onSubmit
}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      onSubmit(email, password);
    },
    [email, password, onSubmit]
  );

  const handleEmailChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    [setEmail]
  );

  const handlePasswordChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    [setPassword]
  );

  return (
    <form onSubmit={handleSubmit}>
      <ErrorList>{errors.non_field_errors}</ErrorList>
      <FormControl>
        <InputLabel htmlFor="email">Email:</InputLabel>
        <TextInput
          autoComplete="email"
          disabled={isLoading}
          id="email"
          name="email"
          onChange={handleEmailChange}
          required={true}
          type="email"
          value={email}
        />
        <ErrorList>{errors.email}</ErrorList>
        {/* Conditionally display error text so we don't wreck the tab order. */}
        {errors.non_field_errors && (
          <HelpText>
            If you need to verify your email address, you may{" "}
            <Link to="/request-verification-email">
              send a new verification email
            </Link>
            .
          </HelpText>
        )}
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password:</InputLabel>
        <TextInput
          autoComplete="current-password"
          disabled={isLoading}
          id="password"
          name="password"
          onChange={handlePasswordChange}
          required={true}
          type="password"
          value={password}
        />
        <ErrorList>{errors.password}</ErrorList>
      </FormControl>
      <FormButtons>
        <button disabled={isLoading} type="submit">
          Log In
        </button>
        <Link to="/request-password-reset">Forgot password?</Link>
      </FormButtons>
    </form>
  );
};

export default LoginFormView;
