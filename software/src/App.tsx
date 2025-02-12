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
import Pronombres from "./modulos/modulo1/Pronombres";
import Presentarse from "./modulos/modulo1/Presentarse";
import Personal from "./modulos/modulo1/Personal";
import Modulo2 from "./modulos/Modulo2";
import There from "./modulos/modulo2/There";
import Lugar from "./modulos/modulo2/Lugar";
import VocabularioAcademico from "./modulos/modulo2/VocabularioAcademico";
import Modulo3 from "./modulos/Modulo3";
import ComunicacionTecnica from "./modulos/modulo3/ComunicacionTecnica";
import DocumentacionSoftware from "./modulos/modulo3/DocumentacionSoftware";
import EntrevistaTecnica from "./modulos/modulo3/EntrevistaTecnica";

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
        <Route path="/modulo1/pronombres" element={<Pronombres />} />
        <Route path="/modulo1/presentarse" element={<Presentarse />} />
        <Route path="/modulo1/personal" element={<Personal />} />
        <Route path="/modulo2" element={<Modulo2 />} />
        <Route path="/modulo2/there" element={<There />} />
        <Route path="/modulo2/lugar" element={<Lugar />} />
        <Route
          path="/modulo2/vocabularioAcademico"
          element={<VocabularioAcademico />}
        />
        <Route path="/modulo3" element={<Modulo3 />} />
        <Route
          path="/modulo3/comunicacionTecnica"
          element={<ComunicacionTecnica />}
        />
        <Route
          path="/modulo3/documentacion-software"
          element={<DocumentacionSoftware />}
        />
        <Route
          path="/modulo3/entrevistaTecnica"
          element={<EntrevistaTecnica />}
        />
      </Routes>
    </Router>
  );
};

export default App;
