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
    <div className="flex flex-col items-center justify-center col-sm-6">
    <div className="flex w-full items-center bg-[#1c212a] shadow-md rounded-full px-4 py-2 border border-gray-800">
      <input
        id="question"
        type="text"
        placeholder="e.g., Which rep closed the highest deal?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full outline-none bg-transparent px-2 py-1 text-gray-50 placeholder-gray-400"
      />
      <button
        onClick={handleAskQuestion}
        className="bg-[radial-gradient(circle,_#dd519a,_#b34bf0)] text-white px-3 py-1 rounded-full hover:bg-indigo-700 transition"
      >
        ➤
      </button>
    </div>
    {answer && (
      <div className="w-full mt-4 bg-gray-800 text-white rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">AI Response:</h3> 
        <p>{answer}</p>
      </div>
    )}
    </div>
  );
};

export default QuestionForm;
