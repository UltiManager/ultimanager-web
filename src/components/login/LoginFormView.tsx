import * as React from "react";
import ErrorList from "../forms/Error";
import FormControl from "../forms/FormControl";
import InputLabel from "../forms/InputLabel";
import TextInput from "../forms/TextInput";

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
      <button disabled={isLoading} type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginFormView;
