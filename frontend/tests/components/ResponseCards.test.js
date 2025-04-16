import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ResponseCards from "../../components/ResponseCards";
import '@testing-library/jest-dom';

describe("ResponseCards Component", () => {
  it("renders the answer", () => {
    render(<ResponseCards answer="This is a test answer." setAnswer={jest.fn()} />);
    expect(screen.getByText("This is a test answer.")).toBeInTheDocument();
  });

  it("calls setAnswer when the close button is clicked", () => {
    const setAnswer = jest.fn();
    render(<ResponseCards answer="This is a test answer." setAnswer={setAnswer} />);
    fireEvent.click(screen.getByText("✕"));
    expect(setAnswer).toHaveBeenCalledWith("");
  });
});