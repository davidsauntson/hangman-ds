import React, { useState, useEffect } from "react";

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
  const [word, setWord] = useState(startingWord);
  const [remainingBadGuesses, setRemainingBadGuesses] = useState(
    props.maxBadGuesses
  );
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [hasWon, setHasWon] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  // EVENT HANDLERS
  // ---
  // handle guess from PotentialGuesses
  const handleGuess = (letter) => {
    setGuessedLetters(guessedLetters.concat(letter));
    updateGuesses(letter);
  };

  const handlePlayAgain = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setIncorrectGuesses([]);
    setGuessedLetters([]);
    setCorrectGuesses([]);
    setHasWon(false);
    setIsGameOver(false);
    setRemainingBadGuesses(10);
  };

  // EFFECT HOOKS
  // ---

  // must wait until guessedLetters state is changed in call handler before
  // checking for a game over
  useEffect(() => {
    checkGameOver();
  }, [guessedLetters, correctGuesses, incorrectGuesses, remainingBadGuesses]);

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

  // check if the game is over and update state vars accordingly
  const checkGameOver = () => {
    // correct guesses array may contain duplicate letters, so need to dedupe word letters
    const uniqueLettersInWord = new Set(word);

    // win when the number of unique letters in the word is the same as the number of correctly guessed letters
    if (correctGuesses.length === uniqueLettersInWord.size) {
      setHasWon(true);
      setIsGameOver(true);
    } else {
      // lose when there are no lives left
      if (remainingBadGuesses === 0) {
        setHasWon(false);
        setIsGameOver(true);
      }
    }
  };

  return (
    <main className="board" data-testid="board">
      <Title />
      <Gallows
        remainingBadGuesses={remainingBadGuesses}
        maxBadGuesses={props.maxBadGuesses}
      />
      <CorrectGuesses word={word} correctGuesses={correctGuesses} />
      <IncorrectGuesses incorrectGuesses={incorrectGuesses} />
      {!isGameOver && (
        <>
          <RemainingGuesses remainingBadGuesses={remainingBadGuesses} />
          <PotentialGuesses
            alphabet={props.alphabet}
            handleGuess={handleGuess}
            guessedLetters={guessedLetters}
          />
        </>
      )}
      {isGameOver && (
        <Result hasWon={hasWon} handlePlayAgain={handlePlayAgain} />
      )}
    </main>
  );
};

export default Board;
