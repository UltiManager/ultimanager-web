import * as React from "react";

interface Props {
  children?: string[];
}

const ErrorList: React.FunctionComponent<Props> = ({ children = [] }) => {
  if (children.length === 0) {
    return null;
  }

  if (children.length === 1) {
    return <p>{children[0]}</p>;
  }

  return (
    <ul>
      {children.map(error => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  );
};

export default ErrorList;
