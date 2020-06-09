import React from "react";

const Result = (props) => {
  return (
    <div data-testid="result">
      {props.hasWon && <span>Congratulations!</span>}
      {!props.hasWon && <span>Wa waaaaa :-(</span>}
      <button onClick={props.handlePlayAgain}>Play again</button>
    </div>
  );
};

export default Result;
