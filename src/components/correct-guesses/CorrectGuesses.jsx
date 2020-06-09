import React from "react";

const CorrectGuesses = (props) => {
  const wordArray = Array.from(props.word);

  return (
    <div
      className="hidden-word"
      data-testid="correct-guesses"
      aria-live="assertive"
      aria-label="The word to guess"
    >
      {wordArray.map((letter, index) => {
        if (props.correctGuesses.indexOf(letter) !== -1) {
          return (
            <span className="hidden-word__letter" key={`letter-${index}`}>
              {letter}
            </span>
          );
        } else {
          return (
            <span className="hidden-word__letter" key={`letter-${index}`}>
              _
            </span>
          );
        }
      })}
    </div>
  );
};

export default CorrectGuesses;
