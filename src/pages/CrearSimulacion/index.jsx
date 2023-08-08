import React, { useRef, useState } from "react";
import HeaderLayout from "../../layouts/HeaderLayout";
import {
  CardBody,
  CardHeader,
  Container,
  ImgAbsolute,
  ImgMinero,
  LeftSide,
  RightSide,
  SimulacionCard,
  Title,
} from "./style";
import Graph from "../../components/Graph";
import SimuladorForm from "../../components/SimuladorForm";
import { CUSTOM_EMPTY_TYPE } from "../../components/Graph/config";

const CrearSimulacion = () => {
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
    <HeaderLayout>
      <Container>
        <SimulacionCard height="700px" width="80%">
          <CardHeader>
            <Title>Parámetros simulación</Title>
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
      </Container>
    </HeaderLayout>
  );
};

export default CrearSimulacion;
