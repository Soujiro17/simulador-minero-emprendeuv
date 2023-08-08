import React from "react";
import Navbar from "../Navbar";
import Img from "../../shared/Img";
import HeaderContainer from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <Img
        style={{ alignSelf: "flex-start" }}
        src="/logo.png"
        alt="logo"
        height={80}
        width={300}
        contain
      />
      <Navbar />
    </HeaderContainer>
  );
};

export default Header;
