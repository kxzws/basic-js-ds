const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {
  // throw new NotImplementedError('Not implemented');
  if (!l) return undefined;
  let current = l,
    prev = current;
  while (current) {
    // совпадение на первом элементе
    if (prev === current && current.value === k) {
      l = l.next;
      current = l;
      prev = current;
    } else if (current.next === null && current.value === k) {
      prev.next = null;
      current = prev.next;
    } else if (current.value === k) {
      prev.next = current.next;
      current = prev.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return l;
  // remove line with error and write your code here
};
