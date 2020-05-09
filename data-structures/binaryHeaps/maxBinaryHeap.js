// @ts-check

class MaxBinaryHeap {
  constructor(values) {
    this.values = values || [];
  }

  /**
   * get the parent index of the any element
   */
  getParentIdx(child) {
    return Math.floor((child - 1) / 2);
  }

  hasParent(child) {
    return this.getParentIdx(child) >= 0;
  }

  getLeftChildIdx(parentIdx) {
    return 2 * parentIdx + 1;
  }

  getRightChildIdx(parent) {
    return this.getLeftChildIdx(parent) + 1;
  }

  hasRightChild(parent) {
    return this.getRightChildIdx(parent) < this.values.length;
  }

  hasLeftChild(parent) {
    return this.getLeftChildIdx(parent) < this.values.length;
  }

  getLeftChild(parent) {
    return this.values[this.getLeftChildIdx(parent)];
  }

  getRightChild(parent) {
    return this.values[this.getRightChildIdx(parent)];
  }

  hasChild(parent) {
    return this.hasLeftChild(parent);
  }

  swap(a, b) {
    let temp = this.values[a]
    this.values[a] = this.values[b];
    this.values[b] = temp;
  }

  /** 
   * insert into the max binary heap
   */
  insert(child) {
    this.values.push(child);

    let childIdx = this.values.length - 1;
    
    /**
     * bubble up from the child to the parent until the existence of parent.
     * if child is greater than parent, swap child with parent.
     */
    while (this.hasParent(childIdx)) {
      const parentIdx = this.getParentIdx(childIdx);
      const parent = this.values[parentIdx];

      if(child > parent) {
        this.swap(parentIdx, childIdx);
        childIdx = parentIdx;
      } else {
        break;
      }
    }

    return this.values;
  }

  /**
   * extract the max from the heap and reordering the properties in it.
   */
  extractMax() {
    if (this.values.length === 0) return undefined;
    if (this.values.length === 1) return this.values.pop();

    /** Replace the root of the heap with the last element on the last level. */
    const max = this.values[0];

    /** the last element of the heap becomes the first */
    this.values[0] = this.values.pop();

    this.heapifyDown();

    return max;
  }

  /**
   *     HEAPIFY-DOWN - moves the node at i down the max-heap until it no longer violates the max-heap property
   * 1. we start from the root of the heap, i.e index : 0
   * 2. we check the child indexes whether any value of them is greater than parent of not
   * 3. if greater, swap the parent value with child
   * 4. carry on the procedure untill it no longer violates the max-heap property
  */
  heapifyDown() {
    let parentIdx = 0;
    let parent = this.values[0];

    while (true) {
      /* keep track of the next child idx to be swapped */
      let swapChildIdx = null;

      /** if there is no children, then the procedure is complete */
      if (!this.hasChild(parentIdx)) break;

      let leftChild = this.getLeftChild(parentIdx);

      if (leftChild > parent) {
        swapChildIdx = this.getLeftChildIdx(parentIdx);
      }

      if (this.hasRightChild(parentIdx)) {
        let rightChild = this.getRightChild(parentIdx);
        /* remember, while checking for right child, there are 2 possibilities */
        if (
          /**
           * 1. if the right child is greater than the parent. leftChild is lesser than the parent.
           */
          (swapChildIdx === null && rightChild > parent) ||
          /**
           * 2. Also, we can have a case, where both the right and left child can be greater than the parent.
           *    In this case, we must use the greatest between the two children to be swapChild
           */
          (swapChildIdx !== null && rightChild > leftChild)
        ) {
          swapChildIdx = this.getRightChildIdx(parentIdx);
        }
      }

      /** the heap satisfies its property, since there is no swap child */
      if (swapChildIdx === null) break;

      /** swap the parent and child */
      this.swap(parentIdx, swapChildIdx);

      /** update the parentIdx to the new child index */
      parentIdx = swapChildIdx;
    }
  }
}

module.exports = MaxBinaryHeap;