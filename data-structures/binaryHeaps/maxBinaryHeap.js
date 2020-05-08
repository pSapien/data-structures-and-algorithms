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

  /** 
   * insert into the max binary heap
   */
  insert(child) {
    this.values.push(child);

    // FIXME: use method to be more declarative
    let childIdx = this.values.length - 1;
    let parentIdx = this.getParentIdx(childIdx);
    let parent = this.values[parentIdx];

    /**
     * bubble up from the child to the parent until the existence of parent.
     * if child is greater than parent, swap child with parent.
     */
    while (parentIdx >= 0 && child > parent) {
      this.values[parentIdx] = child;
      this.values[childIdx] = parent;

      childIdx = parentIdx;
      parentIdx = this.getParentIdx(childIdx);
      parent = this.values[parentIdx];
    }

    return this.values;
  }

  /**
   * extract the max from the heap and reordering the properties in it.
   */
  extractMax() {
    if (this.values.length === 0) return undefined;
    if (this.values.length === 1) return this.values.pop();
    const rootIdx = 0;

    /** Replace the root of the heap with the last element on the last level. */
    const max = this.values[rootIdx];

    /** the last element of the heap becomes the first */
    this.values[rootIdx] = this.values.pop();

    let parentIdx = rootIdx;
    let parent = this.values[rootIdx];

    while (true) {
      let nextChildIdx = null;

      if (!this.hasLeftChild(parentIdx)) break;

      let leftChild = this.getLeftChild(parentIdx);
      if (leftChild > parent) nextChildIdx = this.getLeftChildIdx(parentIdx)

      if (this.hasRightChild(parentIdx)) {
        let rightChild = this.getRightChild(parentIdx);
        if (
          (nextChildIdx === null && rightChild > parent) ||
          (nextChildIdx !== null && rightChild > leftChild)
        ) {
          nextChildIdx = this.getRightChildIdx(parentIdx);
        }
      }

      if (nextChildIdx === null) break;

      this.values[parentIdx] = this.values[nextChildIdx];
      this.values[nextChildIdx] = parent;
      parentIdx = nextChildIdx;
    }

    return max;
  }
}

module.exports = MaxBinaryHeap;