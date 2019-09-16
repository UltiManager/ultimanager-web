import { fireEvent, render } from "@testing-library/react";
import * as React from "react";
import RegistrationFormView from "./RegistrationFormView";

describe("RegistrationForm", () => {
  it("Should call the callback prop when submitted", async () => {
    const email = "test@example.com";
    const password = "password";
    const name = "Test User";

    const handleSubmit = jest.fn();
    const component = render(<RegistrationFormView onSubmit={handleSubmit} />);

    const emailInput = await component.findByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: email } });

    const passwordInput = component.getByLabelText(/password/i);
    fireEvent.change(passwordInput, { target: { value: password } });

    const nameInput = component.getByLabelText(/name/i);
    fireEvent.change(nameInput, {
      target: { name: nameInput.getAttribute("name"), value: name }
    });

    const submitBtn = component.getByText(/create account/i);
    fireEvent.click(submitBtn);

    expect(handleSubmit).toHaveBeenCalledWith({ email, password, name });
  });

  it("Should disable all elements when loading", () => {
    const component = render(
      <RegistrationFormView isLoading={true} onSubmit={() => {}} />
    );

    const inputs = component.container.querySelectorAll("input");
    inputs.forEach((input: HTMLInputElement) => {
      expect(input.hasAttribute("disabled")).toBeTruthy();
    });

    const submitBtn = component.getByText(/create account/i);
    expect(submitBtn.hasAttribute("disabled")).toBeTruthy();
  });
});
