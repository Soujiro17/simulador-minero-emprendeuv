/* eslint-disable no-nested-ternary */
import styled, { css } from "styled-components";
import { buttonInputStyles } from "../constants/styles";
import colors from "../constants/colors";

const Button = styled.button`
  ${buttonInputStyles}

  border: none;
  font-size: 18px;
  position: relative;
  cursor: pointer;
  z-index: 1;
  color: #fff;

  ${(props) =>
    props.primary
      ? css`
          background-color: ${colors.primary};
        `
      : props.accent
      ? css`
          background-color: ${colors.accent};
        `
      : props.primaryBorder
      ? css`
          border: 2px solid ${colors.primary};
          background-color: #fff;
          color: #000;
        `
      : css`
          border: 2px solid ${colors.accent};
          background-color: #fff;
          color: #000;
        `};

  &:hover {
    &::before {
      height: 100%;
    }
  }
`;

export default Button;
