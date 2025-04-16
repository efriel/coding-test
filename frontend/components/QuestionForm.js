import { useState } from "react";
import { askAI } from "../api/ai";

const QuestionForm = ({ setHideContent, setAnswer, selectedModel }) => {
  const [question, setQuestion] = useState("");

  const handleAskQuestion = async () => {
    if (!question.trim()) return;
    try {
      const data = await askAI(question, selectedModel);
      setAnswer(data.answer);
      setHideContent(true);
      setQuestion("");
    } catch (error) {
      console.error("Error in AI request:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAskQuestion();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center col-sm-6">
      <div className="flex w-[50%] items-center bg-[#1c212a] shadow-md rounded-full px-4 py-2 border border-gray-800">
        <input
          id="question"
          type="text"
          placeholder="e.g., Which rep closed the highest deal?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full outline-none bg-transparent px-2 py-1 text-gray-50 placeholder-gray-400"
          autoComplete="off"
        />
        <button
          onClick={handleAskQuestion}
          className="bg-[radial-gradient(circle,_#dd519a,_#b34bf0)] text-white px-2.5 py-1 rounded-full hover:bg-indigo-700 transition"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default QuestionForm;
