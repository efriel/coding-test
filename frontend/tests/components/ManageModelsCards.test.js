import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ManageModelsCards from "../../components/ManageModelsCards";
import '@testing-library/jest-dom';

describe("ManageModelsCards Component", () => {
  it("renders all available models", () => {
    render(<ManageModelsCards selectedModel="openai" onSelect={jest.fn()} />);
    expect(screen.getByText("OpenAI")).toBeInTheDocument();
    expect(screen.getByText("Google's AI model")).toBeInTheDocument();
  });

  it("calls onSelect when a model is selected", () => {
    const onSelect = jest.fn();
    render(<ManageModelsCards selectedModel="openai" onSelect={onSelect} />);
    fireEvent.click(screen.getByText("Gemini"));
    expect(onSelect).toHaveBeenCalledWith("gemini");
  });
});