import axiosPublic from "../../services/axios";

export const addSimulacion = async ({ values }) => {
  const { data } = await axiosPublic.post("/simulador/create", values);

  return data;
};

export const getSimulaciones = async () => {
  const { data } = await axiosPublic.get("/simulador/get-all");

  return data;
};

export const getSimulacionById = async ({ id }) => {
  const { data } = await axiosPublic.get(`/simulador/get/${id}`);

  return data;
};
