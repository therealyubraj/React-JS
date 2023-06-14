import { Food } from "./Food";
import { Snake } from "./Snake";

export class State {
  snake: Snake;
  food: Food;

  constructor(dim: number) {
    this.snake = new Snake(dim);
    this.food = new Food(dim);
  }

  getState() {
    return {
      snake: this.snake,
      food: this.food,
    };
  }
}
