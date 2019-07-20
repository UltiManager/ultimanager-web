import * as React from "react";

interface Props {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FunctionComponent<Props> = ({ onSubmit }) => {
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
      <label htmlFor="email">Email:</label>
      <br />
      <input
        id="email"
        name="email"
        onChange={handleEmailChange}
        type="email"
        value={email}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <br />
      <input
        id="password"
        name="password"
        onChange={handlePasswordChange}
        type="password"
        value={password}
      />
      <br />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
