import React from "react";
import { render, fireEvent } from "@testing-library/react";

import PotentialGuesses from "./PotentialGuesses";

describe("PontentialGuesses component", () => {
  test("renders", () => {
    const guessedLetters = ["A"];
    const { getByTestId } = render(
      <PotentialGuesses guessedLetters={guessedLetters} />
    );
    expect(getByTestId("potential-guesses")).toBeTruthy();
  });

  test("shows one button for each letter of the alphabet", () => {
    const alphabet = Array.from("ABC");
    const guessedLetters = ["A"];
    const { getAllByTestId } = render(
      <PotentialGuesses alphabet={alphabet} guessedLetters={guessedLetters} />
    );
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

  test("handles letter guess button click with correct args", () => {
    const clickHandler = jest.fn();
    const alphabet = Array.from("AB");
    const guessedLetters = [];
    const { getByText } = render(
      <PotentialGuesses
        alphabet={alphabet}
        guessedLetters={guessedLetters}
        handleGuess={clickHandler}
      />
    );
    const guessA = getByText("A");

    fireEvent.click(guessA);

    expect(clickHandler).toHaveBeenCalledTimes(1);
    expect(clickHandler).toHaveBeenCalledWith("A");
  });
});
