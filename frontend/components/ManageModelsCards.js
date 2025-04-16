import React, { useState } from "react";
import { CheckCircle, Cpu } from "lucide-react";

const availableModels = [
  { id: "openai", name: "OpenAI", description: "Fast and accurate by OpenAI" },
  { id: "gemini", name: "Gemini", description: "Google's AI model" },
  { id: "custom", name: "Custom InterOpera.AI", description: "Available Soon" },
];

export default function ManageModelsCards({ selectedModel = "no-selection", onSelect }) {
  const [currentModel, setCurrentModel] = useState(selectedModel);

  const handleSelect = (modelId) => {
    setCurrentModel(modelId);
    if (onSelect) {
      console.log("onSelect called with:", modelId);  // Debugging line
      onSelect(modelId);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-b from-[#0f0f0f] to-[#111111] rounded-2xl shadow-xl space-y-6">
      <h2 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
        <Cpu className="text-violet-400" /> Manage AI Models
      </h2>

      <div className="grid gap-4 md:grid-cols-4">
        {availableModels.map((model) => {
          const isSelected = currentModel === model.id;
          return (
            <div
              key={model.id}
              onClick={() => handleSelect(model.id)}
              className={`cursor-pointer p-5 rounded-xl border transition-all duration-300
                ${
                  isSelected
                    ? "border-violet-500 bg-gray-800 shadow-lg"
                    : "border-gray-700 bg-gray-900 hover:border-violet-500 hover:bg-gray-800"
                }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold">{model.name}</h4>
                  <p className="text-gray-400 text-sm">{model.description}</p>
                </div>
                {isSelected && (
                  <CheckCircle className="text-violet-400 w-5 h-5" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
