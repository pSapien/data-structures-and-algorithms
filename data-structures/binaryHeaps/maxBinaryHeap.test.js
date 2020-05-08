const MaxBinaryHeap = require('./maxBinaryHeap');

const HeapWithValues = [41, 39, 33, 18, 21, 12];
function createHeapWithDefinedValues() {
  const Heap = new MaxBinaryHeap();

  Heap.insert(41);
  Heap.insert(39);
  Heap.insert(33);
  Heap.insert(18);
  Heap.insert(27);
  Heap.insert(12);

  return Heap;
}

describe('MaxBinaryHeap Spec', () => {
  test('insert', () => {
    const Heap = createHeapWithDefinedValues();
    expect(Heap.insert(55)).toEqual([55, 39, 41, 18, 27, 12, 33]);
    expect(Heap.insert(1)).toEqual([55, 39, 41, 18, 27, 12, 33, 1]);
  });

  test('extractMax', () => {
    const Heap = createHeapWithDefinedValues();
    expect(Heap.extractMax()).toBe(41);
    console.log(Heap.values);
    // expect(Heap.values).toEqual([39, 27, 33, 18, 12]);
  });
})
