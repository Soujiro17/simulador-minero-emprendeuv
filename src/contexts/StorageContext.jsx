import { useQuery } from "@tanstack/react-query";
import { useState, useMemo, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { DateTime } from "luxon";
import { getSimulaciones } from "../app/api/simulacion";
import Spinner from "../components/Spinner";

const registroDefaultValue = {
  id: 0,
  camiones: [],
  palas: [],
  parametros: {},
  promedios: {
    camiones: {
      fq: 0,
      td: 0,
      tdo: 0,
      to: 0,
      tons: 0,
      u: 0,
    },
    palas: {
      fq: 0,
      td: 0,
      tdo: 0,
      to: 0,
      tons: 0,
      u: 0,
    },
  },
  isLoading: true,
  ready: false,
  updatedAt: DateTime.now().toISO(),
  createdAt: DateTime.now().toISO(),
};

export const StorageContext = createContext({
  registros: [],
  setRegistros: () => {},
  addRegistro: (values) => values,
  deleteRegistro: (id) => id,
});

export default function StorageProvider({ children }) {
  const [registros, setRegistros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const addRegistro = (parametros) => {
    setRegistros((prev) => [
      ...prev,
      { ...registroDefaultValue, parametros, id: uuidv4() },
    ]);
  };

  const deleteRegistro = (id) => {
    setRegistros((prev) => prev.filter((registro) => registro.id !== id));
  };

  const value = useMemo(
    () => ({ addRegistro, registros, deleteRegistro }),
    [registros],
  );

  useQuery({
    queryKey: ["registros"],
    queryFn: getSimulaciones,
    refetchInterval: 30000,
    refetchIntervalInBackground: 30000,
    onSuccess: (data) => {
      setIsLoading(false);
      setRegistros(
        data.simulaciones?.map((simulacion) => ({
          ...simulacion,
          isLoading: false,
          id: uuidv4(),
        })),
      );
    },
  });

  if (isLoading) return <Spinner />;

  return (
    <StorageContext.Provider value={value}>{children}</StorageContext.Provider>
  );
}
