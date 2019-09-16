import { render } from "@testing-library/react";
import * as React from "react";
import ReactLoadableLoader from "./ReactLoadableLoader";

describe("ReactLoadableLoader", () => {
  it("Should render nothing if not past its delay time", () => {
    const component = render(
      <ReactLoadableLoader
        isLoading={true}
        pastDelay={false}
        timedOut={false}
        error={null}
        retry={(): void => {}}
      />
    );

    expect(component.container.hasChildNodes()).toBeFalsy();
  });

  it("Should render an error message if an error was received", async () => {
    const component = render(
      <ReactLoadableLoader
        isLoading={false}
        pastDelay={false}
        timedOut={false}
        error={"Some error message"}
        retry={(): void => {}}
      />
    );

    await component.findByText(/Failed to load/i);
  });

  it("Should render a spinner while loading", async () => {
    const component = render(
      <ReactLoadableLoader
        isLoading={true}
        pastDelay={true}
        timedOut={false}
        error={null}
        retry={(): void => {}}
      />
    );

    await component.findByTestId("loader");
  });
});
