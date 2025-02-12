import React from "react";
import ListaSubmodulos from "../components/ListaSubmodulos";

const Modulo3: React.FC = () => {
  const submodulos = [
    {
      id: "comunicacionTecnica",
      titulo: "Comunicación Técnica",
      descripcion:
        "Aprende a comunicar conceptos técnicos en inglés de manera efectiva.",
      ruta: "/modulo3/comunicacionTecnica",
    },
    {
      id: "documentacionSoftware",
      titulo: "Documentación de Software",
      descripcion:
        "Desarrolla habilidades para escribir y entender documentación técnica en inglés.",
      ruta: "/modulo3/documentacionSoftware",
    },
    {
      id: "entrevistaTecnica",
      titulo: "Entrevista Técnica",
      descripcion:
        "Prepárate para entrevistas técnicas en inglés en el campo de IT.",
      ruta: "/modulo3/entrevistaTecnica",
    },
    {
      id: "presentacionesTecnicas",
      titulo: "Presentaciones Técnicas",
      descripcion:
        "Aprende a realizar presentaciones técnicas efectivas en inglés.",
      ruta: "/modulo3/presentaciones-tecnicas",
    },
  ];

  return (
    <ListaSubmodulos
      titulo="Módulo 3: Inglés Técnico Avanzado"
      submodulos={submodulos}
    />
  );
};

export default Modulo3;
