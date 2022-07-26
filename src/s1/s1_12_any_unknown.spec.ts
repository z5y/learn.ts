import 'mocha';
import {assert, expect} from 'chai';

describe('Understanding any and unknown', () => {
  let myAny: any;
  let myUnknown: unknown;

  const myNumber = 123;
  const myString = 'hello';

  it('any is superclass of any class', () => {
    myAny = myNumber;
    myAny = myString;
  })
  it('any allows anything you can imagine()', () => {
    // The code below compiles, but gives runtime error:
    // TypeError: Cannot read properties of undefined (reading 'anything')
    try {
      myAny.allows.anything.you.can.imagine();
      assert(false); // error expected
    } catch (error) {
      //console.log(error);
    }
  })
  it('any assigned to boolean', () => {
    myAny = 'hello';
    let myBoolean: boolean = myAny;
    // since any bypasses the type system completely,
    // now myBoolean value is 'hello';

    // Does not compile:
    // assert.equal((myBoolean as string), 'hello')
    assert.equal(myAny, 'hello')
    assert.equal((myBoolean as unknown), 'hello')
    assert.equal((myBoolean as any), 'hello')
    assert.equal(myBoolean.toString(), 'hello')
  })
  it('unknown is superclass of number and string', () => {
    myUnknown = myNumber;
    myUnknown = myString;
  })
  it('unknown is type safer than any', () => {
    // The code below does not compile:
    // myUnknown.cannot.be.invoked.that.easy();

    myUnknown = 'hello';
    assert.equal(myUnknown, 'hello');
    assert.equal(myUnknown as string, 'hello');

    // does not compile:
    //assert.equal(myUnknown.trim(), 'hello');
    if(typeof myUnknown === 'string') {
      assert.equal(myUnknown.trim(), 'hello');
    }
    assert.equal((myUnknown as string).trim(), 'hello');
  })
})

describe('Understand type assertions and type casting', () => {
  let myString: string = '123';
  let myUnknown: unknown = myString;
  it('type assertion with as is not a cast', () => {
    assert.isTrue(myUnknown === '123');
    assert.isFalse(myUnknown as number === 123);
  })
  it('to cast to a number, use unary + operator on string', () => {
    let myNumber: number = +myString;
    assert.equal(myNumber, 123)
  })
  it('to cast from number to string the same trick does not work', () => {
    let n = 123;
    // does not compile:
    // let s : string = +n;
  })
})
