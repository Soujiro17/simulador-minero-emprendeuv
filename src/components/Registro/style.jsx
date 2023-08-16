import styled from "styled-components";
import colors from "../../constants/colors";
import CardContainer from "../Card/style";

export const CardWrapper = styled(CardContainer)`
  position: relative;
  background-color: unset;
`;

export const isLoadingContainer = styled.div``;

export const CardRegister = styled(CardContainer)`
  height: 170px;
  padding-left: 50px;
  cursor: pointer;
  box-shadow: 1px 1px 5px 1px ${colors.black[2]};
  transition: 0.2s all;
  position: relative;
  display: flex;
  background-color: ${colors.black[0]};

  &:hover {
    background-color: #25252511;
  }
`;

export const DataGroup = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  justify-items: center;
  font-size: calc(1rem + 1vw);
`;

export const Fecha = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: absolute;
  right: 1rem;
  bottom: 10px;
  color: ${colors.black[5]};
  transform: translateY(10px);
`;

export const BasuraImg = styled.img`
  position: absolute;
  top: 30px;
  right: 40px;
  object-fit: contain;
  height: 20px;
  width: 20px;
  z-index: 1000;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
