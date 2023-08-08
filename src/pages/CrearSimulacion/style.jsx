import styled from "styled-components";
import colors from "../../constants/colors";
import CardContainer from "../../components/Card/style";
import Img from "../../shared/Img";

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-image: url("/maderas.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 900px) {
    height: 900px;
    padding: 1rem;
    justify-content: flex-start;
  }
`;

export const SimulacionCard = styled(CardContainer)`
  color: ${colors.black[0]};
  background-color: unset;
  background-image: url("/pizarra.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-top: 2.3rem;
  padding-left: 2.3rem;
  padding-right: 2.3rem;
  padding-bottom: 2.3rem;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const CardHeader = styled.div`
  min-height: 10%;
  height: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  border-bottom: unset;
  border-radius: 0.4rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const Title = styled.h2`
  font-weight: bolder;
  text-transform: uppercase;
  font-size: calc(1.2rem + 0.7vw);
  margin: 0;
`;

export const CardBody = styled.div`
  height: 90%;
  display: flex;
  border-top: unset;
  border-radius: 0.4rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  overflow: hidden;
  @media (max-width: 900px) {
    overflow: auto;
    display: flex;
    flex-direction: column;
  }
`;

const Side = styled.div`
  height: 100%;
  width: 50%;
  position: relative;
  @media (max-width: 900px) {
    width: 100%;
    height: fit-content;
    order: 2;
  }
`;

export const LeftSide = styled(Side)``;
export const RightSide = styled(Side)`
  @media (max-width: 900px) {
    border-left: none;
    height: 400px;
    order: 1;
  }
`;

export const ImgAbsolute = styled(Img)`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  position: absolute;
  bottom: ${(props) => props.bottom};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  margin: ${(props) => props.margin};
  transform: ${(props) => props.transform};
  z-index: ${(props) => props.zIndex};
`;

export const ImgMinero = styled(Img)`
  height: 170px;
  width: 170px;
  transform: translateY(3px);
`;
