/* eslint-disable jsx-a11y/media-has-caption */
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BrandLayout from "../../layouts/BrandLayout";
import HeaderLayout from "../../layouts/HeaderLayout";
import Title from "../../shared/Title";
import Text from "../../shared/Text";
import Button from "../../shared/Button";

const Container = styled.div``;

const Instructivo = () => {
  const navigate = useNavigate();

  return (
    <HeaderLayout>
      <BrandLayout
        backgroundImage="/camion-bg.png"
        anotherChildren={
          <video
            autoPlay
            loop
            muted
            style={{ height: "100%", width: "100%", opacity: 0.9 }}
          >
            <source src="/animacion-instructivo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        }
      >
        <Container>
          <Title marginBottom="0">Instructivo</Title>
          <Text>
            Para un correcto uso del simulador, visualice este instructivo
            atentamente.
          </Text>
          <Button onClick={() => navigate("/instructivo/video")}>
            Ir al instructivo
          </Button>
        </Container>
      </BrandLayout>
    </HeaderLayout>
  );
};

export default Instructivo;
