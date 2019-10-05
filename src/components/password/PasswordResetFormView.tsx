import * as React from "react";
import ErrorList from "../forms/ErrorList";
import FormControl from "../forms/FormControl";
import InputLabel from "../forms/InputLabel";
import TextInput from "../forms/TextInput";

interface Props {
  errors?: Record<string, string[]>;
  isLoading?: boolean;
  onSubmit: (password: string) => void;
}

const PasswordResetFormView: React.FunctionComponent<Props> = ({
  errors = {},
  isLoading = false,
  onSubmit
}) => {
  const [password, setPassword] = React.useState("");

  const handleSubmit = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      onSubmit(password);
    },
    [onSubmit, password]
  );

  const handlePasswordChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    [setPassword]
  );

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel htmlFor="password">Password:</InputLabel>
        <TextInput
          autoComplete="new-password"
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
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default PasswordResetFormView;
