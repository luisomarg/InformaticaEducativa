import React from "react";
import ListaSubmodulos from "../components/ListaSubmodulos";

const Modulo1: React.FC = () => {
  const submodulos = [
    {
      id: "Introduccion",
      titulo: "Gramática Básica",
      descripcion: "Aprende las reglas gramaticales fundamentales del inglés.",
      ruta: "/modulo1/basico",
    },
    {
      id: "vocabulario",
      titulo: "Verbo To be",
      descripcion: "Una introduccion sobre que es el verbo To be.",
      ruta: "/modulo1/tobe",
    },
    {
      id: "pronunciacion",
      titulo: "Pronunciación Inicial",
      descripcion:
        "Mejora tu pronunciación con ejercicios básicos de fonética.",
      ruta: "/modulo1/pronunciacion",
    },
    {
      id: "lectura",
      titulo: "Lectura Comprensiva",
      descripcion:
        "Practica la lectura con textos cortos y sencillos en inglés.",
      ruta: "/modulo1/lectura",
    },
  ];

  return (
    <ListaSubmodulos
      titulo="Módulo 1: Fundamentos del Inglés"
      submodulos={submodulos}
    />
  );
};

export default Modulo1;
