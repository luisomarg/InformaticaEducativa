import React from "react";
import { Link } from "react-router-dom";

interface TarjetaInicioProps {
  titulo: string;
  descripcion: string;
  rutaBoton: string;
  textoBoton: string;
}

const TarjetaInicio: React.FC<TarjetaInicioProps> = ({
  titulo,
  descripcion,
  rutaBoton,
  textoBoton,
}) => {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text flex-grow-1">{descripcion}</p>
        <Link to={rutaBoton} className="btn btn-primary mt-auto">
          {textoBoton}
        </Link>
      </div>
    </div>
  );
};

export default TarjetaInicio;
