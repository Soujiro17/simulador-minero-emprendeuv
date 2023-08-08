import styled from "styled-components";
import colors from "../../constants/colors";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: "";
    z-index: -1;
    opacity: 0.7;
    background-color: ${colors.black[8]};
  }
`;

export default Container;
