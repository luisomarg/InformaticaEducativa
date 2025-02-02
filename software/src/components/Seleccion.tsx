import React, { useState } from "react";

interface OpcionTraduccion {
  id: number;
  texto: string;
  esCorrecta: boolean;
}

interface SeleccionProps {
  fraseEspanol: string;
  opciones: OpcionTraduccion[];
}

const Seleccion: React.FC<SeleccionProps> = ({ fraseEspanol, opciones }) => {
  const [seleccionada, setSeleccionada] = useState<number | null>(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const manejarSeleccion = (id: number) => {
    setSeleccionada(id);
    setMostrarResultado(true);
  };

  const obtenerClaseBoton = (opcion: OpcionTraduccion) => {
    if (!mostrarResultado || seleccionada !== opcion.id) {
      return "btn btn-outline-primary";
    }
    return opcion.esCorrecta ? "btn btn-success" : "btn btn-danger";
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title mb-3">{fraseEspanol}</h5>
        <div className="d-flex flex-column gap-2">
          {opciones.map((opcion) => (
            <button
              key={opcion.id}
              className={obtenerClaseBoton(opcion)}
              onClick={() => manejarSeleccion(opcion.id)}
              disabled={mostrarResultado}
            >
              {opcion.texto}
            </button>
          ))}
        </div>
        {mostrarResultado && (
          <div
            className={`mt-3 alert ${
              seleccionada !== null &&
              opciones.find((o) => o.id === seleccionada)?.esCorrecta
                ? "alert-success"
                : "alert-danger"
            }`}
          >
            {seleccionada !== null &&
            opciones.find((o) => o.id === seleccionada)?.esCorrecta
              ? "¡Correcto! Has seleccionado la traducción correcta."
              : "Incorrecto. Inténtalo de nuevo."}
          </div>
        )}
      </div>
    </div>
  );
};

export default Seleccion;
