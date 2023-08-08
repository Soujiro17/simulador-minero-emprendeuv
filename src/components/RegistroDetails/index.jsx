/* eslint-disable no-nested-ternary */
/* eslint-disable radix */
import { useQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";
import { getSimulacionById } from "../../app/api/simulacion";
import Chart from "../Chart";
import Modal from "../Modal";
import Spinner from "../Spinner";
import {
  Container,
  LineSeparator,
  RecomendacionesText,
  Resultados,
  ResumenContainer,
} from "./style";

const RegistroDetails = React.memo(function RegistroDetails({
  selected,
  setSelected,
}) {
  const { data = { informe: {} }, isLoading } = useQuery(
    ["simulacion", selected._id],
    () => getSimulacionById({ id: selected._id }),
  );

  const { informe } = data;
  let recomendacion = "";
  let icon = "";
  let showReverse = false;

  const { palas = 0, camiones = 0, metricas = [], resultados = [] } = informe;

  // HACER LOS GRÁFICOS MÁS ENTENDIBLES EN TEMAS DE UNIDADES Y DEMÁS

  const parsedData = useMemo(() => {
    if (!metricas.length || !camiones || !palas) return;

    const sortedObject = {
      palas: {
        nombres: [],
        td: [],
        tons: [],
        to: [],
        tdo: [],
        u: [],
        fq: [],
        promedios: {
          td: 0.0,
          tons: 0.0,
          to: 0.0,
          tdo: 0.0,
          u: 0.0,
          fq: 0.0,
        },
      },
      camiones: {
        nombres: [],
        td: [],
        tons: [],
        to: [],
        tdo: [],
        u: [],
        fq: [],
        promedios: {
          td: 0.0,
          tons: 0.0,
          to: 0.0,
          tdo: 0.0,
          u: 0.0,
          fq: 0.0,
        },
      },
    };

    const newObject = {
      palas: [],
      camiones: [],
    };

    for (let i = 1; i <= palas + camiones; i += 1) {
      const name = metricas[0][i].includes("camion") ? "camiones" : "palas";

      const nombre =
        Number(metricas[0][i].replace("camion_", "").replace("pala_", "")) + 1;

      const td = parseFloat(metricas[1][i]).toFixed(2);
      const tons = parseFloat(metricas[2][i]).toFixed(2);
      const to = parseFloat(metricas[3][i]).toFixed(2);
      const tdo = parseFloat(metricas[4][i]).toFixed(2);
      const u = parseFloat(metricas[5][i]).toFixed(2);
      const fq = parseFloat(metricas[6][i]).toFixed(2);

      sortedObject[name].promedios.td += parseFloat(td === "NaN" ? 0 : td);
      sortedObject[name].promedios.tons += parseFloat(
        tons === "NaN" ? 0 : tons,
      );
      sortedObject[name].promedios.to += parseFloat(to === "NaN" ? 0 : to);
      sortedObject[name].promedios.tdo += parseFloat(tdo === "NaN" ? 0 : tdo);
      sortedObject[name].promedios.u += parseFloat(u === "NaN" ? 0 : u);
      sortedObject[name].promedios.fq += parseFloat(fq === "NaN" ? 0 : fq);

      const tempObj = { nombre, td, tons, to, tdo, u, fq };

      newObject[name].push(tempObj);

      // TD : tiempo disponible
      // TONS : toneladas
      // TO : tiempo operativo
      // TDO: tiempo de demoras
      // U : utilización
      // FQ: frecuencia de llenado (tons transportadas/capacidad real)
      // el TDO solo es tiempo de espera y viaje vacio para el camión
      // para la pala es solo tiempo de espera
    }

    newObject.camiones.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));
    newObject.palas.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));

    for (let i = 0; i < camiones; i += 1) {
      sortedObject.camiones.nombres.push(newObject.camiones[i].nombre);
      sortedObject.camiones.td.push(newObject.camiones[i].td);
      sortedObject.camiones.tons.push(newObject.camiones[i].tons);
      sortedObject.camiones.to.push(newObject.camiones[i].to);
      sortedObject.camiones.tdo.push(newObject.camiones[i].tdo);
      sortedObject.camiones.u.push(newObject.camiones[i].u);
      sortedObject.camiones.fq.push(newObject.camiones[i].fq);
    }

    for (let i = 0; i < palas; i += 1) {
      sortedObject.palas.nombres.push(newObject.palas[i].nombre);
      sortedObject.palas.td.push(newObject.palas[i].td);
      sortedObject.palas.tons.push(newObject.palas[i].tons);
      sortedObject.palas.to.push(newObject.palas[i].to);
      sortedObject.palas.tdo.push(newObject.palas[i].tdo);
      sortedObject.palas.u.push(newObject.palas[i].u);
      sortedObject.palas.fq.push(newObject.palas[i].fq);
    }

    Object.entries(sortedObject.palas.promedios).map(([key, _]) => {
      sortedObject.camiones.promedios[key] = parseFloat(
        sortedObject.camiones.promedios[key] / camiones,
      ).toFixed(2);
      sortedObject.palas.promedios[key] = parseFloat(
        sortedObject.palas.promedios[key] / palas,
      ).toFixed(2);
      return null;
    });

    return sortedObject;
  }, [metricas, camiones, palas]);

  const colaInfo = useMemo(() => {
    if (!resultados.length) return;

    const finalObject = {
      id: [],
      tiempo: [],
      cola: [],
    };

    resultados.map((row, index) => {
      if (index === 0) return null;
      if (!row[3].includes("ver-cola")) return null;

      const [id, , tiempo, , , cola] = row;

      finalObject.id.push(id);
      finalObject.tiempo.push(
        parseFloat(parseInt(tiempo).toFixed(2) / 60).toFixed(2),
      );
      finalObject.cola.push(cola);

      return null;
    });

    return finalObject;
  }, [resultados]);

  if (isLoading) return <Spinner fullScreen />;

  // console.log(parsedData);

  const palasEstimadas = Math.ceil(camiones / 15);
  const camionesEstimados = palas * 15;

  const {
    u: uC,
    // td: tdC,
    // fq: fqC,
    tdo: tdoC,
    to: toC,
    tons: tonsC,
  } = parsedData.camiones.promedios;
  const {
    u: uP,
    // td: tdP,
    // fq: fqP,
    tdo: tdoP,
    to: toP,
    tons: tonsP,
  } = parsedData.palas.promedios;

  if (uP >= 80 && uC >= 80) {
    recomendacion =
      "La elección de camiones y palas es eficiente. Intenta una simulación similar pero con +3 camiones para ver si logras un rendimiento mayor.";
    icon = "😊";
  } else if (uP < 80 && uC > 80) {
    recomendacion =
      "Se recomienda utilizar más camiones porque el trabajo de las palas no está siendo tan eficiente como debería.";
    icon = "🫤";
    showReverse = true;
  } else if (uP > 80 && uC < 80) {
    recomendacion =
      "Se recomienda utilizar más palas porque el rendimiento de éstas está siendo saturado por la cantidad de camiones que hay.";
    icon = "😞";
  }

  return (
    <Modal height="760px" width="70%" setSelected={setSelected}>
      <ResumenContainer>
        <RecomendacionesText>Resúmen</RecomendacionesText>
        <Resultados>
          <li>
            Camiones utilizados: <strong>{camiones}</strong>
          </li>
          <li>
            Palas utilizadas: <strong>{palas}</strong>
          </li>
          <li>
            Utilización promedio de camiones:{" "}
            <strong>{uC > 100 ? 100 : uC}%</strong>
          </li>
          <li>
            Promedio utilización palas: <strong>{uP > 100 ? 100 : uP}%</strong>
          </li>
          <li>
            Toneladas por turno promedio camiones: <strong>{tonsC}</strong>
          </li>
          <li>
            Toneladas por turno promedio palas: <strong>{tonsP}</strong>
          </li>
          {/* <li>
            Tiempo disponible por turno promedio camiones:{" "}
            <strong>{tdC / 60} min</strong>
          </li>
          <li>
            Tiempo disponible por turno promedio palas:{" "}
            <strong>{tdP / 60} min</strong>
          </li> */}
          <li>
            Tiempo operativo promedio camiones:{" "}
            <strong>{parseFloat(toC / 60).toFixed(2)} min</strong>
          </li>
          <li>
            Tiempo operativo promedio palas:{" "}
            <strong>{parseFloat(toP / 60).toFixed(2)} min</strong>
          </li>
          <li>
            Tiempo demoras promedio camiones:{" "}
            <strong>{parseFloat(tdoC / 60).toFixed(2)} min</strong>
          </li>
          <li>
            Tiempo demoras promedio palas:{" "}
            <strong>{parseFloat(tdoP / 60).toFixed(2)} min</strong>
          </li>
        </Resultados>
        <RecomendacionesText>Recomendaciones</RecomendacionesText>
        <div style={{ textAlign: "center" }}>
          <p>{recomendacion}</p>
          <p>
            <strong>
              {showReverse
                ? `
                * Para una flota de ${palas} palas se recomiendan ${camionesEstimados} camiones`
                : `* Para una flota de ${camiones} camiones se recomiendan ${palasEstimadas} palas`}
            </strong>
          </p>
          <h1 style={{ fontSize: "calc(1.2rem + 4vw)", margin: "0" }}>
            {icon}
          </h1>
        </div>
      </ResumenContainer>
      <Container>
        <Chart
          id="1"
          type="bar"
          labels={parsedData.camiones.nombres}
          datasets={[parsedData.camiones.u, parsedData.palas.u]}
          datasetLabels={["Camiones", "Palas"]}
          disableDatalabels
          title="Utilización por maquinaria (%/N)"
          xLabel="Cantidad de máquinas (N)"
          yLabel="Porcentaje de utilización (%)"
          maxY={100}
          formater={(value) => {
            return `${value > 100 ? 100 : value}%`;
          }}
        />
        <LineSeparator />
        <Chart
          id="2"
          type="bar"
          labels={Array(camiones)
            .fill()
            .map((_, index) => index + 1)}
          datasets={[
            parsedData.camiones.tons.map((ton) => ton.toLocaleString("es")),
          ]}
          datasetLabels={["Camiones"]}
          title="Toneladas turno por cantidad de camiones (T/camiones)"
          xLabel="Cantidad de máquinas (máquinas)"
          yLabel="Toneladas producidas (T)"
          minY={0}
          categoryPercentage={0.8}
          barPercentage={0.5}
        />
        <LineSeparator />
        <Chart
          labels={Array(camiones)
            .fill()
            .map((_, index) => index + 1)}
          id="3"
          type="line"
          title="Frecuencia de uso de camiones (%)"
          yLabel="Porcentaje de uso (%)"
          xLabel="Camiones"
          maxY={100}
          disableDatalabels
          disableRadius
          minY={0}
          formater={(value) => {
            return `${value > 100 ? 100 : value}%`;
          }}
          datasets={[parsedData.camiones.fq]}
          datasetLabels={["Camiones"]}
        />
        <LineSeparator />
        <Chart
          labels={Array(camiones)
            .fill()
            .map((_, index) => index + 1)}
          id="4"
          type="line"
          title="Tiempo de demoras de camiones (min)"
          yLabel="Tiempo de demoras (min)"
          xLabel="Camiones"
          datasets={[
            parsedData.camiones.tdo.map((val) =>
              parseFloat(val / 60)
                .toFixed(2)
                .toLocaleString("es-CL"),
            ),
          ]}
          datasetLabels={["Camiones"]}
          categoryPercentage={0.8}
          barPercentage={0.5}
          minY={0}
        />
        <LineSeparator />
        <Chart
          labels={colaInfo.tiempo}
          id="4"
          type="line"
          title="Tamaño de colas por minuto"
          yLabel="Tamaño de cola"
          xLabel="Tiempo (min)"
          datasets={[colaInfo.cola]} // aquí tengo que ver que hacer
          disableDatalabels
          datasetLabels={colaInfo.id}
          categoryPercentage={0.8}
          disableRadius
          barPercentage={0.5}
          minY={0}
        />
      </Container>
    </Modal>
  );
});

export default RegistroDetails;
