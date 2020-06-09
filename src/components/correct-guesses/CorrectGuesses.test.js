import React from "react";
import { render } from "@testing-library/react";

import CorrectGuesses from "./CorrectGuesses";

const word = "hi";
const correctGuesses = ["h"];
const setupComponent = () => {
  return <CorrectGuesses word={word} correctGuesses={correctGuesses} />;
};

describe("CorrectGuesses component", () => {
  test("renders", () => {
    const { getByTestId } = render(setupComponent());
    expect(getByTestId("correct-guesses")).toBeTruthy();
  });

  test("shows correct number of blank spaces", () => {
    const { getAllByText } = render(setupComponent());
    expect(getAllByText("_").length).toBe(word.length - correctGuesses.length);
  });

  test("shows letters in correct place when guessed", () => {
    const { getByText } = render(setupComponent());
    expect(getByText("h")).toBeTruthy();
  });
});
