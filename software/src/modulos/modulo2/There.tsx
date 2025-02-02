import React from "react";
import PalabraAudio from "../../components/PalabraAudio";

const There: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Uso de "There is" y "There are"
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Estructura básica</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="mb-2">
            <PalabraAudio palabra="There is" significado="Hay (singular)" /> se
            usa para singular.
          </p>
          <p>
            <PalabraAudio palabra="There are" significado="Hay (plural)" /> se
            usa para plural.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Formas y usos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Afirmativo</h3>
            <ul className="list-disc list-inside">
              <li>
                <PalabraAudio palabra="There is a book on the table." />
              </li>
              <li>
                <PalabraAudio palabra="There are three cats in the garden." />
              </li>
            </ul>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Negativo</h3>
            <ul className="list-disc list-inside">
              <li>
                <PalabraAudio palabra="There isn't any milk in the fridge." />
              </li>
              <li>
                <PalabraAudio palabra="There aren't any people at the park." />
              </li>
            </ul>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Interrogativo</h3>
            <ul className="list-disc list-inside">
              <li>
                <PalabraAudio palabra="Is there a doctor in the room?" />
              </li>
              <li>
                <PalabraAudio palabra="Are there any questions?" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ejemplos en contexto</h2>
        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="mb-2">
            <PalabraAudio palabra="There is a new restaurant in town. It's very popular." />
          </p>
          <p className="mb-2">
            <PalabraAudio palabra="There are many reasons to learn English. It's useful for travel and work." />
          </p>
          <p>
            <PalabraAudio palabra="Is there enough time to finish the project? Yes, there is plenty of time." />
          </p>
        </div>
      </section>

      <div className="alert alert-info" role="alert">
        <h4 className="alert-heading">Consejo</h4>
        <p>
          Recuerda que "There is" se contrae a "There's" en el habla informal.
        </p>
        <hr />
        <p className="mb-0">
          Ejemplo: <PalabraAudio palabra="There's a car in the driveway." />
        </p>
      </div>
    </div>
  );
};

export default There;
