import React from "react";

const IncorrectGuesses = (props) => {
  return (
    <div className="incorrect-guesses" data-testid="incorrect-guesses">
      {props.incorrectGuesses.map((letter) => (
        <span className="incorrect-guesses__letter" key={letter}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default IncorrectGuesses;
