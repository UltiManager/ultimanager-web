import styled from "styled-components";

/** An input field for any kind of alphanumeric data. */
const TextInput = styled.input`
  border: 1px solid #aaa;
  border-radius: 3px;
  box-sizing: border-box;
  display: block;
  font-family: "Open Sans", sans-serif;
  margin: 0.5em 0;
  padding: 0.5em;
  width: 100%;

  &:focus {
    box-shadow: 0 0 2px 2px lightskyblue;
  }
`;

export default TextInput;
