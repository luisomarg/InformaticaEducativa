import React, { useState } from "react";

interface CodeExerciseProps {
  prompt: string;
  codeSnippet: string;
  correctAnswer: string;
  explanation: string;
}

const CodeExercise: React.FC<CodeExerciseProps> = ({
  prompt,
  codeSnippet,
  correctAnswer,
  explanation,
}) => {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const checkAnswer = () => {
    if (answer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
      setFeedback("¡Correcto! " + explanation);
    } else {
      setFeedback("Intenta de nuevo. Revisa la documentación técnica.");
    }
  };

  return (
    <div className="exercise-container">
      <h3>{prompt}</h3>
      <pre className="code-block">
        <code>{codeSnippet}</code>
      </pre>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Escribe tu respuesta aquí..."
      />
      <button onClick={checkAnswer}>Verificar</button>
      {feedback && <div className="feedback">{feedback}</div>}
    </div>
  );
};

export default CodeExercise;
