import React from "react";

const RemainingGuesses = (props) => {
  return (
    <div>
      <span data-testid="remaining-guesses">{props.remainingBadGuesses}</span>
      lives left!
    </div>
  );
};

export default RemainingGuesses;
