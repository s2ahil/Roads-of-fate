import { useState } from "react";
import "./App.css";
import Game from "./Game";

function App() {

  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <div className="start-screen">

        <h1 className="title">Roads of Fate</h1>

        <p className="subtitle">Press Start to Begin</p>

        <button
          className="start-btn"
          onClick={() => setStarted(true)}
        >
          Start Game
        </button>

      </div>
    );
  }

  // once started → show game
  return <Game />;
}

export default App;
