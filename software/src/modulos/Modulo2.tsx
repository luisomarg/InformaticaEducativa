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
    {
      id: "escrituraCreativa",
      titulo: "Escritura Creativa",
      descripcion: "Desarrolla habilidades de escritura creativa en inglés.",
      ruta: "/modulo2/escritura-creativa",
    },
    {
      id: "comprensionAuditiva",
      titulo: "Comprensión Auditiva",
      descripcion:
        "Mejora tu capacidad para entender el inglés hablado con ejercicios de escucha.",
      ruta: "/modulo2/comprension-auditiva",
    },
    {
      id: "gramaticaIntermedia",
      titulo: "Gramática Intermedia",
      descripcion:
        "Profundiza en conceptos gramaticales más avanzados del inglés.",
      ruta: "/modulo2/gramatica-intermedia",
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
