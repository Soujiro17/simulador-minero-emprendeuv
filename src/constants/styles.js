import { css } from "styled-components";
import colors from "./colors";

export const buttonInputStyles = css`
  height: ${(props) => props.height || "2.3rem"};
  width: ${(props) => props.width || "100%"};
  border-radius: 0.4rem;
  border: 1px solid ${colors.black[9]};

  ${(props) =>
    props.disabled || props.readOnly
      ? `
    background-color: ${colors.black[2]};
  `
      : ""};
`;

export const backgroundPrimary = css`
  background: #f7971e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffd200,
    #f7971e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffd200,
    #f7971e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
