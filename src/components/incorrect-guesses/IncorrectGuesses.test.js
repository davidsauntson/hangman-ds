import React from "react";
import { render } from "@testing-library/react";

import IncorrectGuesses from "./IncorrectGuesses";

describe("IncorrectGuesses component", () => {
  test("renders", () => {
    const { getByTestId } = render(<IncorrectGuesses />);

    expect(getByTestId("incorrect-guesses")).toBeTruthy();
  });

  test("show all incorrectly guessed letters", () => {
    const word = "hello";
    const incorrectGuesses = ["a", "b"];
    const { getByText } = render(
      <IncorrectGuesses incorrectGuesses={incorrectGuesses} />
    );
    expect(getByText("a")).toBeTruthy();
    expect(getByText("b")).toBeTruthy();
  });
});
