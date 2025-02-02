import React, { useState, ChangeEvent } from "react";

interface OrdenarOracionProps {
  oracionDesordenada: string[];
  oracionCorrecta: string;
}

const OrdenarOracion: React.FC<OrdenarOracionProps> = ({
  oracionDesordenada,
  oracionCorrecta,
}) => {
  const [respuestaUsuario, setRespuestaUsuario] = useState("");
  const [resultado, setResultado] = useState<"correcto" | "incorrecto" | null>(
    null
  );

  const manejarCambio = (e: ChangeEvent<HTMLInputElement>) => {
    setRespuestaUsuario(e.target.value);
  };

  const verificarRespuesta = () => {
    const respuestaLimpia = respuestaUsuario.trim().toLowerCase();
    const oracionCorrectaLimpia = oracionCorrecta.toLowerCase();

    if (respuestaLimpia === oracionCorrectaLimpia) {
      setResultado("correcto");
    } else {
      setResultado("incorrecto");
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title mb-3">Ordena la siguiente oración:</h5>
        <p className="card-text mb-4">
          {oracionDesordenada.map((palabra, index) => (
            <span key={index} className="badge bg-primary me-2 mb-2">
              {palabra}
            </span>
          ))}
        </p>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Escribe la oración correcta aquí"
            value={respuestaUsuario}
            onChange={manejarCambio}
          />
        </div>
        <button className="btn btn-primary" onClick={verificarRespuesta}>
          Verificar
        </button>
        {resultado && (
          <div
            className={`mt-3 alert ${
              resultado === "correcto" ? "alert-success" : "alert-danger"
            }`}
          >
            {resultado === "correcto"
              ? "¡Correcto! Has ordenado la oración correctamente."
              : "Incorrecto. Inténtalo de nuevo."}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdenarOracion;
