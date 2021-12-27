import { assert} from 'chai';
import 'mocha';
import {Queue} from './s1_3_instance_types'
import {beforeEach} from "mocha";

describe('Queue', () => {
  let myQueue: Queue<number>;
  beforeEach(() => {
     myQueue  = new Queue<number>();
  })
  it('should pop an undefined value when empty', () => {
    assert.isUndefined(myQueue.pop())
  })
  it ('should push and pop work first in, first out', () => {
    myQueue.push(1);
    myQueue.push(2);
    assert.equal(myQueue.pop(), 1)
    assert.equal(myQueue.pop(), 2)
  })
})
