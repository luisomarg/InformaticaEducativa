import React, { useState } from "react";
import { Play, ArrowRight, User, Code, BookOpen } from "lucide-react";

// Interfaces
interface PhraseCardProps {
  phrase: string;
  category?: string;
}

interface ProfessionalInfoProps {
  title: string;
  items: string[];
}

// Componente para sección de introducción
const IntroSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
        <img
          src="/src/multimedia/meeting.jpg"
          alt="Professional Meeting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 flex items-center">
          <div className="p-8 text-white">
            <h1 className="text-3xl font-bold mb-4">
              Self Introduction in English
            </h1>
            <p className="text-xl">
              Master the art of professional self-presentation
            </p>
          </div>
        </div>
      </div>
      <p className="text-lg text-gray-700 leading-relaxed">
        In the technology world, it's crucial to know how to present yourself
        professionally in English, whether you're in job interviews, tech
        conferences, or client meetings.
      </p>
    </div>
  );
};

// Componente para tarjetas de frases
const PhraseCard: React.FC<PhraseCardProps> = ({ phrase, category = "" }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <span className="text-sm text-blue-600 font-medium">{category}</span>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors"
        >
          <Play size={16} className="text-blue-600" />
        </button>
      </div>
      <p className="text-gray-800 text-lg">{phrase}</p>
    </div>
  );
};

// Componente para información profesional
const ProfessionalInfo: React.FC<ProfessionalInfoProps> = ({
  title,
  items,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Code size={20} className="text-blue-600" />
        {title}
      </h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded"
          >
            <ArrowRight size={16} className="text-blue-600" />
            <p className="text-gray-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente principal
const Presentarse: React.FC = () => {
  const formalPhrases = [
    "Good morning/afternoon. My name is [name].",
    "Hello, I am [name].",
    "I'd like to introduce myself. I'm [name].",
  ];

  const informalPhrases = [
    "Hi everyone! I'm [name].",
    "Hey there! [name] here.",
  ];

  const professionalInfo = {
    occupation: [
      "I am a computer engineering student.",
      "I'm studying computer science.",
      "I work as a junior developer.",
    ],
    specialization: [
      "I specialize in web development.",
      "I'm focusing on cybersecurity.",
      "My main area is artificial intelligence.",
    ],
    experience: [
      "I have experience in Python programming.",
      "I've been learning Java for two years.",
      "I'm currently working on mobile app development.",
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <IntroSection />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <User size={24} className="text-blue-600" />
          Basic Introduction Phrases
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Formal Presentation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formalPhrases.map((phrase, index) => (
              <PhraseCard key={index} phrase={phrase} category="Formal" />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Informal Presentation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {informalPhrases.map((phrase, index) => (
              <PhraseCard key={index} phrase={phrase} category="Informal" />
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <BookOpen size={24} className="text-blue-600" />
          Professional Information
        </h2>

        <ProfessionalInfo
          title="Occupation"
          items={professionalInfo.occupation}
        />
        <ProfessionalInfo
          title="Specialization"
          items={professionalInfo.specialization}
        />
        <ProfessionalInfo
          title="Experience"
          items={professionalInfo.experience}
        />
      </section>
    </div>
  );
};

export default Presentarse;
