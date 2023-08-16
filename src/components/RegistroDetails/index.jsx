/* eslint-disable no-nested-ternary */
/* eslint-disable radix */
// import Chart from "../Chart";
import Modal from "../Modal";
// import {
//   Container,
//   LineSeparator,
//   RecomendacionesText,
//   Resultados,
//   ResumenContainer,
// } from "./style";

const RegistroDetails = ({
  setSelected,
  // selected
}) => {
  // console.log(selected);
  // let recomendacion = "";
  // let icon = "";
  // let showReverse = false;

  // if (uP >= 80 && uC >= 80) {
  //   recomendacion =
  //     "La elección de camiones y palas es eficiente. Intenta una simulación similar pero con +3 camiones para ver si logras un rendimiento mayor.";
  //   icon = "😊";
  // } else if (uP < 80 && uC > 80) {
  //   recomendacion =
  //     "Se recomienda utilizar más camiones porque el trabajo de las palas no está siendo tan eficiente como debería.";
  //   icon = "🫤";
  //   showReverse = true;
  // } else if (uP > 80 && uC < 80) {
  //   recomendacion =
  //     "Se recomienda utilizar más palas porque el rendimiento de éstas está siendo saturado por la cantidad de camiones que hay.";
  //   icon = "😞";
  // }

  return (
    <Modal height="760px" width="70%" setSelected={setSelected}>
      {/* <ResumenContainer>
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
      </Container> */}
    </Modal>
  );
};

export default RegistroDetails;
