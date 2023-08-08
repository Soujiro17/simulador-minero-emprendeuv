import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import HeaderLayout from "../../layouts/HeaderLayout";
import {
  CardBody,
  CardHeader,
  LeftSide,
  RightSide,
  SimulacionCard,
  ButtonsWrapper,
  FormContainer,
} from "./style";
import Graph from "../../components/Graph";
import SimuladorForm from "../../components/SimuladorForm";
import { CUSTOM_EMPTY_TYPE } from "../../components/Graph/config";
import BrandLayout from "../../layouts/BrandLayout";
import Text from "../../shared/Text";
import Button from "../../shared/Button";
import Title from "../../shared/Title";

const Container = styled.div``;

function Simulador() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const graphRef = useRef(null);

  const onCreateNode = (title, len) => {
    let id;
    const x = 300;
    const y = 300;

    if (title === "Pala") {
      id = "P".concat(len);
    } else {
      id = "SP".concat(len);
    }
    const viewNode = {
      id,
      title: `${title} ${id}`,
      type: CUSTOM_EMPTY_TYPE,
      x,
      y,
    };

    setNodes((prev) => [...prev, viewNode]);
  };

  const onDeleteNode = (id) => {
    setNodes((prev) => prev.filter((node) => node.id !== id));
    setEdges((prev) =>
      prev.filter((edge) => edge.source !== id && edge.target !== id),
    );
  };

  return (
    <FormContainer>
      <SimulacionCard height="700px" width="80%">
        <CardHeader>
          <h2>Parámetros de Simulación</h2>
        </CardHeader>
        <CardBody>
          <LeftSide>
            <SimuladorForm
              onCreateNode={onCreateNode}
              onDeleteNode={onDeleteNode}
              graphRef={graphRef}
            />
          </LeftSide>
          <RightSide>
            <Graph
              nodes={nodes}
              setNodes={setNodes}
              edges={edges}
              setEdges={setEdges}
              ref={graphRef}
            />
          </RightSide>
        </CardBody>
      </SimulacionCard>
    </FormContainer>
  );
}

const CrearSimulacion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => setIsOpen((prev) => !prev);

  const navigate = useNavigate();
  return (
    <HeaderLayout>
      {isOpen ? (
        <Simulador />
      ) : (
        <BrandLayout
          right
          backgroundImage="/camion-bg-amarillo.png"
          anotherChildren={
            <video
              autoPlay
              loop
              muted
              style={{ height: "100%", width: "100%", opacity: 0.9 }}
            >
              <source src="/animacion-simulador.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          }
        >
          <Container>
            <Title marginBottom="0">Bienvenido/a</Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur id vitae soluta, recusandae ipsum esse error numquam
              explicabo repudiandae dolores doloremque quisquam eos earum vero
              itaque culpa, quis ab consectetur!
            </Text>
            <ButtonsWrapper>
              <Button onClick={handleIsOpen} accent>
                Abrir simulador
              </Button>
              <Button onClick={() => navigate("/instructivo")}>
                Ver instructivo
              </Button>
            </ButtonsWrapper>
          </Container>
        </BrandLayout>
      )}
    </HeaderLayout>
  );
};

export default CrearSimulacion;
