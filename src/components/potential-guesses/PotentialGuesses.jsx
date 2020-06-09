import React from "react";

const PotentialGuesses = (props) => {
  const renderKeyboard = () => {
    if (props.alphabet) {
      return props.alphabet.map((letter) => {
        const isDisabled = props.guessedLetters.indexOf(letter) !== -1;
        return (
          <button
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
    <section data-testid="potential-guesses" className="keyboard">
      {renderKeyboard()}
    </section>
  );
};

export default PotentialGuesses;
