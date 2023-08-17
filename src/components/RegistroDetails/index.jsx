/* eslint-disable import/no-named-as-default */
/* eslint-disable no-nested-ternary */
/* eslint-disable radix */
import Chart from "../Chart";
import Modal from "../Modal";
import {
  Container,
  LineSeparator,
  RecomendacionesText,
  Resultados,
  ResumenContainer,
} from "./style";

const RegistroDetails = ({ setSelected, selected }) => {
  const { parametros, promedios, camiones, palas } = selected;
  const { camiones: camionesPromedios, palas: palasPromedios } = promedios;

  let recomendacion = "";
  let icon = "";
  let showReverse = false;

  const palasEstimadas = Math.ceil(parametros.camiones / 15);
  const camionesEstimados = parametros.palas * 15;

  if (palasPromedios.u >= 80 && camionesPromedios.u >= 80) {
    recomendacion =
      "La elección de camiones y palas es eficiente. Intenta una simulación similar pero con +3 camiones para ver si logras un rendimiento mayor.";
    icon = "😊";
  } else if (palasPromedios.u < 80 && camionesPromedios.u > 80) {
    recomendacion =
      "Se recomienda utilizar más camiones porque el trabajo de las palas no está siendo tan eficiente como debería.";
    icon = "🫤";
    showReverse = true;
  } else if (palasPromedios.u > 80 && camionesPromedios.u < 80) {
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
            Camiones utilizados: <strong>{parametros.camiones}</strong>
          </li>
          <li>
            Palas utilizadas: <strong>{parametros.palas}</strong>
          </li>
          <li>
            Utilización promedio de camiones:{" "}
            <strong>
              {camionesPromedios.u > 100 ? 100 : camionesPromedios.u}%
            </strong>
          </li>
          <li>
            Promedio utilización palas:{" "}
            <strong>{palasPromedios.u > 100 ? 100 : palasPromedios.u}%</strong>
          </li>
          <li>
            Toneladas por turno promedio camiones:{" "}
            <strong>{camionesPromedios.tons}</strong>
          </li>
          <li>
            Toneladas por turno promedio palas:{" "}
            <strong>{camionesPromedios.tons}</strong>
          </li>
          <li>
            Tiempo operativo promedio camiones:{" "}
            <strong>
              {parseFloat(camionesPromedios.to / 60).toFixed(2)} min
            </strong>
          </li>
          <li>
            Tiempo operativo promedio palas:{" "}
            <strong>{parseFloat(palasPromedios.to / 60).toFixed(2)} min</strong>
          </li>
          <li>
            Tiempo demoras promedio camiones:{" "}
            <strong>
              {parseFloat(camionesPromedios.tdo / 60).toFixed(2)} min
            </strong>
          </li>
          <li>
            Tiempo demoras promedio palas:{" "}
            <strong>
              {parseFloat(palasPromedios.tdo / 60).toFixed(2)} min
            </strong>
          </li>
        </Resultados>
        <RecomendacionesText>Recomendaciones</RecomendacionesText>
        <div style={{ textAlign: "center" }}>
          <p>{recomendacion}</p>
          <p>
            <strong>
              {showReverse
                ? `
                * Para una flota de ${parametros.palas} palas se recomiendan ${camionesEstimados} camiones`
                : `* Para una flota de ${parametros.camiones} camiones se recomiendan ${palasEstimadas} palas`}
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
          labels={camiones.map((camion) => camion.nombre)}
          datasets={[
            camiones.map((camion) => camion.u),
            palas.map((pala) => pala.u),
          ]}
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
          labels={Array(parametros.camiones)
            .fill()
            .map((_, index) => index + 1)}
          datasets={[
            camiones.map((camion) => parseFloat(camion.tons).toFixed(2)),
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
          labels={Array(parametros.camiones)
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
          datasets={[camiones.map((camion) => camion.fq)]}
          datasetLabels={["Camiones"]}
        />
        <LineSeparator />
        <Chart
          labels={Array(parametros.camiones)
            .fill()
            .map((_, index) => index + 1)}
          id="4"
          type="line"
          title="Tiempo de demoras de camiones (min)"
          yLabel="Tiempo de demoras (min)"
          xLabel="Camiones"
          datasets={[camiones.map((camion) => camion.tdo)]}
          datasetLabels={["Camiones"]}
          categoryPercentage={0.8}
          barPercentage={0.5}
          minY={0}
        />
      </Container>
    </Modal>
  );
};

export default RegistroDetails;
