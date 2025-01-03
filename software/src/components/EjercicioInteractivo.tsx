import React, { useState } from "react";

interface OpcionRespuesta {
  texto: string;
  esCorrecta: boolean;
}

interface EjercicioInteractivoProps {
  oracion: string;
  palabraFaltante: string;
  opciones: OpcionRespuesta[];
}

const EjercicioInteractivo: React.FC<EjercicioInteractivoProps> = ({
  oracion,
  palabraFaltante,
  opciones,
}) => {
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<
    string | null
  >(null);
  const [mostrarRetroalimentacion, setMostrarRetroalimentacion] =
    useState(false);

  const oracionConEspacioEnBlanco = oracion.replace(palabraFaltante, "_____");

  const manejarSeleccion = (opcion: OpcionRespuesta) => {
    setRespuestaSeleccionada(opcion.texto);
    setMostrarRetroalimentacion(true);
  };

  const esRespuestaCorrecta = opciones.find(
    (opcion) => opcion.texto === respuestaSeleccionada
  )?.esCorrecta;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <p className="text-lg mb-4">{oracionConEspacioEnBlanco}</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {opciones.map((opcion, index) => (
          <button
            key={index}
            onClick={() => manejarSeleccion(opcion)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              respuestaSeleccionada === opcion.texto
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {opcion.texto}
          </button>
        ))}
      </div>
      {mostrarRetroalimentacion && (
        <div
          className={`p-4 rounded-lg text-white ${
            esRespuestaCorrecta ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {esRespuestaCorrecta
            ? "¡Felicidades! Has elegido la respuesta correcta."
            : "Inténtalo de nuevo. Esa no es la respuesta correcta."}
        </div>
      )}
    </div>
  );
};

export default EjercicioInteractivo;
