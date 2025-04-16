import React from "react";
import { render, screen } from "@testing-library/react";
import SalesCards from "../../components/SalesCards";
import '@testing-library/jest-dom';

describe("SalesCards Component", () => {
  const salesReps = [
    { name: "Alice", role: "Manager", region: "North America", skills: [], deals: [], clients: [] },
    { name: "Bob", role: "Executive", region: "Europe", skills: [], deals: [], clients: [] },
  ];

  it("renders loading state", () => {
    render(<SalesCards salesReps={[]} loading={true} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders sales representatives", () => {
    render(<SalesCards salesReps={salesReps} loading={false} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });
});