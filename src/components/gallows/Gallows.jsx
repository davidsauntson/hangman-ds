import React from "react";
import { ReactComponent as HangmanSVG } from "../../svg/hangman.svg";

const Gallows = (props) => {
  let elementsToShow = props.maxBadGuesses - props.remainingBadGuesses;

  // control which svg elements are displayed via CSS
  // adding .gallows--show-X will display svg element with id 'gallows-X'
  let classes = "gallows";
  for (let i = 0; i < elementsToShow; i++) {
    classes += ` gallows--show-${i}`;
  }

  return (
    <div className={classes}>
      <HangmanSVG />
    </div>
  );
};

export default Gallows;
