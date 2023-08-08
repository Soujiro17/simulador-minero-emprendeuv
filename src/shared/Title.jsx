/* eslint-disable no-nested-ternary */
import styled from "styled-components";
import colors from "../constants/colors";

export default styled.h1`
  font-size: calc(2rem + 1.2vw) !important;
  color: ${colors.primary};
  font-weight: bold;
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  text-align: ${(props) =>
    props.center
      ? "center"
      : props.left
      ? "left"
      : props.right
      ? "right"
      : "inherit"};

  & span {
    color: ${colors.accent};
  }
`;
