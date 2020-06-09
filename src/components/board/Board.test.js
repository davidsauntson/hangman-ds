import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Board from "./Board";

describe("Board component", () => {
  test("renders", () => {
    const { getByTestId } = render(<Board maxBadGuesses={10} />);
    expect(getByTestId("board")).toBeTruthy();
  });
});
