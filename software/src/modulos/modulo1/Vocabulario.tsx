import React from "react";

const Vocabulario: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Vocabulario Esencial en Inglés</h1>

      <section className="mb-5">
        <h2>Lección 1: Saludos y Presentaciones</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Inglés</th>
              <th>Español</th>
              <th>Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hello</td>
              <td>Hola</td>
              <td>Hello, how are you?</td>
            </tr>
            <tr>
              <td>Good morning</td>
              <td>Buenos días</td>
              <td>Good morning, class!</td>
            </tr>
            <tr>
              <td>My name is...</td>
              <td>Mi nombre es...</td>
              <td>My name is John.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-5">
        <h2>Lección 2: Números del 1 al 10</h2>
        <div className="row">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <div key={num} className="col-md-2 col-sm-4 mb-3">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">{num}</h5>
                  <p className="card-text">{numberToWord(num)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h2>Lección 3: Colores Básicos</h2>
        <div className="d-flex flex-wrap justify-content-around">
          {["Red", "Blue", "Green", "Yellow", "Black", "White"].map((color) => (
            <div
              key={color}
              className="m-2 p-3 rounded"
              style={{
                backgroundColor: color.toLowerCase(),
                color: color === "Black" ? "white" : "black",
                width: "100px",
                textAlign: "center",
              }}
            >
              {color}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h2>Lección 4: Frases Útiles</h2>
        <div className="accordion" id="phrasesAccordion">
          {[
            {
              phrase: "How are you?",
              translation: "¿Cómo estás?",
              usage: "Para preguntar por el estado de alguien.",
            },
            {
              phrase: "Nice to meet you",
              translation: "Encantado de conocerte",
              usage: "Cuando conoces a alguien por primera vez.",
            },
            {
              phrase: "Thank you",
              translation: "Gracias",
              usage: "Para expresar gratitud.",
            },
            {
              phrase: "You're welcome",
              translation: "De nada",
              usage: "En respuesta a un agradecimiento.",
            },
          ].map((item, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {item.phrase}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#phrasesAccordion"
              >
                <div className="accordion-body">
                  <p>
                    <strong>Traducción:</strong> {item.translation}
                  </p>
                  <p>
                    <strong>Uso:</strong> {item.usage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

function numberToWord(num: number): string {
  const words = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
  ];
  return words[num - 1];
}

export default Vocabulario;
