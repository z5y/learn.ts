import {assert} from 'chai';
import 'mocha';
import {Animal, Movement, Position} from './s1_9_classes'
import {beforeEach} from "mocha";


describe('Animal', () => {
  const name: string = "Tito"
  let tito: Animal;
  beforeEach(() => {
    tito = new Animal(name);
  })
  it('should have a name', () => {
    assert.equal(tito.name, name);
  });
  it('should start in the center', () => {
    const center: Position = {x: 0, y: 0};
    assert.deepEqual(tito.position, center);
  });
  it('should be able to move', () => {
    const upAndToTheRight: Movement = {x: 1, y: 2};
    tito.move(upAndToTheRight);
    assert.deepEqual(tito.position, {x: 1, y: 2});
    tito.move(upAndToTheRight);
    assert.deepEqual(tito.position, {x: 2, y: 4});
  })
  it('can be constructed with optional position', () => {
    const initialPosition = {x: 5, y: 7};
    tito = new Animal(name, initialPosition);
    assert.deepEqual(tito.position, initialPosition);
  })
});
