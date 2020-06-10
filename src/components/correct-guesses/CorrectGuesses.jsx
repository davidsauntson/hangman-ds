import React from "react";

const CorrectGuesses = (props) => {
  const wordArray = Array.from(props.word);

  return (
    <div
      id="word"
      className="hidden-word"
      data-testid="correct-guesses"
      aria-live="polite"
      aria-label="The word to guess"
      tabIndex="0"
    >
      {wordArray.map((letter, index) => {
        if (props.correctGuesses.indexOf(letter) !== -1) {
          return (
            <span
              tabIndex="0"
              className="hidden-word__letter"
              key={`letter-${index}`}
            >
              {letter}
            </span>
          );
        } else {
          return (
            <span
              tabIndex="0"
              aria-label="blank"
              className="hidden-word__letter"
              key={`letter-${index}`}
            >
              _
            </span>
          );
        }
      })}
    </div>
  );
};

export default CorrectGuesses;
