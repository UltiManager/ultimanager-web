import styled from "styled-components";

interface Props {
  size?: "small" | "medium";
}

const Container = styled.div<Props>`
  margin: 0 auto;
  max-width: ${(props): string =>
    props.theme.containers.width[props.size || "medium"]};
`;

export default Container;
