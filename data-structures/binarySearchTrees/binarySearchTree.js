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
  
  /**
   * Breadth-First Search
   */
  BFS() {
    if(this.root === null) return undefined;
    const queue = [];
    const visited = [];

    /** start from the root */
    queue.push(this.root);

    /** loop until there is nodes in the queue */
    while(queue.length) {
      /** let's, start from the start of the queue, shall we? */
      let node = queue.shift();

      /** okay, we have visited the node */
      if(node.value !== null) visited.push(node.value);

      /**
       * now, we should start looking at the children of the node on next level
       * and push it onto the queue
       */
      if(node.left !== null) queue.push(node.left);
      if(node.right !== null) queue.push(node.right);
    }

    return visited;
  }
}

module.exports = BinarySearchTree;