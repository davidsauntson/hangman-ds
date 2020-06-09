import React from "react";

const RemainingGuesses = (props) => {
  return (
    <div className="lives-left">
      <span className="lives-left__count" data-testid="remaining-guesses">
        {props.remainingBadGuesses}
      </span>
      lives left!
    </div>
  );
};

export default RemainingGuesses;
