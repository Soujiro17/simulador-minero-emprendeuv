import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  min-height: 90vh;
  width: 100%;
  padding: 5%;
  position: relative;
`;

export const RegistrosContainer = styled.div`
  height: 100%;
  width: 100%;

  & > * {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const RegistrosTitle = styled.h2`
  text-align: center;
  font-size: calc(1.2rem + 0.7vw);
`;
