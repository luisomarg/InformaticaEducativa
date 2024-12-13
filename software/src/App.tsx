import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import RegistroUsuario from "./components/Registro";
import Inicio from "./components/Inicio";

const App: React.FC = () => {
  console.log("App component rendered");
  return (
    <Router>
      <div>
        <h1>App is running</h1>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<RegistroUsuario />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/" element={<Navigate to="/Login" replace />} />
          <Route path="*" element={<Navigate to="/Login" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
