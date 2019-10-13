import styled from "styled-components";
import LogoShape from "react-svg-loader!../images/logo.svg";

const Logo = styled(LogoShape)`
  height: 64px;
  width: 64px;

  & .logo-fill {
    fill: ${props => props.theme.colors.primary};
  }
`;

export default Logo;
