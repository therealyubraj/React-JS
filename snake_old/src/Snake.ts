export class Snake {
  snake: number[][] = [];
  xspeed: number = 1;
  yspeed: number = 0;
  dim: number;

  constructor(dim: number) {
    const init = Math.floor(dim / 2);
    this.snake.push([init, init]);
    this.dim = dim;
  }

  changeDir(xspeed: number, yspeed: number) {
    this.xspeed = xspeed;
    this.yspeed = yspeed;
  }

  moveSnake() {
    for (let i = this.snake.length - 1; i > 0; i--) {
      this.snake[i][0] = this.snake[i - 1][0];
      this.snake[i][1] = this.snake[i - 1][1];
    }
    this.snake[0][0] += this.xspeed;
    this.snake[0][1] += this.yspeed;
  }

  increaseLength() {
    // TODO: get the actual position in which the tail needs to be added
    // insted of cheating with snake[0]
    this.snake.push([this.snake[0][0], this.snake[0][1]]);
  }

  isSnake(x: number, y: number) {
    for (const s of this.snake) {
      if (s[0] === x && s[1] === y) {
        return true;
      }
    }
    return false;
  }

  logSnake() {
    for (const s of this.snake) {
      console.log(s[0] + ", " + s[1]);
    }
  }
}
