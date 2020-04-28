// @ts-check

class Node {
  constructor(value) {
    this.left = null;
    this.value = value;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * insert a node
   */
  insert(value) {
    const newNode = new Node(value);

    if(this.root === null) {
      this.root = newNode;
      return this;
    } 

    let curr = this.root;

    while(true) {
      if(value === curr.value) return this;

      /** for value greater than the current node */
      if(value > curr.value) {
        /** look to the right side */

        if(curr.right === null) {
          curr.right = newNode;
          return this;
        }

        curr = curr.right;
      } else {
        /** for value lesser than the current node */

        /** look to the left side */
        if(curr.left === null) {
          curr.left = newNode;
          return this;
        }

        curr = curr.left;
      }
    }
  }

  /**
   * check whether the value is in the tree or not
   */
  contains(value) {
    if(this.root === null) return undefined;

    let curr = this.root;

    while(true) {
      if(value === curr.value) return true;

      if(value > curr.value) {
        /** look to the right side */
        if(curr.right === null) return false;
        curr = curr.right;
      } else {
        /** to the left, to the left */
        if(curr.left === null) return false;
        curr = curr.left;
      }
    } 
  }
 
}

module.exports = BinarySearchTree;