import React from "react";

const Result = (props) => {
  let classes = "result";
  if (props.hasWon) {
    classes += " result--won";
  } else {
    classes += " result--lost";
  }
  return (
    <div className={classes} data-testid="result">
      {props.hasWon && <span className="result__text">Congratulations!</span>}
      {!props.hasWon && <span className="result__text">Wa waaaaa :-(</span>}
      <button className="result__button" onClick={props.handlePlayAgain}>
        Play again
      </button>
    </div>
  );
};

export default Result;
