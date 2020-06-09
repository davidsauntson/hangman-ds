import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Board from "./Board";

describe("Board component", () => {
  test("renders", () => {
    const { getByTestId } = render(<Board />);
    expect(getByTestId("board")).toBeTruthy();
  });

  test("handles letter guess button click with correct args", () => {
    const clickHandler = jest.fn();
    const { getByText } = render(<Board alphabet="A" />);
    const guessA = getByText("A");

    fireEvent.click("guessA");

    expect(clickHandler).toHaveBeenCalledTimes(1);
    expect(clickHandler).toHaveBeenCalledWith("A");
  });
});
