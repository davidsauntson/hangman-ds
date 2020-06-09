import React from "react";

const RemainingGuesses = (props) => {
  return (
    <div className="lives-left">
      <span
        aria-live="polite"
        aria-label={`You have ${props.remainingBadGuesses} guesses useLayoutEffect(() => {
          effect
          return () => {
            cleanup
          };
        }, [input])`}
        role="status"
        className="lives-left__count"
        data-testid="remaining-guesses"
      >
        {props.remainingBadGuesses}
      </span>
      lives left!
    </div>
  );
};

export default RemainingGuesses;
