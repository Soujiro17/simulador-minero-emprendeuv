import React from "react";
import { DateTime } from "luxon";
import Img from "../../shared/Img";
import { CardRegister, DataGroup, Fecha } from "./style";

const Registro = ({ camiones, palas, stockPiles, simTime, date, onClick }) => {
  return (
    <CardRegister onClick={onClick}>
      <DataGroup>
        <Img
          contain
          height="100%"
          width="50%"
          src="/camion.png"
          alt="camiones"
        />
        x {camiones}
      </DataGroup>
      <DataGroup>
        <Img contain height="100%" width="50%" src="/pala.png" alt="pala" />x{" "}
        {palas}
      </DataGroup>
      <DataGroup>
        <Img
          contain
          height="100%"
          width="50%"
          src="/monton-arena.png"
          alt="stockpile"
        />
        x {stockPiles}
      </DataGroup>
      <DataGroup>
        <Img
          contain
          height="100%"
          width="50%"
          src="/reloj.png"
          alt="stockpile"
        />
        {parseFloat(Number(simTime) / 60).toFixed(2)} min
      </DataGroup>
      <Fecha>
        {DateTime.fromISO(date).toFormat(
          "dd 'de' LLL 'del' yyyy 'a las' HH:mm",
          { locale: "es" },
        )}
      </Fecha>
    </CardRegister>
  );
};

export default Registro;
