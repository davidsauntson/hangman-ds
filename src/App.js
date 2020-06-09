import React from "react";
import "./sass/app.scss";

import Board from "./components/board/Board";

const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

function App() {
  return (
    <div className="hangman" data-testid="hangman">
      <Board alphabet={alphabet} maxBadGuesses={10} />
    </div>
  );
}

export default App;
