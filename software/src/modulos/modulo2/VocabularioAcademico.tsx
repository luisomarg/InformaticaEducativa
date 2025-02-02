import React from "react";
import PalabraAudio from "../../components/PalabraAudio";
import Seleccion from "../../components/Seleccion";

const VocabularioAcademico: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Vocabulario Académico en Ingeniería Informática
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Conceptos Fundamentales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Algorithm (Algoritmo)</h3>
            <p className="mb-2">
              Un conjunto de instrucciones paso a paso para resolver un problema
              o realizar una tarea.
            </p>
            <PalabraAudio
              palabra="The sorting algorithm efficiently organizes the data."
              significado="El algoritmo de ordenamiento organiza eficientemente los datos."
            />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">
              Database (Base de datos)
            </h3>
            <p className="mb-2">
              Una colección estructurada de datos almacenados y organizados para
              su fácil acceso y gestión.
            </p>
            <PalabraAudio
              palabra="We need to optimize the database queries for better performance."
              significado="Necesitamos optimizar las consultas de la base de datos para un mejor rendimiento."
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Programación y Desarrollo
        </h2>
        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="mb-2">
            <PalabraAudio
              palabra="Object-Oriented Programming (OOP)"
              significado="Programación Orientada a Objetos (POO)"
            />
            <span className="ml-2">
              Un paradigma de programación basado en el concepto de "objetos",
              que pueden contener datos y código.
            </span>
          </p>
          <p className="mb-2">
            <PalabraAudio
              palabra="Version Control System (VCS)"
              significado="Sistema de Control de Versiones"
            />
            <span className="ml-2">
              Herramientas que ayudan a rastrear y gestionar cambios en el
              código fuente a lo largo del tiempo.
            </span>
          </p>
          <p>
            <PalabraAudio
              palabra="Application Programming Interface (API)"
              significado="Interfaz de Programación de Aplicaciones"
            />
            <span className="ml-2">
              Un conjunto de definiciones y protocolos para construir e integrar
              software de aplicaciones.
            </span>
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Redes y Seguridad</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Firewall (Cortafuegos)</h3>
            <p className="mb-2">
              Un sistema de seguridad de red que monitorea y controla el tráfico
              de red entrante y saliente.
            </p>
            <PalabraAudio
              palabra="The firewall blocked the unauthorized access attempt."
              significado="El cortafuegos bloqueó el intento de acceso no autorizado."
            />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">
              Encryption (Encriptación)
            </h3>
            <p className="mb-2">
              El proceso de codificar información de manera que solo las partes
              autorizadas puedan acceder a ella.
            </p>
            <PalabraAudio
              palabra="We use strong encryption to protect sensitive data."
              significado="Usamos encriptación fuerte para proteger datos sensibles."
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Ejercicio de Comprensión
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-medium mb-3">
            Selecciona la definición correcta:
          </h3>
          <Seleccion
            fraseEspanol="¿Qué es un 'debugger' en programación?"
            opciones={[
              {
                id: 1,
                texto:
                  "Una herramienta para optimizar el rendimiento del código",
                esCorrecta: false,
              },
              {
                id: 2,
                texto:
                  "Un programa para detectar y corregir errores en el código",
                esCorrecta: true,
              },
              {
                id: 3,
                texto: "Un sistema para compilar código fuente",
                esCorrecta: false,
              },
            ]}
          />
        </div>
      </section>

      <div className="alert alert-info" role="alert">
        <h4 className="alert-heading">Consejo de Estudio</h4>
        <p>
          Para mejorar tu vocabulario técnico en inglés, intenta leer
          documentación técnica y artículos académicos en inglés relacionados
          con la ingeniería informática. Esto te ayudará a familiarizarte con la
          terminología en contexto.
        </p>
      </div>
    </div>
  );
};

export default VocabularioAcademico;
