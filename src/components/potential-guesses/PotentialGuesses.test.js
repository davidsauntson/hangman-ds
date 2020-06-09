import React from "react";
import { render, fireEvent } from "@testing-library/react";

import PotentialGuesses from "./PotentialGuesses";

const alphabet = Array.from("AB");
const guessedLetters = ["A"];

const setupComponent = (clickHandler) => {
  return (
    <PotentialGuesses
      alphabet={alphabet}
      guessedLetters={guessedLetters}
      handleGuess={clickHandler}
    />
  );
};

describe("PontentialGuesses component", () => {
  test("renders", () => {
    const { getByTestId } = render(setupComponent());
    expect(getByTestId("potential-guesses")).toBeTruthy();
  });

  test("shows one button for each letter of the alphabet", () => {
    const { getAllByTestId } = render(setupComponent());
    expect(getAllByTestId("potential-guess").length).toBe(alphabet.length);
  });

  test("disables buttons for each guessed letter", () => {
    const { getByText } = render(setupComponent());

    expect(getByText("A")).toBeDisabled();
  });

  test("handles letter guess button click with correct args", () => {
    const clickHandler = jest.fn();
    const { getByText } = render(
      <PotentialGuesses
        alphabet={alphabet}
        guessedLetters={guessedLetters}
        handleGuess={clickHandler}
      />
    );
    const guessB = getByText("B");

    fireEvent.click(guessB);

    expect(clickHandler).toHaveBeenCalledTimes(1);
    expect(clickHandler).toHaveBeenCalledWith("B");
  });
});
