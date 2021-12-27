
function add(a: number, b: number): number {
  return a + b;
}

// no return value: type is 'void'
function log(message: string): void {
  console.log('LOG', message);
}

// indefinite number of arguments
// 'rest parameter'
function sum(...values: number[]) {
  return values.reduce((previous, current) => {
    return previous + current;
  })
}

// function type:
type Add = (a: number, b: number) => number;
let myAddition : Add;
myAddition = add;
