import React from "react";
import styled, { css } from "styled-components";

const MainContainer = styled.section`
  width: 100%;
  height: ${(props) => props.height || "650px"};
  display: flex;
`;

const SideWrapper = styled.article`
  width: 50%;
  height: 100%;
  padding: 5%;

  ${(props) =>
    props.backgroundImage
      ? css`
          background-image: url(${(props) => props.backgroundImage});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        `
      : ""}
`;

const SideDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

function BrandLayout({
  children,
  right = false,
  anotherChildren,
  leftBackgroundImage = "",
  rightBackgroundImage = "",
  height = "",
}) {
  return (
    <MainContainer height={height}>
      <SideWrapper backgroundImage={leftBackgroundImage}>
        <SideDiv>{right ? anotherChildren : children}</SideDiv>
      </SideWrapper>
      <SideWrapper backgroundImage={rightBackgroundImage}>
        <SideDiv>{right ? children : anotherChildren}</SideDiv>
      </SideWrapper>
    </MainContainer>
  );
}

export default BrandLayout;
