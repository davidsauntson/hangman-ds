import React, { useState } from "react";

import Title from "../title/Title";
import Gallows from "../gallows/Gallows";
import CorrectGuesses from "../correct-guesses/CorrectGuesses";
import IncorrectGuesses from "../incorrect-guesses/IncorrectGuesses";
import RemainingGuesses from "../remaining-guesses/RemainingGuesses";
import PotentialGuesses from "../potential-guesses/PotentialGuesses";
import Result from "../result/Result";
import { words } from "../../config";

const Board = (props) => {
  // Gets a radom word from the words object in cofig to start the game
  const startingWord = words[Math.floor(Math.random() * words.length)];

  // setup state
  const [word] = useState(startingWord);
  const [remainingBadGuesses, setRemainingBadGuesses] = useState(10);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [hasWon, setHasWon] = useState(false);

  // EVENT HANDLERS
  // ---
  // handle guess from PotentialGuesses
  const handleGuess = (letter) => {
    setGuessedLetters(guessedLetters.concat(letter));

    updateGuesses(letter);
  };

  // GAME LOGIC METHODS
  // ---
  // update the guessed letter arrays and the number of bad guesses left
  const updateGuesses = (letter) => {
    if (word.indexOf(letter) !== -1) {
      // it is a correct guess!
      setCorrectGuesses(correctGuesses.concat(letter));
    } else {
      // it's a doozy :-(
      setIncorrectGuesses(incorrectGuesses.concat(letter));
      setRemainingBadGuesses(remainingBadGuesses - 1);
    }
  };

  return (
    <main className="board" data-testid="board">
      <Title />
      <Gallows />
      <CorrectGuesses word={word} correctGuesses={correctGuesses} />
      <IncorrectGuesses />
      <RemainingGuesses remainingBadGuesses={remainingBadGuesses} />
      <PotentialGuesses
        alphabet={props.alphabet}
        handleGuess={handleGuess}
        guessedLetters={guessedLetters}
      />
      <Result />
    </main>
  );
};

export default Board;
