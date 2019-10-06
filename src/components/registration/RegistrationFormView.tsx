import * as React from "react";
import ErrorList from "../forms/ErrorList";
import FormControl from "../forms/FormControl";
import InputLabel from "../forms/InputLabel";
import TextInput from "../forms/TextInput";

interface RegistrationData {
  email: string;
  name: string;
  password: string;
}

export interface Props {
  errors?: Record<string, string[]>;
  isLoading?: boolean;
  onSubmit: (data: RegistrationData) => void;
}

const RegistrationFormView: React.FunctionComponent<Props> = ({
  errors = {},
  isLoading = false,
  onSubmit
}) => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      onSubmit({ email, name, password });
    },
    [email, name, password, onSubmit]
  );

  const handleEmailChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    [setEmail]
  );

  const handleNameChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    [setPassword]
  );

  const handlePasswordChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    [setPassword]
  );

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel htmlFor="email">Email:</InputLabel>
        <ErrorList>{errors.email}</ErrorList>
        <TextInput
          disabled={isLoading}
          id="email"
          name="email"
          onChange={handleEmailChange}
          required={true}
          type="email"
          value={email}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password:</InputLabel>
        <ErrorList>{errors.password}</ErrorList>
        <TextInput
          disabled={isLoading}
          id="password"
          name="password"
          onChange={handlePasswordChange}
          required={true}
          type="password"
          value={password}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="name">Name:</InputLabel>
        <ErrorList>{errors.name}</ErrorList>
        <TextInput
          disabled={isLoading}
          id="name"
          name="name"
          onChange={handleNameChange}
          required={true}
          value={name}
        />
      </FormControl>
      <button disabled={isLoading} type="submit">
        Create Account
      </button>
    </form>
  );
};

export default RegistrationFormView;
