export class Food {
  x: number = 0;
  y: number = 0;

  constructor(dim: number) {
    this.respawn(dim);
  }

  respawn(dim: number) {
    this.x = Math.floor(Math.random() * dim);
    this.y = Math.floor(Math.random() * dim);
  }

  isFood(x: number, y: number) {
    return this.x === x && this.y === y;
  }
}
