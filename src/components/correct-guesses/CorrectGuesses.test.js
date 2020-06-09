import React from "react";
import { render } from "@testing-library/react";

import CorrectGuesses from "./CorrectGuesses";

describe("CorrectGuesses component", () => {
  test("renders", () => {
    const { getByTestId } = render(<CorrectGuesses />);
    expect(getByTestId("correct-guesses")).toBeTruthy();
  });

  test("shows correct number of blank spaces", () => {
    const word = "hello";
    const { getAllByText } = render(<CorrectGuesses word={word} />);
    expect(getAllByText("_").length).toBe(word.length);
  });

  test("shows letters in correct place when guessed", () => {
    const word = "hi";
    const correctGuesses = ["h"];
    const { getByText } = render(
      <CorrectGuesses word={word} correctGuesses={correctGuesses} />
    );

    expect(getByText("h")).toBeTruthy();
  });
});
