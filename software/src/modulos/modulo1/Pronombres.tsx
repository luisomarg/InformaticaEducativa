import React, { useState } from "react";
import PalabraAudio from "../../components/PalabraAudio";
import EjercicioInteractivo from "../../components/EjercicioInteractivo";

// ... (código existente)

const Pronombres: React.FC = () => {
  const [isOpenSingular, setIsOpenSingular] = useState(false);
  const [isOpenPlural, setIsOpenPlural] = useState(false);

  const toggleSingular = () => setIsOpenSingular(!isOpenSingular);
  const togglePlural = () => setIsOpenPlural(!isOpenPlural);

  const pronombres = {
    singular: [
      { pronombre: "I", significado: "Yo" },
      { pronombre: "You", significado: "Tú" },
      { pronombre: "He", significado: "Él" },
      { pronombre: "She", significado: "Ella" },
      { pronombre: "It", significado: "Eso" },
    ],
    plural: [
      { pronombre: "We", significado: "Nosotros" },
      { pronombre: "You", significado: "Ustedes" },
      { pronombre: "They", significado: "Ellos/Ellas" },
    ],
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-6">Pronombres en Inglés</h1>

      {/* Tarjeta de Pronombres Singulares */}
      <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
        <button
          className="w-full p-4 text-left font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
          onClick={toggleSingular}
        >
          Pronombres Singulares
          <span className="float-right">{isOpenSingular ? "▲" : "▼"}</span>
        </button>
        {isOpenSingular && (
          <div className="p-4">
            {pronombres.singular.map((item, index) => (
              <div key={index} className="mb-2 p-2 bg-gray-100 rounded">
                <PalabraAudio
                  palabra={item.pronombre}
                  significado={item.significado}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tarjeta de Pronombres Plurales */}
      <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
        <button
          className="w-full p-4 text-left font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors duration-300"
          onClick={togglePlural}
        >
          Pronombres Plurales
          <span className="float-right">{isOpenPlural ? "▲" : "▼"}</span>
        </button>
        {isOpenPlural && (
          <div className="p-4">
            {pronombres.plural.map((item, index) => (
              <div key={index} className="mb-2 p-2 bg-gray-100 rounded">
                <PalabraAudio
                  palabra={item.pronombre}
                  significado={item.significado}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Nuevo div con listas de oraciones */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          Ejemplos de uso de pronombres
        </h2>

        {/* Lista de oraciones con pronombres singulares */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            Pronombres Singulares en Oraciones
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <PalabraAudio palabra="I am happy" significado="Yo estoy feliz" />
            </li>
            <li>
              <PalabraAudio
                palabra="You are smart"
                significado="Tú eres inteligente"
              />
            </li>
            <li>
              <PalabraAudio palabra="He is tall" significado="Él es alto" />
            </li>
            <li>
              <PalabraAudio
                palabra="She is kind"
                significado="Ella es amable"
              />
            </li>
            <li>
              <PalabraAudio
                palabra="It is interesting"
                significado="Eso es interesante"
              />
            </li>
          </ul>
        </div>

        {/* Lista de oraciones con pronombres plurales */}
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Pronombres Plurales en Oraciones
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <PalabraAudio
                palabra="We are friends"
                significado="Nosotros somos amigos"
              />
            </li>
            <li>
              <PalabraAudio
                palabra="You are students"
                significado="Ustedes son estudiantes"
              />
            </li>
            <li>
              <PalabraAudio
                palabra="They are busy"
                significado="Ellos/Ellas están ocupados"
              />
            </li>
          </ul>
        </div>
      </div>
      {/* Nuevo div con ejercicio interactivo */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Ejercicio de Práctica</h2>
        <EjercicioInteractivo
          oracion="_____ are students in this class."
          palabraFaltante="We"
          opciones={[
            { texto: "I", esCorrecta: false },
            { texto: "You", esCorrecta: false },
            { texto: "We", esCorrecta: true },
            { texto: "They", esCorrecta: false },
          ]}
        />
      </div>
    </div>
  );
};

export default Pronombres;
