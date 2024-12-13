import React from "react";
import TarjetaInicio from "./TarjetaInicio";

const Inicio: React.FC = () => {
  const tarjetas = [
    {
      titulo: "Mis Cursos",
      descripcion: "Accede a tus cursos actuales y material de estudio.",
      rutaBoton: "/mis-cursos",
      textoBoton: "Ver Cursos",
    },
    {
      titulo: "Calendario",
      descripcion: "Revisa tus próximas clases y eventos importantes.",
      rutaBoton: "/calendario",
      textoBoton: "Ver Calendario",
    },
    {
      titulo: "Tareas Pendientes",
      descripcion: "Gestiona tus tareas y proyectos pendientes.",
      rutaBoton: "/tareas",
      textoBoton: "Ver Tareas",
    },
    // Puedes agregar más tarjetas aquí
  ];

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Bienvenido a la página de inicio</h1>
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
