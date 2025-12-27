import { Scene } from "./compoenents/Scene";
import { Player } from "./compoenents/Player";
import { Map } from "./compoenents/Map";
import { Controls } from "./compoenents/Controls";
import { Score } from "./compoenents/Score";
import "./Game.css"
import { Result } from "./compoenents/Result";
export default function Game() {
  return (
    <div className="game">
      <Scene>
        <Player></Player>
        <Map></Map>
      </Scene>
      <Score></Score>
      <Controls></Controls>
      <Result></Result>
    </div>
  );
}
