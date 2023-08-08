import styled from "styled-components";
import colors from "../constants/colors";

export default styled.p`
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  text-align: ${(props) => props.center || props.left || props.right};
  color: ${colors.primary};
  font-size: calc(1rem + 0.2vw);
  text-align: justify;
`;
