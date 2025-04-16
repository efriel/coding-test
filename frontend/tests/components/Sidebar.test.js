import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "../../components/Sidebar";
import '@testing-library/jest-dom';

describe("Sidebar Component", () => {
  it("renders all menu items", () => {
    render(<Sidebar onMenuClick={jest.fn()} />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Sales Representative")).toBeInTheDocument();
    expect(screen.getByText("Manage Models")).toBeInTheDocument();
  });

  it("calls onMenuClick when a menu item is clicked", () => {
    const onMenuClick = jest.fn();
    render(<Sidebar onMenuClick={onMenuClick} />);
    fireEvent.click(screen.getByText("Sales Representative"));
    expect(onMenuClick).toHaveBeenCalledWith("Sales Representative");
  });
});