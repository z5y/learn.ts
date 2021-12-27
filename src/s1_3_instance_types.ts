

let regexp: RegExp = new RegExp('ab+c')
let array: Array<number> = [1, 2, 3]
let mySet: Set<number> = new Set([1, 1, 2, 2, 3, 3])

export class Queue<T> {
  private data: Array<T> = [];
  push(item: T) { this.data.push(item)}
  pop(): T | undefined {return this.data.shift()}
}



