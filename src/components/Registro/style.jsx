import styled from "styled-components";
import colors from "../../constants/colors";
import Img from "../../shared/Img";
import CardContainer from "../Card/style";

export const CardRegister = styled(CardContainer)`
  height: 100px;
  cursor: pointer;
  box-shadow: 1px 1px 5px 1px ${colors.black[2]};
  transition: 0.2s all;
  position: relative;
  display: flex;

  &:hover {
    background-color: #25252511;
  }
`;

export const DataGroup = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  font-size: calc(1rem + 1vw);
`;

export const Fecha = styled.p`
  position: absolute;
  right: 1rem;
  bottom: 0px;
  color: ${colors.black[5]};
  transform: translateY(10px);
`;
