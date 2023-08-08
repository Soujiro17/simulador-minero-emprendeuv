import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import colors from "../constants/colors";

const MainContent = styled.main`
  background-color: ${colors.black[0]};
`;

const HeaderLayout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
    </>
  );
};

export default HeaderLayout;
