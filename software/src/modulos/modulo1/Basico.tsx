import React from "react";
import Fonetica from "../../components/Fonetica";

const Basico: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Gramática Básica en Inglés</h1>

      <section className="mb-5">
        <h2>Una breve introduccion</h2>
        <p>
          Las frases en inglés tienden a seguir la sencilla pauta
          <em>Sujeto - Verbo - Complemento</em>. El sujeto siempre tiene que
          aparecer, porque no conjugamos mucho el verbo. En español, el verbo
          conjugado te da también la persona. 
        </p>
      </section>

      <section className="mb-5">
        <h2>Veamos unos ejemplos</h2>
        <ul>
          <li>
            <Fonetica
              fraseIngles="We study programming every Friday"
              traduccionEspanol="estudiamos programación todos los viernes"
            />
          </li>
          <li>
            <Fonetica
              fraseIngles="They go to college every Wednesday"
              traduccionEspanol="van a la universidad todos los miércoles"
            />
          </li>
        </ul>
        <p>
          En español, "estudiamos" sólo puede ser "nosotros estudiamos," y "van"
          sólo puede ser o "ellos van" o "ustedes van," así que no hace falta
          poner el pronombre. En inglés, siempre ponemos el pronombre.
        </p>

        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">Pronombre en Inglés</th>
              <th scope="col">Significado en Español</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>Yo</td>
            </tr>
            <tr>
              <td>You</td>
              <td>Tú, Usted, Vosotros, Ustedes</td>
            </tr>
            <tr>
              <td>He</td>
              <td>Él</td>
            </tr>
            <tr>
              <td>She</td>
              <td>Ella</td>
            </tr>
            <tr>
              <td>It</td>
              <td>Ello (para objetos o animales)</td>
            </tr>
            <tr>
              <td>We</td>
              <td>Nosotros/as</td>
            </tr>
            <tr>
              <td>They</td>
              <td>Ellos/as</td>
            </tr>
          </tbody>
        </table>
        <p>
          No diferenciamos entre tú, usted y vosotros en inglés, ni entre ellos
          y ellas.
        </p>
      </section>
    </div>
  );
};

export default Basico;
