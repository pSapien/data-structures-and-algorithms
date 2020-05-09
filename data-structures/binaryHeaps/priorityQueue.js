// @ts-check

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

/**
 * PriorityQueue implemented using minBinaryHeap
 */
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  getParentIdx(childIdx) {
    return Math.floor((childIdx - 1 / 2));
  }

  hasParent(childIdx) {
    return this.getParentIdx(childIdx) >= 0;
  }

  swap(parentIdx, childIdx) {
    let temp = this.values[childIdx];
    this.values[childIdx] = this.values[parentIdx];
    this.values[parentIdx] = temp;
  }

  /**
   * add the value to the list with respect to the priority.
   */
  enqueue(value, priority) {
    const child = new Node(value, priority);
    this.values.push(child);
    this.heapifyUp();
    return this.values;
  }

  hasHighPriorityThan(child, parent) {
    return child.priority < parent.priority;
  }

  /**
   *   -------------------  HEAPIFY UP  -------------------------------------------
   *  1. we start at the bottom left (child) of the heap.
   *  2. compare the child to its parent. if in order. Stop.
   *  3. if child priority is higher than parent. Swap. go to step 2.
   */
  heapifyUp() {
    const child = this.values[this.values.length - 1];
    let childIdx = this.values.length - 1;

    while (this.hasParent(childIdx)) {
      let parentIdx = this.getParentIdx(childIdx);
      let parent = this.values[parentIdx];

      /**
       * ----------------- NOTE --------------------
       *  lower number priority = higher priority
       *  priority 1 > priority 2
       */
      if (this.hasHighPriorityThan(child, parent)) {
        this.swap(parentIdx, childIdx);
        childIdx = parentIdx;
      } else {
        break;
      }
    }
  }

  /**
   * return the highest priority value from the queue
   */
  dequeue() {
    if (this.values.length === 0) return undefined;
    const maxValue = this.values[0];
    this.values[0] = this.values.pop();
    this.heapifyDown();
    return maxValue;
  }

  getLeftChildIdx(parentIdx) {
    return 2 * parentIdx + 1;
  }

  getRightChildIdx(parentIdx) {
    return this.getLeftChildIdx(parentIdx) + 1;
  }

  isInQueue(idx) {
    return idx < this.values.length;
  }

  hasLeftChild(parentIdx) {
    return this.isInQueue(this.getLeftChildIdx(parentIdx));
  }

  hasRightChild(parentIdx) {
    return this.isInQueue(this.getRightChildIdx(parentIdx));
  }

  hasChildren(parentIdx) {
    return this.hasLeftChild(parentIdx);
  }

  getLeftChild(parentIdx) {
    return this.values[this.getLeftChildIdx(parentIdx)];
  }

  getRightChild(parentIdx) {
    return this.values[this.getRightChildIdx(parentIdx)];
  }

  /**
   *     HEAPIFY-DOWN - moves the node at i down the max-heap until it no longer violates the priority queue propeties
   * 1. we start from the root of the queue, i.e index : 0
   * 2. we check their children. If in priority order then, stop.
   * 3. if priority queue of their children is higher than parent. Swap. Go to step 2.
  */
  heapifyDown() {
    let parentIdx = 0;
    const parent = this.values[parentIdx];
    
    while (true) {
      if (!this.hasChildren(parentIdx)) break;

      let swapChildIdx = null;

      const leftChild = this.getLeftChild(parentIdx);
      if (this.hasHighPriorityThan(leftChild, parent)) {
        swapChildIdx = this.getLeftChildIdx(parentIdx);
      }

      if (this.hasRightChild(parentIdx)) {
        let rightChild = this.getRightChild(parentIdx);
        if (
          (swapChildIdx === null && this.hasHighPriorityThan(rightChild, parent)) ||
          (swapChildIdx !== null && this.hasHighPriorityThan(rightChild, leftChild))
        ) {
          swapChildIdx = this.getRightChildIdx(parentIdx);
        }
      }

      this.swap(parentIdx, swapChildIdx);
      parentIdx = swapChildIdx;
    }
  }
}

module.exports = PriorityQueue;