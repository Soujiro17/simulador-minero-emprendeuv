import axiosPublic from "../../services/axios";

export const addSimulacion = async ({ values }) => {
  const { data } = await axiosPublic.post("/api/simulator/init", values);

  return data;
};

export const getSimulaciones = async () => {
  const { data } = await axiosPublic.get("/api/simulator/get/informes");

  return data;
};

export const getSimulacionById = async ({ id }) => {
  const { data } = await axiosPublic.get(`/api/simulator/get/informe/${id}`);

  return data;
};
