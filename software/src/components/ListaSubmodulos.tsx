import React from "react";
import { Link } from "react-router-dom";

interface Submodulo {
  id: string;
  titulo: string;
  descripcion: string;
  ruta: string;
}

interface ListaSubmodulosProps {
  titulo: string;
  submodulos: Submodulo[];
}

const ListaSubmodulos: React.FC<ListaSubmodulosProps> = ({
  titulo,
  submodulos,
}) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          id="sidebar"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar"
        >
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              {submodulos.map((submodulo) => (
                <li className="nav-item" key={submodulo.id}>
                  <a className="nav-link" href={`#${submodulo.id}`}>
                    {submodulo.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">{titulo}</h1>
          </div>
          <div
            data-bs-spy="scroll"
            data-bs-target="#sidebar"
            data-bs-offset="0"
            tabIndex={0}
          >
            {submodulos.map((submodulo) => (
              <div key={submodulo.id} id={submodulo.id} className="mb-5">
                <h4>{submodulo.titulo}</h4>
                <p>{submodulo.descripcion}</p>
                <Link to={submodulo.ruta} className="btn btn-primary">
                  Ir al submódulo
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ListaSubmodulos;
