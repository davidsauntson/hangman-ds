import React from "react";

const IncorrectGuesses = (props) => {
  return (
    <div data-testid="incorrect-guesses">
      {props.incorrectGuesses.map((letter) => (
        <span key={letter}>{letter}</span>
      ))}
    </div>
  );
};

export default IncorrectGuesses;
