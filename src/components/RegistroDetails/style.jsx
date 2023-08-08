import styled from "styled-components";
import colors from "../../constants/colors";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 3rem;
`;

export const ResumenContainer = styled.div`
  padding: 1rem;
  width: 100%;
`;

export const Resultados = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: 40% 40%;
  gap: 10%;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
  li::before {
    content: "◉";
    margin-right: 5px;
  }
`;

export const RecomendacionesText = styled.h2`
  text-decoration: underline;
  text-align: center;
`;

export const LineSeparator = styled.hr`
  height: 10px;
  background-color: ${colors.black[9]};
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const CloseButtoin = styled.button``;
