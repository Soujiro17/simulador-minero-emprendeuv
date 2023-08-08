import styled from "styled-components";
import colors from "../../constants/colors";

export const LandingContainer = styled.section`
  height: 650px;
  background-image: url("/mineria.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 20px solid ${colors.primary};
  z-index: 1;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: "";
    z-index: -1;
    background-color: ${colors.black[9]};
    opacity: 0.9;
  }
`;

export const LandingTitle = styled.h1`
  font-size: calc(2rem + 1vw);
  margin: 0%;
  color: ${colors.black[0]};
  max-width: 70%;
  text-align: center;
`;
