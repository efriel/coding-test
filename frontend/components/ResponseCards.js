const ResponseCards = ({ answer }) => {
  return (
    <div className="w-full mt-4 bg-gray-900 text-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-violet-400">AI Response:</h3>
      <p>{answer}</p>
    </div>
  );
};

export default ResponseCards;