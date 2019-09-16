import * as React from "react";
import styled from "styled-components";
import Heading from "../typography/Heading";
import Spinner from "./Spinner";

const LoadingContainer = styled.div`
  margin: 2em 0;
`;

/**
 * A generic loading component that displays loading text and a spinner.
 */
const Loader: React.FunctionComponent = () => (
  <LoadingContainer data-testid="loader">
    <Heading as="h3" style={{ textAlign: "center" }}>
      Loading...
    </Heading>
    <Spinner />
  </LoadingContainer>
);

export default Loader;
