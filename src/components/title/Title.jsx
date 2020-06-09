import React from "react";

const Title = () => {
  return (
    <div className="title">
      <h1 className="title__heading">Hangman!</h1>
      <p className="title__intro">
        Click on a letter below to make a guess. Guess the word before the man
        hangs!
      </p>
    </div>
  );
};

export default Title;
