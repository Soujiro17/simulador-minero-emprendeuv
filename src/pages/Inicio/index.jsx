import styled from "styled-components";
import BrandLayout from "../../layouts/BrandLayout";
import HeaderLayout from "../../layouts/HeaderLayout";
import Text from "../../shared/Text";
import Title from "../../shared/Title";

const Container = styled.div``;

const Inicio = () => {
  return (
    <HeaderLayout>
      <BrandLayout rightBackgroundImage="/camion-inicio.png">
        <Container>
          <Title marginBottom="0">
            Modelo <br /> de simulación <span>DEVS</span>
          </Title>
          <Text>
            para el proceso de carguío y transporte en faena minera a rajo
            abierto.
          </Text>
        </Container>
      </BrandLayout>
      <BrandLayout right leftBackgroundImage="/excavadora-inicio.png">
        <Container>
          <Title center marginBottom="0">
            <span>Objetivo</span>
          </Title>
          <Text>
            El objetivo del simulador es, valga la redundancia, simular el
            proceso de carguío y transporte de camiones, palas y stock piles de
            mineras a rajo abierto para poder obtener resultados cercanos a la
            realidad y poder optimizar este proceso, con el fin de maximizar la
            utilización de maquinaria sin saturarla.
          </Text>
        </Container>
      </BrandLayout>
      <BrandLayout rightBackgroundImage="/informatica-inicio.png">
        <Container>
          <Title left marginBottom="0">
            Desarrollado por
            <br />
            <br />
            <span>Escuela de Ingeniería Civil Informática</span>
            <br />
            <br />
            Universidad de Valparaíso
          </Title>
        </Container>
      </BrandLayout>
    </HeaderLayout>
  );
};

export default Inicio;
