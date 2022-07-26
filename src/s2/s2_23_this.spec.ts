import 'mocha';
import {assert} from "chai";

class Person {
  private _age: number;
  constructor(age: number) {
    this._age = age;
  }
  growOld() {
    this._age++;
  }
  age() {
    return this._age;
  }
}

class Person2 {
  private _age: number;
  constructor(age: number) {
    this._age = age;
  }
  growOld = () => {
    this._age++;
  }
  age = () => {
    return this._age;
  }
}

// this keyword refers to:
// 1. 'calling context' (aka 'dynamic scoped') when outside an arrow function.
// 2. 'lexically scoped' (aka 'static scoped') when inside an arrow function.

// Lexical scope means:
// a function looks up variables in the context where it was defined,
// and not in the scope immediately around it.


// Functions in javascript are 'first class citizens':
// * they can be stored in a variable.


// https://medium.com/@dtipson/all-you-need-to-not-know-about-es2015-arrow-functions-and-this-a6433097e84c

describe('Understanding this keyword', () => {
  it('this outside a function', () => {
    const thomas = new Person(16);
    thomas.growOld();
    assert.equal(17, thomas.age());
  });
  it('this inside a function does not work', async () => {
    const thomas = new Person(16);
    setTimeout(thomas.growOld, 100);
    setTimeout(() => {
      assert.equal(17, thomas.age());
    }, 200)
  });

  it('assign grow old to variable does not work if growOld is a function', () => {
    const thomas = new Person(16);
    const growOld = thomas.growOld;
    assert.equal(16, thomas.age());
    // Does not work:
    // growOld();
    // TypeError: Cannot read properties of undefined (reading '_age')
    // at growOld (src/s2/s2_23_this.spec.ts:12:5)
    // at Context.<anonymous> (src/s2/s2_23_this.spec.ts:65:5)
    // at processImmediate (node:internal/timers:466:21)
  });
  it('assign grow old to variable does work if growOld is a property pointing to an arrow function', () => {
    const thomas = new Person2(16);
    const growOld = thomas.growOld;
    assert.equal(16, thomas.age());
    growOld();
    assert.equal(17, thomas.age());
  });


});
