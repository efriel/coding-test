import { useState } from "react";

const QuestionForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAskQuestion = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error("Error in AI request:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-full mb-4"
      />
      <button
        onClick={handleAskQuestion}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Ask
      </button>
      {answer && (
        <div className="mt-4">
          <strong>AI Response:</strong> {answer}
        </div>
      )}
    </div>
  );
};

export default QuestionForm;
