type Position = { x: number, y: number };
type Movement = { x: number, y: number };
const zero: Position = {x: 0, y: 0};

class Animal {
  readonly name: string;
  position: Position

  constructor(name: string, position: Position = zero) {
    this.name = name
    this.position = position
  }

  move(movement: Movement) {
    this.position = {
      x: this.position.x + movement.x,
      y: this.position.y + movement.y
    }
  }

}

export {Position, Movement, zero, Animal}
