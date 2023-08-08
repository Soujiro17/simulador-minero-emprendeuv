import React from "react";
import styled from "styled-components";
import HeaderLayout from "../../layouts/HeaderLayout";
import Img from "../../shared/Img";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
`;

function InstructivoVideo() {
  return (
    <HeaderLayout>
      <Container>
        <Img
          src="/gifmaker.gif"
          style={{ height: "80%", width: "70%", objectFit: "contain" }}
        />
      </Container>
      {/* <video autoPlay loop muted style={{ height: "100%", width: "100%" }}>
        <source src="/animacion-simulador.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </HeaderLayout>
  );
}

export default InstructivoVideo;
