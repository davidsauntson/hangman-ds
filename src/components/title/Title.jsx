import React from "react";

const Title = () => {
  return (
    <div className="title">
      <h1 className="title__heading">Hangman!</h1>
      <a className="skip-link" href="#instructions">
        Skip to instructions
      </a>
      <a className="skip-link" href="#word">
        Skip to word to guess
      </a>
      <a className="skip-link" href="#letters">
        Skip to letter buttons
      </a>
      <h2 id="instructions" className="title__intro">
        Click on a letter below to make a guess. Guess the word before the man
        hangs!
      </h2>
    </div>
  );
};

export default Title;
