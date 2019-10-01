import { render, fireEvent } from "@testing-library/react";
import * as React from "react";
import LoginFormView from "./LoginFormView";

describe("LoginFormView", () => {
  it("Should call the callback prop when submitted", async () => {
    const email = "test@example.com";
    const password = "password";

    const handleSubmit = jest.fn();
    const component = render(<LoginFormView onSubmit={handleSubmit} />);

    const emailInput = await component.findByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: email } });

    const passwordInput = component.getByLabelText(/password/i);
    fireEvent.change(passwordInput, { target: { value: password } });

    const submitBtn = component.getByText(/log in/i);
    fireEvent.click(submitBtn);

    expect(handleSubmit).toHaveBeenCalledWith(email, password);
  });
});
