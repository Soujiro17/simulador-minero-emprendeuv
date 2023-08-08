import styled from "styled-components";
import colors from "../constants/colors";
import { buttonInputStyles } from "../constants/styles";

const Input = styled.input`
  ${buttonInputStyles}
  padding-left: 10px;

  ${(props) =>
    props.hasError
      ? `
    outline: ${colors.states.incorrect};
    border: 2px solid ${colors.states.incorrect};
  `
      : ""}
`;

export default Input;
