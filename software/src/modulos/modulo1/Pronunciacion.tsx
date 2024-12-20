import React from "react";
import Fonetica from "../../components/Fonetica";

const Pronunciacion: React.FC = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Lección de Pronunciación en Inglés</h1>

      <section className="mb-5">
        <h2>1. Vocales Largas y Cortas</h2>
        <p>
          En inglés, es importante distinguir entre vocales largas y cortas.
          Veamos algunos ejemplos:
        </p>

        <Fonetica
          fraseIngles="sheep"
          traduccionEspanol="oveja (vocal larga /i:/)"
        />
        <Fonetica
          fraseIngles="ship"
          traduccionEspanol="barco (vocal corta /ɪ/)"
        />

        <Fonetica
          fraseIngles="fool"
          traduccionEspanol="tonto (vocal larga /u:/)"
        />
        <Fonetica
          fraseIngles="full"
          traduccionEspanol="lleno (vocal corta /ʊ/)"
        />
      </section>

      <section className="mb-5">
        <h2>2. Sonidos Consonánticos Específicos</h2>
        <p>
          Algunos sonidos consonánticos en inglés pueden ser difíciles para
          hablantes de español:
        </p>

        <Fonetica fraseIngles="think" traduccionEspanol="pensar (sonido /θ/)" />
        <Fonetica fraseIngles="this" traduccionEspanol="esto (sonido /ð/)" />

        <Fonetica fraseIngles="ship" traduccionEspanol="barco (sonido /ʃ/)" />
        <Fonetica
          fraseIngles="measure"
          traduccionEspanol="medida (sonido /ʒ/)"
        />
      </section>

      <section className="mb-5">
        <h2>3. Acentuación de Palabras</h2>
        <p>
          La acentuación correcta es crucial en inglés. Observa estos ejemplos:
        </p>

        <Fonetica
          fraseIngles="desert (DEsert)"
          traduccionEspanol="desierto (acento en la primera sílaba)"
        />
        <Fonetica
          fraseIngles="dessert (deSSERT)"
          traduccionEspanol="postre (acento en la segunda sílaba)"
        />
      </section>

      <section className="mb-5">
        <h2>4. Enlace de Palabras</h2>
        <p>
          En el habla fluida, las palabras a menudo se enlazan. Por ejemplo:
        </p>

        <Fonetica
          fraseIngles="Turn it off"
          traduccionEspanol="Apágalo (se pronuncia como 'Tur-ni-toff')"
        />
        <Fonetica
          fraseIngles="Pick it up"
          traduccionEspanol="Recógelo (se pronuncia como 'Pi-ki-tup')"
        />
      </section>

      <p className="mt-4">
        Practica estos sonidos y conceptos regularmente. Recuerda, la clave para
        mejorar tu pronunciación es la práctica constante y la exposición al
        idioma hablado.
      </p>
    </div>
  );
};

export default Pronunciacion;
