import styled from "styled-components";
import colors from "../../constants/colors";

const CardContainer = styled.div`
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  background-color: ${colors.black[0]};
  width: ${(props) => props.width};
  border-radius: 0.7rem;
  background-color: ${(props) => props.bgColor};
  overflow-y: auto;
  padding: 1rem;
`;

export default CardContainer;
