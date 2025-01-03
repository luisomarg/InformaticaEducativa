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
      titulo: "Pronombres en Inglés",
      descripcion: "Una breve introduccion a los Pronombres personales.",
      ruta: "/modulo1/pronombres",
    },
    {
      id: "presentarse",
      titulo: "Presentarse a si mismo",
      descripcion: "Practica como presentarte a ti mismo en una entrevista.",
      ruta: "/modulo1/presentarse",
    },
    {
      id: "lectura",
      titulo: "Informacion Personal Basica",
      descripcion: "Practica como dar tu informacion personal mediate IA.",
      ruta: "/modulo1/personal",
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
