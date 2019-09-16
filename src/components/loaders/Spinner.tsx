import styled from "styled-components";

/**
 * A loading spinner.
 */
const Spinner = styled.div`
  animation: rotate 0.75s linear infinite;
  border: 5px solid black;
  border-bottom-color: transparent;
  border-radius: 50%;
  height: 64px;
  margin: 32px auto;
  width: 64px;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
