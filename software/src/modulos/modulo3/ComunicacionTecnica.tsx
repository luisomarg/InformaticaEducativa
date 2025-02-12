import React from "react";
import OrdenarOracion from "../../components/OrdenarOracion";

const ComunicacionTecnica: React.FC = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Comunicación Técnica en Inglés</h1>

      <section className="mb-5">
        <h2>Lección 1: Vocabulario Técnico Esencial</h2>
        <p>
          En esta lección, aprenderemos vocabulario técnico esencial en inglés
          que se utiliza comúnmente en el campo de la tecnología y la
          informática.
        </p>
        <ul>
          <li>Hardware: Componentes físicos de un sistema informático</li>
          <li>Software: Programas y datos que hacen funcionar un ordenador</li>
          <li>Network: Red de dispositivos conectados</li>
          <li>Database: Base de datos para almacenar información</li>
          <li>
            Algorithm: Conjunto de instrucciones para resolver un problema
          </li>
        </ul>
      </section>

      <section className="mb-5">
        <h2>Lección 2: Estructura de Frases Técnicas</h2>
        <p>
          Aprenderemos cómo estructurar frases técnicas en inglés de manera
          clara y concisa.
        </p>
        <OrdenarOracion
          oracionDesordenada={["the", "database", "to", "query", "use", "SQL"]}
          oracionCorrecta="Use SQL to query the database"
        />
      </section>

      <section className="mb-5">
        <h2>Lección 3: Explicación de Procesos Técnicos</h2>
        <p>
          En esta lección, practicaremos cómo explicar procesos técnicos en
          inglés de manera efectiva.
        </p>
        <p>
          Ejemplo: "To deploy the application, first compile the source code,
          then package it into a container, and finally push it to the cloud
          server."
        </p>
      </section>

      <section className="mb-5">
        <h2>Ejercicio: Describe un Proceso Técnico</h2>
        <p>
          Intenta describir el proceso de crear una base de datos simple en
          inglés. Utiliza el vocabulario y las estructuras que hemos aprendido.
        </p>
        <textarea
          className="form-control"
          rows={5}
          placeholder="Escribe tu respuesta aquí..."
        ></textarea>
        <button className="btn btn-primary mt-3">Verificar</button>
      </section>
    </div>
  );
};

export default ComunicacionTecnica;
