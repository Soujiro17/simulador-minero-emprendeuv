import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "../pages/Inicio";
import Instructivo from "../pages/Instructivo";
import CrearSimulacion from "../pages/CrearSimulacion";
import Registros from "../pages/Registros";
import HeaderLayout from "../layouts/HeaderLayout";
import InstructivoVideo from "../pages/InstructivoVideo";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* <Route path="/informacion" element={<Information />} /> */}
        <Route path="/instructivo" element={<Instructivo />} />
        <Route path="/instructivo/video" element={<InstructivoVideo />} />
        <Route path="/simulador" element={<CrearSimulacion />} />
        <Route path="/registros" element={<Registros />} />
        <Route
          path="*"
          element={
            <HeaderLayout>
              <p>Página no encontrada</p>
            </HeaderLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
