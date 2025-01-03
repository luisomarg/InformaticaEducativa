import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Trash2, Send, Volume2 } from "lucide-react";

interface Message {
  role: "assistant" | "user";
  content: string;
}

interface ChatbotProps {
  apiKey: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ apiKey }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const synth = window.speechSynthesis;
  const chatRef = useRef<any>(null);

  const initialPrompt = `
    You are an English interviewer specialized in conducting interviews with computer science students and professionals.
    You should:
    1. Ask questions about personal information, academic background, and technical skills
    2. Keep responses concise and clear
    3. Maintain a professional but friendly tone
    4. Focus on computer science and software engineering topics
    5. Provide feedback on English usage when appropriate
    6. Guide the conversation naturally from basic information to more technical topics
  `;

  useEffect(() => {
    const initializeChat = async () => {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      chatRef.current = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: initialPrompt }],
          },
        ],
      });

      try {
        const result = await chatRef.current.sendMessage(
          "Start the interview with a friendly greeting and ask for basic information."
        );
        const response = await result.response;
        setMessages([{ role: "assistant", content: response.text() }]);
      } catch (error) {
        console.error("Error initializing chat:", error);
      }
    };

    initializeChat();
  }, [apiKey]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputMessage.trim()) return;

    setIsLoading(true);
    setMessages((prev) => [...prev, { role: "user", content: inputMessage }]);
    setInputMessage("");

    try {
      const result = await chatRef.current.sendMessage(inputMessage);
      const response = await result.response;
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response.text() },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([]);
    window.location.reload();
  };

  const speakMessage = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    synth.speak(utterance);
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto bg-gray-50 rounded-lg shadow-lg">
      {/* Chat Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">English Interview Practice</h2>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === "user"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <div className="flex items-start gap-2">
                <p className="text-sm">{message.content}</p>
                {message.role === "assistant" && (
                  <button
                    onClick={() => speakMessage(message.content)}
                    className="p-1 hover:bg-gray-300 rounded"
                  >
                    <Volume2 size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Send size={20} />
          </button>
          <button
            onClick={handleReset}
            className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
