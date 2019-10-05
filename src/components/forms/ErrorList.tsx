import * as React from "react";
import styled from "styled-components";
import BaseText from "../BaseText";

interface Props {
  children?: string[];
}

const ErrorMessage = styled(BaseText)`
  background: ${props => props.theme.colors.errorBackground};
  border: 2px solid ${props => props.theme.colors.error};
  border-radius: 3px;
  color: ${props => props.theme.colors.error};
  font-size: 0.85rem;
  list-style: disc outside none;
  margin: 0.5em 0;
  padding: 0.5em;
`;

const ErrorListItem = styled.li`
  margin-left: 1em;
`;

const ErrorList: React.FunctionComponent<Props> = ({ children = [] }) => {
  if (children.length === 0) {
    return null;
  }

  if (children.length === 1) {
    return <ErrorMessage>{children[0]}</ErrorMessage>;
  }

  return (
    <ErrorMessage as="ul">
      {children.map(error => (
        <ErrorListItem key={error}>{error}</ErrorListItem>
      ))}
    </ErrorMessage>
  );
};

export default ErrorList;
