import React from "react";
import PalabraAudio from "../../components/PalabraAudio";

const Tobe: React.FC = () => {
  return (
    <div className="container mx-auto mt-5 p-4">
      <h1 className="text-2xl font-bold mb-4">El verbo To be</h1>
      <p className="mb-4 p-6 bg-gray-50 rounded-lg shadow-md text-gray-700 leading-relaxed border border-gray-200">
        El verbo to be es equivalente en muchos casos al español <em>ser</em> o{" "}
        <em>estar</em>. También se usa para formar muchos tiempos verbales: los
        continuos y los pasivos. Se dice to be, pero el to es parte del
        infinitivo, el verbo conjugado no lo usa.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        Conjugación del verbo To be en pasado simple
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse bg-white rounded-lg overflow-hidden shadow-lg my-6">
          <thead>
            <tr className="bg-indigo-100">
              <th className="px-6 py-4 text-left text-sm font-semibold text-indigo-800">
                Sujeto
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-indigo-800">
                Presente Simple
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-indigo-800">
                Forma Corta
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 transition-colors duration-200">
              <td className="px-6 py-4 border-t border-gray-100">I</td>
              <td className="px-6 py-4 border-t border-gray-100">
                <PalabraAudio palabra="am" significado="yo soy/estoy" />
              </td>
              <td className="px-6 py-4 border-t border-gray-100">
                <PalabraAudio palabra="I'm" significado="yo soy/estoy" />
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors duration-200">
              <td className="px-6 py-4 border-t border-gray-100">You</td>
              <td className="px-6 py-4 border-t border-gray-100">
                <PalabraAudio palabra="are" significado="tu eres/estas" />
              </td>
              <td className="px-6 py-4 border-t border-gray-100">
                <PalabraAudio palabra="you're" significado="tu eres/estas" />
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors duration-200">
              <td className="px-6 py-4 border-t border-gray-100">He</td>
              <td className="px-6 py-4 border-t border-gray-100">
                <PalabraAudio palabra="is" significado="el es/esta" />
              </td>
              <td className="px-6 py-4 border-t border-gray-100">
                <PalabraAudio palabra="he's" significado="el es/esta" />
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors duration-200">
              <td className="px-6 py-4 border-t border-gray-100">She</td>
              <td className="px-6 py-4 border-t border-gray-100">
                <PalabraAudio palabra="is" significado="ella es/esta" />
              </td>
              <td className="px-6 py-4 border-t border-gray-100">
                <PalabraAudio palabra="she's" significado="ella es/esta" />
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors duration-200">
              <td className="px-6 py-4 border-t border-gray-100">It</td>
              <td className="px-6 py-4 border-t border-gray-100">
                <PalabraAudio palabra="is" significado="eso es/esta" />
              </td>
              <td className="px-6 py-4 border-t border-gray-100">
                <PalabraAudio palabra="its's" significado="eso es/esta" />
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors duration-200">
              <td className="px-6 py-4 border-t border-gray-100">We</td>
              <td className="px-6 py-4 border-t border-gray-100">
                <PalabraAudio
                  palabra="are"
                  significado="nosotros somos/estamos"
                />
              </td>
              <td className="px-6 py-4 border-t border-gray-100">
                <PalabraAudio
                  palabra="we're"
                  significado="nosotros somos/estamos"
                />
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors duration-200">
              <td className="px-6 py-4 border-t border-gray-100">They</td>
              <td className="px-6 py-4 border-t border-gray-100">
                <PalabraAudio palabra="are" significado="ellos son/estan" />
              </td>
              <td className="px-6 py-4 border-t border-gray-100">
                <PalabraAudio palabra="they're" significado="ellos son/estan" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tobe;
