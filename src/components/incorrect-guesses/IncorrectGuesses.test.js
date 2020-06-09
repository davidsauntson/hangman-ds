import React from "react";
import { render } from "@testing-library/react";

import IncorrectGuesses from "./IncorrectGuesses";

const incorrectGuesses = ["a", "b"];
const setupComponent = () => (
  <IncorrectGuesses incorrectGuesses={incorrectGuesses} />
);

describe("IncorrectGuesses component", () => {
  test("renders", () => {
    const { getByTestId } = render(setupComponent());

    expect(getByTestId("incorrect-guesses")).toBeTruthy();
  });

  test("show all incorrectly guessed letters", () => {
    const word = "hello";
    const incorrectGuesses = ["a", "b"];
    const { getByText } = render(setupComponent());
    expect(getByText("a")).toBeTruthy();
    expect(getByText("b")).toBeTruthy();
  });
});
