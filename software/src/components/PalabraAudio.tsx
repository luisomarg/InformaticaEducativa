import React from "react";

interface PalabraAudioProps {
  palabra: string;
  significado?: string;
}

const PalabraAudio: React.FC<PalabraAudioProps> = ({
  palabra,
  significado,
}) => {
  const reproducirPronunciacion = () => {
    const speech = new SpeechSynthesisUtterance(palabra);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="inline-flex items-center">
      <span className="font-medium mr-1">{palabra}</span>
      <button
        onClick={reproducirPronunciacion}
        className="text-blue-500 hover:text-blue-700 focus:outline-none"
        aria-label="Escuchar pronunciación"
      >
        ▶
      </button>
      {significado && (
        <span className="text-xs text-gray-500 ml-1">({significado})</span>
      )}
    </div>
  );
};

export default PalabraAudio;
