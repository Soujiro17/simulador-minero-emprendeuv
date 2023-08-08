import styled from "styled-components";
import { backgroundPrimary, buttonInputStyles } from "../constants/styles";

const Button = styled.button`
  ${buttonInputStyles}

  position: relative;
  cursor: pointer;
  z-index: 1;

  &::before {
    transition: 0.2s all;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0%;
    width: 100%;
    content: "";
    z-index: -1;
    border-radius: 0.4rem;

    ${backgroundPrimary};
  }

  &:hover {
    &::before {
      height: 100%;
    }
  }
`;

export default Button;
