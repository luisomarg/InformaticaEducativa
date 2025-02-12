import React, { useState } from "react";
import OrdenarOracion from "../../components/OrdenarOracion";

const DocumentacionSoftware: React.FC = () => {
  const [activeTab, setActiveTab] = useState("lesson1");
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const checkAnswer = () => {
    const keywords = ["clear", "concise", "organized", "examples", "structure"];
    const lowercaseAnswer = userAnswer.toLowerCase();
    const score = keywords.filter((word) =>
      lowercaseAnswer.includes(word)
    ).length;

    if (score >= 4) {
      setFeedback(
        "Excellent! Your answer covers most of the important aspects of good documentation."
      );
    } else if (score >= 2) {
      setFeedback(
        "Good effort! Try to include more key aspects of effective documentation."
      );
    } else {
      setFeedback(
        "Keep trying! Remember to mention clarity, organization, and the use of examples."
      );
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-3xl font-bold mb-6">
        Documentación de Software en Inglés
      </h1>

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "lesson1" ? "active" : ""}`}
            onClick={() => handleTabChange("lesson1")}
          >
            Lesson 1
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "lesson2" ? "active" : ""}`}
            onClick={() => handleTabChange("lesson2")}
          >
            Lesson 2
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "lesson3" ? "active" : ""}`}
            onClick={() => handleTabChange("lesson3")}
          >
            Lesson 3
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "exercise" ? "active" : ""}`}
            onClick={() => handleTabChange("exercise")}
          >
            Exercise
          </button>
        </li>
      </ul>

      {activeTab === "lesson1" && (
        <section className="mb-5">
          <h2 className="text-2xl font-semibold mb-3">
            Lesson 1: Types of Software Documentation
          </h2>
          <p className="mb-4">
            In software development, there are various types of documentation:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Requirements documentation</li>
            <li>Architecture/Design documentation</li>
            <li>Technical documentation</li>
            <li>End user documentation</li>
            <li>API documentation</li>
          </ul>
          <p>
            Each type serves a different purpose and audience in the software
            development lifecycle.
          </p>
        </section>
      )}

      {activeTab === "lesson2" && (
        <section className="mb-5">
          <h2 className="text-2xl font-semibold mb-3">
            Lesson 2: Writing Clear and Concise Documentation
          </h2>
          <p className="mb-4">
            Good documentation should be clear, concise, and easy to understand.
            Here are some tips:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Use simple language</li>
            <li>Avoid jargon unless necessary</li>
            <li>Use active voice</li>
            <li>Include examples and code snippets</li>
            <li>Use formatting to improve readability</li>
          </ul>
          <OrdenarOracion
            oracionDesordenada={[
              "clear",
              "and",
              "Write",
              "documentation",
              "concise",
            ]}
            oracionCorrecta="Write clear and concise documentation"
          />
        </section>
      )}

      {activeTab === "lesson3" && (
        <section className="mb-5">
          <h2 className="text-2xl font-semibold mb-3">
            Lesson 3: Structuring Technical Documentation
          </h2>
          <p className="mb-4">
            A well-structured technical document typically includes:
          </p>
          <ol className="list-decimal pl-5 mb-4">
            <li>Introduction/Overview</li>
            <li>Getting Started guide</li>
            <li>Main content (organized in logical sections)</li>
            <li>API Reference (if applicable)</li>
            <li>Troubleshooting/FAQ section</li>
            <li>Glossary of terms</li>
          </ol>
          <p>
            Remember to use consistent formatting and include a table of
            contents for longer documents.
          </p>
        </section>
      )}

      {activeTab === "exercise" && (
        <section className="mb-5">
          <h2 className="text-2xl font-semibold mb-3">
            Exercise: Describe Good Documentation Practices
          </h2>
          <p className="mb-4">
            In your own words, describe what makes good software documentation.
            Consider aspects like clarity, organization, and usefulness.
          </p>
          <textarea
            className="form-control mb-3"
            rows={5}
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Type your answer here..."
          ></textarea>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={checkAnswer}
          >
            Check Answer
          </button>
          {feedback && (
            <div className="mt-3 p-3 bg-gray-100 rounded">
              <p className="font-semibold">Feedback:</p>
              <p>{feedback}</p>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default DocumentacionSoftware;
