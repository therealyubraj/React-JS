import "./App.css";
import { Food } from "./Food";
import { Snake } from "./Snake";
type GameParams = {
  dim: number;
  tileSizePercent: number;
  state: {
    snake: Snake;
    food: Food;
  };
};

const tile = (
  x: number,
  tileSizePercent: number,
  isSnake: boolean,
  isFood: boolean
) => {
  const actualTileSize = tileSizePercent * 0.9 * window.innerWidth * 0.01;

  let backgroundColor = "black";

  if (isFood) {
    backgroundColor = "pink";
  }
  if (isSnake) {
    backgroundColor = "green";
  }

  return {
    left: x * actualTileSize,
    width: tileSizePercent + "%",
    height: "100%",
    backgroundColor,
    border: "2px solid white",
  };
};

export function Game({ dim, tileSizePercent, state }: GameParams) {
  const { snake, food } = state;
  return (
    <div className="mainDiv height-100 m-auto">
      {[...Array(dim)].map((_, y: number) => {
        return (
          <div
            style={{
              height: tileSizePercent + "%",
              width: "100%",
              margin: "auto",
              position: "relative",
            }}
            key={y}
          >
            {[...Array(dim)].map((_, x: number) => {
              return (
                <div
                  key={x + dim * y}
                  style={{
                    ...tile(
                      x,
                      tileSizePercent,
                      snake.isSnake(x, y),
                      food.isFood(x, y)
                    ),
                    position: "absolute",
                  }}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
