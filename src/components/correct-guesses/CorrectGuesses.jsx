import React from "react";

const CorrectGuesses = (props) => {
  const wordArray = Array.from(props.word);

  return (
    <section className="hidden-word">
      {wordArray.map((letter, index) => {
        if (props.correctGuesses.indexOf(letter) !== -1) {
          return <span key={`letter-${index}`}>{letter}</span>;
        } else {
          return <span key={`letter-${index}`}>_</span>;
        }
      })}
    </section>
  );
};

export default CorrectGuesses;
