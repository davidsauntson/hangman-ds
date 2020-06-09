import React from "react";
import { render } from "@testing-library/react";

import PotentialGuesses from "./PotentialGuesses";

describe("PontentialGuesses component", () => {
  test("renders", () => {
    const { getByTestId } = render(<PotentialGuesses />);
    expect(getByTestId("potential-guesses")).toBeTruthy();
  });

  test("shows one button for each letter of the alphabet", () => {
    const alphabet = Array.from("ABC");
    const { getAllByTestId } = render(<PotentialGuesses alphabet={alphabet} />);
    expect(getAllByTestId("potential-guess").length).toBe(alphabet.length);
  });

  test("disables buttons for each guessed letter", () => {
    const alphabet = Array.from("ABC");
    const guessedLetters = ["A"];
    const { getByText } = render(
      <PotentialGuesses alphabet={alphabet} guessedLetters={guessedLetters} />
    );

    expect(getByText("A")).toBeDisabled();
  });
});
