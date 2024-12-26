import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import Modulo1 from "./modulos/Modulo1";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Gramatica from "./modulos/modulo1/Gramatica";
import Pronunciacion from "./modulos/modulo1/Pronunciacion";
import Basico from "./modulos/modulo1/Basico";
import Tobe from "./modulos/modulo1/Tobe";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/modulo1" element={<Modulo1 />} />
        <Route path="/modulo1/basico" element={<Basico />} />
        <Route path="/modulo1/gramatica" element={<Gramatica />} />
        <Route path="/modulo1/pronunciacion" element={<Pronunciacion />} />
        <Route path="/modulo1/tobe" element={<Tobe />} />
      </Routes>
    </Router>
  );
};

export default App;
