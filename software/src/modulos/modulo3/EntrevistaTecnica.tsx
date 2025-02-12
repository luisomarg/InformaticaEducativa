import React, { useState } from "react";
import OrdenarOracion from "../../components/OrdenarOracion";

const EntrevistaTecnica: React.FC = () => {
  const [activeTab, setActiveTab] = useState("preparation");
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const checkAnswer = () => {
    const keywords = [
      "algorithm",
      "complexity",
      "data structure",
      "efficient",
      "optimize",
    ];
    const lowercaseAnswer = userAnswer.toLowerCase();
    const score = keywords.filter((word) =>
      lowercaseAnswer.includes(word)
    ).length;

    if (score >= 4) {
      setFeedback(
        "Excellent! Your answer demonstrates a good understanding of algorithm complexity and optimization."
      );
    } else if (score >= 2) {
      setFeedback(
        "Good effort! Try to include more specific terms related to algorithm efficiency and data structures."
      );
    } else {
      setFeedback(
        "Keep practicing! Remember to discuss algorithm complexity, data structures, and optimization techniques."
      );
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-3xl font-bold mb-6">Entrevista Técnica en Inglés</h1>

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === "preparation" ? "active" : ""
            }`}
            onClick={() => handleTabChange("preparation")}
          >
            Preparation
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === "commonQuestions" ? "active" : ""
            }`}
            onClick={() => handleTabChange("commonQuestions")}
          >
            Common Questions
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === "technicalTerms" ? "active" : ""
            }`}
            onClick={() => handleTabChange("technicalTerms")}
          >
            Technical Terms
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === "mockInterview" ? "active" : ""
            }`}
            onClick={() => handleTabChange("mockInterview")}
          >
            Mock Interview
          </button>
        </li>
      </ul>

      {activeTab === "preparation" && (
        <section className="mb-5">
          <h2 className="text-2xl font-semibold mb-3">
            Preparing for a Technical Interview in English
          </h2>
          <p className="mb-4">
            Here are some key steps to prepare for your technical interview:
          </p>
          <ol className="list-decimal pl-5 mb-4">
            <li>Review fundamental computer science concepts</li>
            <li>Practice coding problems in English</li>
            <li>Brush up on industry-specific terminology</li>
            <li>Prepare to explain your past projects in English</li>
            <li>Practice speaking about technical concepts clearly</li>
          </ol>
          <OrdenarOracion
            oracionDesordenada={[
              "practice",
              "key",
              "to",
              "success",
              "is",
              "The",
            ]}
            oracionCorrecta="The key to success is practice"
          />
        </section>
      )}

      {activeTab === "commonQuestions" && (
        <section className="mb-5">
          <h2 className="text-2xl font-semibold mb-3">
            Common Technical Interview Questions
          </h2>
          <p className="mb-4">Be prepared to answer questions like:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Can you explain the difference between a stack and a queue?</li>
            <li>What is the time complexity of quicksort?</li>
            <li>How would you design a scalable web application?</li>
            <li>
              Explain the concept of inheritance in object-oriented programming.
            </li>
            <li>What are the pros and cons of using a NoSQL database?</li>
          </ul>
          <p>
            Practice answering these questions out loud in English to improve
            your fluency.
          </p>
        </section>
      )}

      {activeTab === "technicalTerms" && (
        <section className="mb-5">
          <h2 className="text-2xl font-semibold mb-3">
            Important Technical Terms in English
          </h2>
          <p className="mb-4">
            Familiarize yourself with these common technical terms:
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Programming Concepts:</h3>
              <ul className="list-disc pl-5">
                <li>Algorithm</li>
                <li>Data Structure</li>
                <li>Object-Oriented Programming</li>
                <li>Functional Programming</li>
                <li>Version Control</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Web Development:</h3>
              <ul className="list-disc pl-5">
                <li>API (Application Programming Interface)</li>
                <li>Frontend / Backend</li>
                <li>Responsive Design</li>
                <li>RESTful Services</li>
                <li>Database Management</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {activeTab === "mockInterview" && (
        <section className="mb-5">
          <h2 className="text-2xl font-semibold mb-3">
            Mock Interview: Algorithm Efficiency
          </h2>
          <p className="mb-4">
            Imagine you're in a technical interview. Answer the following
            question:
          </p>
          <blockquote className="border-l-4 border-gray-500 pl-4 mb-4">
            "Can you explain the concept of time complexity and why it's
            important when designing algorithms? Give an example of how you
            would optimize an inefficient algorithm."
          </blockquote>
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

export default EntrevistaTecnica;
