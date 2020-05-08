const MaxBinaryHeap = require('./maxBinaryHeap');

describe('MaxBinaryHeap Spec', () => {
  test('insert', () => {
    const Heap = new MaxBinaryHeap();
    Heap.insert(41);
    Heap.insert(39);
    Heap.insert(33);
    Heap.insert(18);
    Heap.insert(27);
    Heap.insert(12);

    expect(Heap.insert(55)).toEqual([55, 39, 41, 18, 27, 12, 33]);
    expect(Heap.insert(1)).toEqual([55, 39, 41, 18, 27, 12, 33, 1]);
  });
})
