import { useState } from "react";
import "./App.css";
import Game from "./Game";
import useGameStore from "./stores/game";
import runnerImg from "./assets/CharacterImages/runner.png";
import remImg from "./assets/CharacterImages/rem.png";
function App() {
  const [started, setStarted] = useState(false);
  const selected = useGameStore((s) => s.selectedCharacter);
  const setCharacter = useGameStore((s) => s.setCharacter);
  if (!started) {
    return (
      <div className="start-screen">
        <h1 className="title">Roads of Fate</h1>
        <div className="char-row">
          <img
            src={runnerImg}
            className={`char-card ${selected === "runner" ? "selected" : ""}`}
            onClick={() => setCharacter("runner")}
          />

          <img
            src={remImg}
            className={`char-card ${selected === "rem" ? "selected" : ""}`}
            onClick={() => setCharacter("rem")}
          />
        </div>

        <p className="subtitle">Press Start to Begin</p>

        <button className="start-btn" onClick={() => setStarted(true)}>
          Start Game
        </button>
      </div>
    );
  }

  // once started → show game
  return <Game />;
}

export default App;
