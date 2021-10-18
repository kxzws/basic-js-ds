const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this.binRoot = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    return this.binRoot;
    // remove line with error and write your code here
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    const node = this.binRoot;
    if (node === null) {
      this.binRoot = new Node(data);
      return;
    } else {
      const binTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return binTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return binTree(node.right);
          }
        } else {
          return null;
        }
      };
      return binTree(node);
    }
    // remove line with error and write your code here
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    let current = this.binRoot;
    if (current === null) return null;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data ) {
        if (current.left !== null) current = current.left;
        else return false;
      }
      if (data > current.data) {
        if (current.right !== null) current = current.right;
        else return false;
      }
    }
    return false;
    // remove line with error and write your code here
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    let current = this.binRoot;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
    // remove line with error and write your code here
  }

  minNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  findMinNode(node) {
    let tree = node;
    if (tree.left === null) {
      return tree;
    } else {
      return this.findMinNode(node.left);
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    this.binRoot = this.removeNode(this.binRoot, data);
    // remove line with error and write your code here
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let newNode = this.minNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    let current = this.binRoot;
    if (current === null) return null;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
    // remove line with error and write your code here
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    let current = this.binRoot;
    if (current === null) return null;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
    // remove line with error and write your code here
  }
};
