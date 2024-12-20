import React from "react";

interface FoneticaProps {
  fraseIngles: string;
  traduccionEspanol: string;
}

const Fonetica: React.FC<FoneticaProps> = ({
  fraseIngles,
  traduccionEspanol,
}) => {
  const reproducirPronunciacion = () => {
    const speech = new SpeechSynthesisUtterance(fraseIngles);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="card mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <div>
            <h5 className="card-title mb-0">{fraseIngles}</h5>
            <small className="text-muted fst-italic">
              "{traduccionEspanol}"
            </small>
          </div>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={reproducirPronunciacion}
            aria-label="Escuchar pronunciación"
          >
            <i className="bi bi-volume-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fonetica;
