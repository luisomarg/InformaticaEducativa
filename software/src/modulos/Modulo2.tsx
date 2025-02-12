import React from "react";
import ListaSubmodulos from "../components/ListaSubmodulos";

const Modulo2: React.FC = () => {
  const submodulos = [
    {
      id: "thereIsAre",
      titulo: "There is y There are",
      descripcion: "Aprende a usar There is y There are.",
      ruta: "/modulo2/there",
    },
    {
      id: "lugar",
      titulo: "Preposiciones de Lugar",
      descripcion: "Aprende a uar las preposiciones de lugar.",
      ruta: "/modulo2/lugar",
    },
    {
      id: "vocabularioAcademico",
      titulo: "Vocabulario Academico",
      descripcion: "Una breve leccion sobre los terminos mas comunes.",
      ruta: "/modulo2/vocabularioAcademico",
    },
  ];

  return (
    <ListaSubmodulos
      titulo="Módulo 2: Inglés Intermedio"
      submodulos={submodulos}
    />
  );
};

export default Modulo2;
