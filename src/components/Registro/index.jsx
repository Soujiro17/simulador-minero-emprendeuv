import React from "react";
import { DateTime } from "luxon";
import Img from "../../shared/Img";
import {
  BasuraImg,
  CardRegister,
  CardWrapper,
  DataGroup,
  Fecha,
} from "./style";

const Registro = ({ camiones, palas, stockPiles, simTime, date, onClick }) => {
  const onClickDelete = () => console.log("Deleted");

  return (
    <CardWrapper>
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
          x{camiones}
        </DataGroup>
        <DataGroup>
          <Img contain height="70px" width="100px" src="/pala.png" alt="pala" />
          x {palas}
        </DataGroup>
        <DataGroup>
          <Img
            contain
            height="70px"
            width="100px"
            src="/stockpile.png"
            alt="stockpile"
          />
          x{stockPiles}
        </DataGroup>
        <DataGroup>
          <Img
            contain
            height="70px"
            width="100px"
            src="/reloj.png"
            alt="stockpile"
          />
          {parseFloat(Number(simTime) / 60).toFixed(2)} min
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
