import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../../pages/index";
import '@testing-library/jest-dom';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: "Mocked data" }),
  })
);

describe("Home Page", () => {
  it("renders the sidebar and main content", () => {
    render(<Home />);
    expect(screen.getByText("Insight-Driven Sales Excellence")).toBeInTheDocument();
    expect(screen.getByText("Ask a Question (AI Endpoint)")).toBeInTheDocument();
  });

  it("renders the Dashboard content by default", () => {
    render(<Home />);
    expect(screen.getByText("Loading insights...")).toBeInTheDocument();
  });

  it("switches content when menu items are clicked", () => {
    render(<Home />);
    fireEvent.click(screen.getByText("Sales Representative"));
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Manage Models"));
    expect(screen.getByText("Manage AI Models")).toBeInTheDocument();
  });
});