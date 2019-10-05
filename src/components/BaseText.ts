import styled, { css } from "styled-components";

export const baseTextStyles = css`
  font-family: "Open Sans", sans-serif;
`;

const BaseText = styled.p`
  ${baseTextStyles};
`;

export default BaseText;
