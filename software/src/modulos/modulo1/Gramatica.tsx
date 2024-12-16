import React from "react";

const Gramatica: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Gramática Básica en Inglés</h1>

      <section className="mb-5">
        <h2>Introducción a la Gramática Inglesa</h2>
        <p>
          La gramática inglesa es el conjunto de reglas que rigen la composición
          de cláusulas, frases y palabras en el idioma inglés. Comprender estas
          reglas es fundamental para comunicarse efectivamente en inglés, tanto
          en forma escrita como oral.
        </p>
      </section>

      <section className="mb-5">
        <h2>Elementos Básicos de la Gramática Inglesa</h2>
        <ul>
          <li>
            <strong>Sujeto y Predicado:</strong> Toda oración en inglés consta
            de un sujeto (quien realiza la acción) y un predicado (la acción o
            estado del sujeto).
            <p>
              <em>
                Ejemplo: The student (sujeto) studies English (predicado).
              </em>
            </p>
          </li>
          <li>
            <strong>Tiempos Verbales:</strong> El inglés tiene varios tiempos
            verbales para expresar cuándo ocurre una acción.
            <p>
              <em>
                Ejemplo: I study (presente simple), I am studying (presente
                continuo), I have studied (presente perfecto).
              </em>
            </p>
          </li>
          <li>
            <strong>Artículos:</strong> Los artículos (a, an, the) se usan para
            especificar si nos referimos a algo en general o a algo específico.
            <p>
              <em>
                Ejemplo: A book (un libro cualquiera), The book (un libro
                específico).
              </em>
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-5">
        <h2>Estructura Básica de una Oración</h2>
        <p>
          La estructura más común en inglés es: Sujeto + Verbo + Objeto (SVO)
        </p>
        <p>
          <em>Ejemplo: I (S) love (V) English (O).</em>
        </p>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>
          Estos son solo algunos elementos básicos de la gramática inglesa. A
          medida que avances en tu aprendizaje, descubrirás que hay muchas más
          reglas y excepciones. La práctica constante es clave para dominar la
          gramática inglesa.
        </p>
      </section>
    </div>
  );
};

export default Gramatica;
