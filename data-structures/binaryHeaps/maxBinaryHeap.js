// @ts-check

class MaxBinaryHeap {
  constructor(values) {
    this.values = values || [];
  }

  /**
   * get the parent index of the any element
   */
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2); 
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
}

module.exports = MaxBinaryHeap;