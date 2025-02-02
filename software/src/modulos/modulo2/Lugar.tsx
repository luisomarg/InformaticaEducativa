import React from "react";
import PalabraAudio from "../../components/PalabraAudio";
import OrdenarOracion from "../../components/OrdenarOracion";
import Seleccion from "../../components/Seleccion";

const Lugar: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Preposiciones de Lugar en Inglés
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preposiciones comunes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">In (en)</h3>
            <p>
              Se usa para indicar que algo está dentro de un espacio
              tridimensional.
            </p>
            <PalabraAudio
              palabra="The code is in the file."
              significado="El código está en el archivo."
            />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">On (sobre, en)</h3>
            <p>Se usa para indicar que algo está en la superficie de algo.</p>
            <PalabraAudio
              palabra="The laptop is on the desk."
              significado="El portátil está sobre el escritorio."
            />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">At (en)</h3>
            <p>Se usa para indicar una ubicación específica o un punto.</p>
            <PalabraAudio
              palabra="We'll meet at the computer lab."
              significado="Nos encontraremos en el laboratorio de computación."
            />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Under (debajo)</h3>
            <p>Se usa para indicar que algo está debajo de otra cosa.</p>
            <PalabraAudio
              palabra="The cables are under the desk."
              significado="Los cables están debajo del escritorio."
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Ejemplos en contexto de Ingeniería Informática
        </h2>
        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="mb-2">
            <PalabraAudio
              palabra="The data is stored in the database."
              significado="Los datos están almacenados en la base de datos."
            />
          </p>
          <p className="mb-2">
            <PalabraAudio
              palabra="The bug is in the main function."
              significado="El error está en la función principal."
            />
          </p>
          <p>
            <PalabraAudio
              palabra="The new feature will be implemented on the server."
              significado="La nueva característica se implementará en el servidor."
            />
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ejercicios</h2>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-3">1. Ordena la oración:</h3>
          <OrdenarOracion
            oracionDesordenada={[
              "the",
              "on",
              "is",
              "server",
              "running",
              "application",
              "The",
            ]}
            oracionCorrecta="The application is running on the server"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-3">
            2. Selecciona la traducción correcta:
          </h3>
          <Seleccion
            fraseEspanol="Los archivos de configuración están en la carpeta del sistema"
            opciones={[
              {
                id: 1,
                texto: "The configuration files are on the system folder",
                esCorrecta: false,
              },
              {
                id: 2,
                texto: "The configuration files are in the system folder",
                esCorrecta: true,
              },
              {
                id: 3,
                texto: "The configuration files are at the system folder",
                esCorrecta: false,
              },
            ]}
          />
        </div>
      </section>

      <div className="alert alert-info" role="alert">
        <h4 className="alert-heading">Consejo</h4>
        <p>
          Recuerda que el uso correcto de las preposiciones de lugar puede
          variar según el contexto. Practica con ejemplos relacionados con tu
          campo de estudio para mejorar tu comprensión.
        </p>
      </div>
    </div>
  );
};

export default Lugar;
