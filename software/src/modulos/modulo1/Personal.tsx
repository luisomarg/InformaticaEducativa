import React from "react";
import Chatbot from "../../components/Chatbot";

const Personal: React.FC = () => {
  const API_KEY = "AIzaSyDVa1F1IO9-95FoN6asV1px1yn-JsELdsk";
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="mb-4 text-center">Información Personal Básica</h1>

          <div className="card mb-4">
            <div className="card-body">
              <p className="card-text">
                En el mundo tecnológico actual, es esencial poder compartir
                información personal básica en inglés, ya sea para crear
                perfiles profesionales, participar en comunidades de desarrollo
                o asistir a eventos tecnológicos.
              </p>
            </div>
          </div>

          <div className="alert alert-info" role="alert">
            <h4 className="alert-heading">Objetivo de la lección</h4>
            <p>
              Aprenderás a presentarte y compartir información básica sobre ti
              en inglés, incluyendo:
            </p>
            <ul>
              <li>Nombre y apellido</li>
              <li>Edad</li>
              <li>Nacionalidad</li>
              <li>Profesión o área de estudio</li>
            </ul>
          </div>
          <div>
            <h1>Página de Práctica de Entrevista en Inglés</h1>
            <Chatbot apiKey={API_KEY} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
