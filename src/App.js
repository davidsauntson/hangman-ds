import React from "react";
import "./App.css";

import Board from "./components/board/Board";

const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

function App() {
  return (
    <div className="hangman">
      <Board alphabet={alphabet} />
    </div>
  );
}

export default App;
