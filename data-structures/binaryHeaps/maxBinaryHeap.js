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

  /**
   * get left child idx of a parent
   */
  getLeftChild(parent) {
    const idx = 2 * parent + 1;
    return [idx, this.values[idx]];
  }

  /**
   * get right child idx of a parent
   */
  getRightChild(parent) {
    const idx = 2 * parent + 2;
    return [idx, this.values[idx]];
  }

  /** 
   * insert into the max binary heap
   */
  insert(child) {
    this.values.push(child);

    let childIdx = this.values.length - 1;
    let parentIdx = this.getParentIdx(childIdx);
    let parent = this.values[parentIdx];

    /**
     * bubble up from the child to the parent until the existence of parent.
     * if child is greater than parent, swap child with parent.
     */
    while(parentIdx >= 0 && child > parent) {
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
    if(this.values.length === 0) return undefined;

    /** Replace the root of the heap with the last element on the last level. */
    const max = this.values[0];

    /** the last element of the heap becomes the first */
    this.values[0] = this.values[this.values.length - 1];
    this.values.length--;

    /** start from the parent idx */
    let parentIdx = 0;
    let parent = this.values[parentIdx];
    let [rightChildIdx, rightChildValue] = this.getRightChild(parentIdx);
    let [leftChildIdx, leftChildValue] = this.getLeftChild(parentIdx);

    /**
     * this process is typically called bubble-down
     * where we check bubble-down to the heap
    */
    while(parent > leftChildValue || parent > rightChildValue) {
      if(leftChildValue > parent) {
        this.values[parentIdx] = leftChildValue;
        this.values[leftChildIdx] = parent;
        parentIdx = leftChildIdx;
      } else if(rightChildValue > parent) {
        this.values[parentIdx] = rightChildValue;
        this.values[rightChildIdx] = parent;
        parentIdx = rightChildIdx;
      }

      [rightChildIdx, rightChildValue] = this.getRightChild(parentIdx);
      [leftChildIdx, leftChildValue] = this.getLeftChild(parentIdx);
    }

    return max;
  }
}

module.exports = MaxBinaryHeap;