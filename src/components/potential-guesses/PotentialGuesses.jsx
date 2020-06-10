import React from "react";

const PotentialGuesses = (props) => {
  const renderKeyboard = () => {
    if (props.alphabet) {
      return props.alphabet.map((letter) => {
        const isDisabled = props.guessedLetters.indexOf(letter) !== -1;
        return (
          <button
            className="keyboard__key"
            data-testid="potential-guess"
            key={letter}
            onClick={() => props.handleGuess(letter)}
            disabled={isDisabled}
          >
            {letter}
          </button>
        );
      });
    } else {
      return null;
    }
  };

  return (
    <section
      data-testid="potential-guesses"
      className="keyboard"
      id="letters"
      aria-label="Use these buttons to guess letters in the word  "
    >
      {renderKeyboard()}
    </section>
  );
};

export default PotentialGuesses;
