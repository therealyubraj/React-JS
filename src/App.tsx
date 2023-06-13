import { useState } from "react";
import "./App.css";
import { Game } from "./Game";
import { State } from "./State";

const dim = 20; // number of tiles in a row/col
const tileSizePercent = 3; // percentage of the total width/height that individual tile will take

const state = new State(dim);
const { snake, food } = state;

let changeState: any;

function App() {
  const [dState, setDState] = useState(state.getState());

  changeState = setDState;

  window.onkeydown = (ev: KeyboardEvent) => {
    // console.log(ev.key);
    switch (ev.key) {
      case "ArrowUp":
        if (snake.yspeed === 0) snake.changeDir(0, -1);
        break;
      case "ArrowDown":
        if (snake.yspeed === 0) snake.changeDir(0, 1);
        break;
      case "ArrowRight":
        if (snake.xspeed === 0) snake.changeDir(1, 0);
        break;
      case "ArrowLeft":
        if (snake.xspeed === 0) snake.changeDir(-1, 0);
        break;
    }
    // setDState(state.getState());
  };

  return (
    <div className="App height-100">
      <header className="App-header height-100">
        <div className="game height-100">
          <Game dim={dim} tileSizePercent={tileSizePercent} state={dState} />
        </div>
      </header>
    </div>
  );
}

const frameRate = 5;
setInterval(() => gameLoop(), 1000 / frameRate);

function gameLoop() {
  if (!changeState) return;
  console.log("Moving");
  snake.moveSnake();
  if (food.isFood(snake.snake[0][0], snake.snake[0][1])) {
    console.log("Snake ate the food!");
    food.respawn(dim);
    snake.increaseLength();
  }
  changeState(state.getState());
}

export default App;
