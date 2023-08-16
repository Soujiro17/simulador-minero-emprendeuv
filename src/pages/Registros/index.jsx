/* eslint-disable no-underscore-dangle */
import React, { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
import HeaderLayout from "../../layouts/HeaderLayout";
import { Container, RegistrosContainer, RegistrosTitle } from "./style";
import Registro from "../../components/Registro";
import RegistroDetails from "../../components/RegistroDetails";
import Spinner from "../../components/Spinner";
// import { getSimulaciones } from "../../app/api/simulacion";
import BrandLayout from "../../layouts/BrandLayout";
import Title from "../../shared/Title";
import Text from "../../shared/Text";
import Button from "../../shared/Button";
import { CardHeader, SimulacionCard } from "../CrearSimulacion/style";
import useStorage from "../../hooks/useStorage";

const Registros = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleIsOpen = () => setIsOpen((prev) => !prev);

  const { registros } = useStorage();

  const isLoading = false;

  return (
    <HeaderLayout>
      {isOpen ? (
        <Container>
          <SimulacionCard width="100%" style={{ backgroundColor: "#F9F9FC" }}>
            <CardHeader>
              <h2>Registros de Simulación</h2>
            </CardHeader>
            {isLoading ? (
              <Spinner minHeight="750px" />
            ) : (
              <>
                <RegistrosTitle>Filtrar por</RegistrosTitle>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: ".5rem",
                  }}
                >
                  <Button
                    style={{
                      width: "fit-content",
                      display: "flex",
                      alignItems: "center",
                      gap: ".5rem",
                    }}
                    primaryBorder
                  >
                    Filtrar por{" "}
                    <img
                      src="/filtro1.png"
                      height={16}
                      width={16}
                      alt="filtro1"
                    />
                  </Button>
                  <Button
                    style={{
                      width: "fit-content",
                      display: "flex",
                      alignItems: "center",
                      gap: ".5rem",
                    }}
                    primaryBorder
                  >
                    Filtrar por cant. camiones
                    <img
                      src="/filtro2.png"
                      height={16}
                      width={16}
                      alt="filtro2"
                    />
                  </Button>
                  <Button
                    style={{
                      width: "fit-content",
                      display: "flex",
                      alignItems: "center",
                      gap: ".5rem",
                    }}
                    primaryBorder
                  >
                    Filtrar por tiempo
                    <img
                      src="/filtro2.png"
                      height={16}
                      width={16}
                      alt="filtro2"
                    />
                  </Button>
                  <Button
                    style={{
                      width: "fit-content",
                      display: "flex",
                      alignItems: "center",
                      gap: ".5rem",
                    }}
                    primaryBorder
                  >
                    Filtrar por palas
                    <img
                      src="/filtro2.png"
                      height={16}
                      width={16}
                      alt="filtro2"
                    />
                  </Button>
                  <Button
                    style={{
                      width: "fit-content",
                      display: "flex",
                      alignItems: "center",
                      gap: ".5rem",
                    }}
                    primaryBorder
                  >
                    Filtrar por stockpile
                    <img
                      src="/filtro2.png"
                      height={16}
                      width={16}
                      alt="filtro2"
                    />
                  </Button>
                </div>
                <RegistrosContainer>
                  {registros?.length > 0 ? (
                    registros
                      ?.sort((a, b) =>
                        DateTime.fromISO(a.createdAt) <
                        DateTime.fromISO(b.createdAt)
                          ? 1
                          : -1,
                      )
                      .map((informe) => {
                        const { parametros, id, isLoading, createdAt, ready } =
                          informe;

                        return (
                          <Registro
                            key={id}
                            parametros={parametros}
                            isLoading={isLoading}
                            ready={ready}
                            date={createdAt}
                            id={id}
                            onClick={() => setSelected(informe)}
                          />
                        );
                      })
                  ) : (
                    <p style={{ textAlign: "center" }}>
                      No hay registros que mostrar
                    </p>
                  )}
                </RegistrosContainer>
              </>
            )}
          </SimulacionCard>

          {selected && (
            <RegistroDetails setSelected={setSelected} selected={selected} />
          )}
        </Container>
      ) : (
        <BrandLayout
          backgroundImage="/camion-bg.png"
          right
          anotherChildren={
            <video
              autoPlay
              loop
              muted
              style={{ height: "100%", width: "100%", opacity: 0.9 }}
            >
              <source src="/animacion-registros.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          }
        >
          <Container>
            <Title marginBottom="0">Registros</Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              vero obcaecati quibusdam quis voluptas, quasi mollitia facere
              necessitatibus, illo repellat officiis laudantium consequuntur
              tempore doloribus sit consectetur modi recusandae aut!
            </Text>
            <Button accent onClick={handleIsOpen}>
              Ir allá
            </Button>
          </Container>
        </BrandLayout>
      )}
    </HeaderLayout>
  );
};

export default Registros;
