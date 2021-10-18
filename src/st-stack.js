const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
module.exports = class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(element) {
    // throw new NotImplementedError('Not implemented');
    this.storage[this.count] = element;
    this.count++;
    // remove line with error and write your code here
  }

  pop() {
    // throw new NotImplementedError('Not implemented');
    if (this.count === 0) return undefined;
    let element = this.storage[this.count - 1];
    this.count--;
    delete this.storage[this.count];
    return element;
    // remove line with error and write your code here
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    return this.storage[this.count - 1];
    // remove line with error and write your code here
  }
};
