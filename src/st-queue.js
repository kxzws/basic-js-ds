const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    const createList = (elem) => {
      if (elem === this.tail) return {
        value: this.tail.value,
        next: null
      };
      return {
        value: elem.value,
        next: createList(elem.next)
      };
    }
    return createList(this.head);
    // remove line with error and write your code here
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    if (!this.head) {
      this.head = new ListNode(value);
      this.tail = this.head;
    } else {
      let newNode = new ListNode(value);
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
      this.tail = newNode;
    }
    // remove line with error and write your code here
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    if (!this.head) return undefined;
    let element = this.head;
    this.head = this.head.next;
    let result = element.value;
    return result;
    // remove line with error and write your code here
  }
};
