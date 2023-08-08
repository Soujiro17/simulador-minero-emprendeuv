import { css } from "styled-components";
import colors from "./colors";

export const buttonInputStyles = css`
  height: ${(props) => props.height || "2.7rem"};
  width: ${(props) => props.width || "100%"};
  border-radius: 1rem;
  border: 1px solid ${colors.black[9]};

  ${(props) =>
    props.disabled || props.readOnly
      ? `
    background-color: ${colors.black[2]};
  `
      : ""};
`;

export const backgroundPrimary = css`
  background: ${colors.primary}; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffd200,
    ${colors.primary}
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffd200,
    ${colors.primary}
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
