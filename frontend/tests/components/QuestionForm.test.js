import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import QuestionForm from "../../components/QuestionForm";
import '@testing-library/jest-dom';

describe("QuestionForm Component", () => {
  it("renders the input and button", () => {
    render(<QuestionForm setHideContent={jest.fn()} setAnswer={jest.fn()} />);
    expect(screen.getByPlaceholderText("e.g., Which rep closed the highest deal?")).toBeInTheDocument();
    expect(screen.getByText("➤")).toBeInTheDocument();
  });

  it("calls setAnswer and setHideContent on submit", async () => {
    const setAnswer = jest.fn();
    const setHideContent = jest.fn();
    render(<QuestionForm setHideContent={setHideContent} setAnswer={setAnswer} selectedModel="openai" />);

    fireEvent.change(screen.getByPlaceholderText("e.g., Which rep closed the highest deal?"), {
      target: { value: "Who closed the highest deal?" },
    });
    
    fireEvent.click(screen.getByText("➤"));

    // Use waitFor to ensure the function is called asynchronously
    await waitFor(() => {
        fireEvent.click(screen.getByRole('button'));
    });
  });
});
