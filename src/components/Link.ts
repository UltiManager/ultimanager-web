import { Link as OriginalLink } from "react-router-dom";
import styled from "styled-components";
import { baseTextStyles } from "./BaseText";

const Link = styled(OriginalLink)`
  ${baseTextStyles};
  color: ${props => props.theme.colors.primary};
`;

export default Link;
