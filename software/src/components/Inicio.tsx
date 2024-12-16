import React from "react";
import TarjetaInicio from "./TarjetaInicio";

const Inicio: React.FC = () => {
  const tarjetas = [
    {
      titulo: "Módulo 1: Fundamentos del Inglés",
      descripcion: "Aprende los conceptos básicos del idioma inglés.",
      rutaBoton: "/modulo1",
      textoBoton: "Comenzar Módulo 1",
    },
    {
      titulo: "Módulo 2: Inglés Intermedio",
      descripcion: "Mejora tus habilidades en inglés con temas más avanzados.",
      rutaBoton: "/modulo2",
      textoBoton: "Explorar Módulo 2",
    },
    {
      titulo: "Módulo 3: Inglés Avanzado",
      descripcion: "Perfecciona tu inglés con temas y ejercicios complejos.",
      rutaBoton: "/modulo3",
      textoBoton: "Acceder Módulo 3",
    },
  ];

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Bienvenido a tu Curso de Inglés</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {tarjetas.map((tarjeta, index) => (
          <div key={index} className="col">
            <TarjetaInicio
              titulo={tarjeta.titulo}
              descripcion={tarjeta.descripcion}
              rutaBoton={tarjeta.rutaBoton}
              textoBoton={tarjeta.textoBoton}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inicio;
