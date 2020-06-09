import React from "react";
import { ReactComponent as HangmanSVG } from "../../svg/hangman.svg";

const Gallows = (props) => {
  let elementsToShow = props.maxBadGuesses - props.remainingBadGuesses;
  return (
    <div className="gallows">
      {Array.from(Array(elementsToShow)).map((x, index) => (
        <span>show element {index}</span>
      ))}
    </div>
  );
};

export default Gallows;
