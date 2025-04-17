import React, { useState } from "react";
import { CheckCircle, Cpu, UploadCloud, Link as LinkIcon } from "lucide-react";

const availableModels = [
  { id: "openai", name: "OpenAI", description: "Fast and accurate by OpenAI" },
  { id: "gemini", name: "Gemini", description: "Google's AI model" },
  { id: "custom", name: "Custom InterOpera.AI", description: "Available Soon" },
];

export default function ManageModelsCards({ 
  selectedModel = "no-selection",
  onSelect,
  onDataSourceChange, 
}) {
  const [currentModel, setCurrentModel] = useState(selectedModel);
  const [endpointUrl, setEndpointUrl] = useState("");

  const handleSelect = (modelId) => {
    setCurrentModel(modelId);
    if (onSelect) {
      onSelect(modelId);
    }
  };

  const handleUrlChange = (e) => {
    const url = e.target.value;
    setEndpointUrl(url);
    if (onDataSourceChange) {
      onDataSourceChange({ type: "url", value: url });
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && onDataSourceChange) {
      const reader = new FileReader();
      reader.onload = () => {
        const content = reader.result;
        onDataSourceChange({ type: "file", name: file.name, content });
      };
      reader.readAsText(file);
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

      <div className="pt-6 space-y-4">
        <label className="block text-sm text-gray-300 font-medium flex items-center gap-2">
          <LinkIcon className="w-4 h-4 text-violet-300" />
          Enter Data Source URL
        </label>
        <input
          type="url"
          placeholder="https://example.com/data.json"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
          value={endpointUrl}
          onChange={handleUrlChange}
        />

        <label className="block text-sm text-gray-300 font-medium mt-4 flex items-center gap-2">
          <UploadCloud className="w-4 h-4 text-violet-300" />
          Upload JSON, XML, or CSV
        </label>
        <input
          type="file"
          accept=".json,.xml,.csv"
          className="block w-full text-sm text-gray-300
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-600 file:text-white
            hover:file:bg-violet-500"
          onChange={handleFileUpload}
        />
      </div>
    </div>
  );
}
