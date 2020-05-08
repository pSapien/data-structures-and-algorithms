const MaxBinaryHeap = require('./maxBinaryHeap');

describe('MaxBinaryHeap Spec', () => {
  test('insert', () => {
    const Heap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12]);
    expect(Heap.insert(55)).toEqual([55, 39, 41, 18, 27, 12, 33]);
  });
})
