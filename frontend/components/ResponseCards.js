import React from 'react';

const ResponseCards = ({ answer, setAnswer }) => {
  return (
    <div className="w-full mt-4 bg-gray-900 text-white rounded-lg shadow-md p-4 relative">
      {/* Close Button */}
      <button
        onClick={() => setAnswer("")}
        className="absolute top-1 right-1 bg-gray-600 text-gray-400 transition rounded-xl px-1.5 -py-0.5"
      >
        ✕
      </button>
      <h3 className="text-lg font-semibold text-violet-400">AI Response:</h3>
      <p>{answer}</p>
    </div>
  );
};

export default ResponseCards;