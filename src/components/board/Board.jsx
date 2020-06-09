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
  const [word, setWord] = useState(startingWord);
  const [remainingGuesses, setRemainingGuesses] = useState(10);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const [hasWon, setHasWon] = useState(false);

  return (
    <main className="board" data-testid="board">
      <Title />
      <Gallows />
      <CorrectGuesses />
      <IncorrectGuesses />
      <RemainingGuesses />
      <PotentialGuesses />
      <Result />
    </main>
  );
};

export default Board;
