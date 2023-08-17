import React from "react";
import { DateTime } from "luxon";
import { toast } from "react-toastify";
import Img from "../../shared/Img";
import {
  BasuraImg,
  CardRegister,
  CardWrapper,
  DataGroup,
  Fecha,
} from "./style";
import useStorage from "../../hooks/useStorage";
import Spinner from "../Spinner";

const Registro = ({ parametros, isLoading, date, id, onClick }) => {
  const { deleteRegistro } = useStorage();

  const onClickDelete = () => {
    if (isLoading) return null;

    if (!window.confirm("¿Deseas eliminar el registro?")) return null;

    deleteRegistro(id);

    toast.success("Simulación eliminada con éxito");

    return null;
  };

  return (
    <CardWrapper>
      {isLoading && (
        <Spinner absolute customMessage="Realizando simulación..." />
      )}
      <BasuraImg onClick={onClickDelete} src="/basurero.png" alt="basurero" />
      <CardRegister onClick={onClick}>
        <DataGroup>
          <Img
            contain
            height="70px"
            width="100px"
            src="/camion.png"
            alt="camiones"
          />
          x{parametros.camiones}
        </DataGroup>
        <DataGroup>
          <Img contain height="70px" width="100px" src="/pala.png" alt="pala" />
          x {parametros.palas}
        </DataGroup>
        <DataGroup>
          <Img
            contain
            height="70px"
            width="100px"
            src="/stockpile.png"
            alt="stockpile"
          />
          x{parametros.stockPiles}
        </DataGroup>
        <DataGroup>
          <Img
            contain
            height="70px"
            width="100px"
            src="/reloj.png"
            alt="stockpile"
          />
          {parseFloat(Number(parametros.tiempoSimulacion)).toFixed(2)} min
        </DataGroup>
        <Fecha>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/calendario.png"
              alt="calendario"
              style={{ marginRight: "3px" }}
            />
            {DateTime.fromISO(date).toFormat("dd 'de' LLL 'del' yyyy", {
              locale: "es",
            })}
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/hora.png" alt="hora" style={{ marginRight: "3px" }} />
            {DateTime.fromISO(date).toFormat("HH:mm", { locale: "es" })}
          </span>
        </Fecha>
      </CardRegister>
    </CardWrapper>
  );
};

export default Registro;
