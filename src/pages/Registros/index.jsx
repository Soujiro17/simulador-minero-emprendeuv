/* eslint-disable no-underscore-dangle */
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
import HeaderLayout from "../../layouts/HeaderLayout";
import { Container, RegistrosContainer, RegistrosTitle } from "./style";
import Card from "../../components/Card";
import Registro from "../../components/Registro";
import RegistroDetails from "../../components/RegistroDetails";
import Spinner from "../../components/Spinner";
import { getSimulaciones } from "../../app/api/simulacion";

const Registros = () => {
  const [selected, setSelected] = useState(null);

  const { data, isLoading } = useQuery(["simulaciones"], getSimulaciones);

  return (
    <HeaderLayout>
      <Container>
        <Card minHeight="800px">
          {isLoading ? (
            <Spinner minHeight="750px" />
          ) : (
            <>
              <RegistrosTitle>Registros almacenados</RegistrosTitle>
              <RegistrosContainer>
                {data?.informes?.length > 0 ? (
                  data?.informes
                    ?.sort((a, b) =>
                      DateTime.fromISO(a.createdAt) <
                      DateTime.fromISO(b.createdAt)
                        ? 1
                        : -1,
                    )
                    .map((informe) => (
                      <Registro
                        key={informe._id}
                        camiones={informe.camiones}
                        palas={informe.palas}
                        stockPiles={informe.stock_piles}
                        simTime={informe.simTime}
                        date={informe.createdAt}
                        metricas={informe.metricas}
                        onClick={() => setSelected(informe)}
                      />
                    ))
                ) : (
                  <p style={{ textAlign: "center" }}>
                    No hay registros que mostrar
                  </p>
                )}
                {/* <Registro
                  key={example._id}
                  camiones={example.camiones}
                  palas={example.palas}
                  stockPiles={example.stock_piles}
                  simTime={example.simTime}
                  date={example.createdAt}
                  onClick={() => setSelected(example)}
                /> */}
              </RegistrosContainer>
            </>
          )}
        </Card>
        {selected && (
          <RegistroDetails setSelected={setSelected} selected={selected} />
        )}
      </Container>
    </HeaderLayout>
  );
};

export default Registros;
