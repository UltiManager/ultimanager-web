import * as React from "react";
import styled from "styled-components";
import LogoShape from "react-svg-loader!../images/logo.svg";

const LogoWrapper = styled.div`
  height: 64px;
  width: 64px;

  & .logo-fill {
    fill: ${props => props.theme.colors.primary};
  }
`;

const Logo: React.FunctionComponent = () => (
  <LogoWrapper>
    <LogoShape />
  </LogoWrapper>
);

export default Logo;
