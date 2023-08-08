import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "../pages/Inicio";
import Information from "../pages/Informacion";
import Instructivo from "../pages/Instructivo";
import CrearSimulacion from "../pages/CrearSimulacion";
import Registros from "../pages/Registros";
import HeaderLayout from "../layouts/HeaderLayout";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* <Route path="/informacion" element={<Information />} /> */}
        <Route path="/instructivo" element={<Instructivo />} />
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
