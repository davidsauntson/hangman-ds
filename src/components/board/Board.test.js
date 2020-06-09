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
    const alphabet = Array.from("AB");
    const { getByText } = render(<Board alphabet={alphabet} />);
    const guessA = getByText("A");

    fireEvent.click(guessA);

    expect(clickHandler).toHaveBeenCalledTimes(1);
    expect(clickHandler).toHaveBeenCalledWith("A");
  });
});
