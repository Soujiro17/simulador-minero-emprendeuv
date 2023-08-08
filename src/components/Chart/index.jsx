import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// eslint-disable-next-line import/no-unresolved
import { Bar, Line, Scatter } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import colors from "../../constants/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
);

export const Chart = ({
  type,
  title,
  datasets,
  labels,
  datasetLabels,
  formater,
  xLabel,
  yLabel,
  minX,
  maxX,
  minY,
  maxY,
  id,
  categoryPercentage,
  barPercentage,
  disableDatalabels,
  disableRadius,
}) => {
  const data = {
    labels,
    datasets:
      typeof datasets === "function"
        ? () => datasets({ colors })
        : datasets.map((dataset, index) => {
            return {
              label: datasetLabels[index],
              data: dataset,
              backgroundColor: colors.randomColors[index],
              radius: disableRadius ? 0 : 3,
            };
          }),
  };

  const options = {
    responsive: true,
    categoryPercentage,
    barPercentage,
    elements: {
      line: {
        borderColor: "#160381c1",
        borderWidth: 3,
      },
    },
    plugins: {
      datalabels: disableDatalabels
        ? null
        : {
            anchor: "end",
            formatter: formater,
          },
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: xLabel,
        },
        min: minX,
        max: maxX,
      },
      y: {
        display: true,
        title: {
          display: true,
          text: yLabel,
        },
        min: minY,
        max: maxY,
      },
    },
  };

  if (type === "bar")
    return <Bar redraw id={id} options={options} data={data} />;

  if (type === "line")
    return <Line redraw id={id} options={options} data={data} />;
  if (type === "scatter")
    return <Scatter redraw id={id} options={options} data={data} />;

  return <p>Selecciona un gráfico</p>;
};

export default Chart;
