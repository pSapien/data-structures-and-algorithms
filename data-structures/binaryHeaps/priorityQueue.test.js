const PriorityQueue = require('./priorityQueue');

describe('PriorityQueue spec', () => {
  test('enqueue', () => {
    const PQ = new PriorityQueue();
    PQ.enqueue("Reading", 2);
    expect(PQ.values).toEqual([{ value: "Reading", priority: 2 }]);
    PQ.enqueue("Meditating", 3);
    PQ.enqueue("Breakfast", 1);
    PQ.enqueue("Coding", 2);
    expect(PQ.values).toEqual([
      { value: "Breakfast", priority: 1 },
      { value: "Reading", priority: 2 },
      { value: "Coding", priority: 2 },
      { value: "Meditating", priority: 3 },
    ]);
  });

  test('dequeue', () => {
    const PQ = new PriorityQueue();
    PQ.enqueue("Reading", 2);
    PQ.enqueue("Meditating", 3);
    PQ.enqueue("Breakfast", 1);
    PQ.enqueue("Coding", 4);
    expect(PQ.dequeue()).toEqual({ value: "Breakfast", priority: 1 });
    expect(PQ.values).toEqual([
      { value: "Reading", priority: 2 },
      { value: "Coding", priority: 4 },
      { value: "Meditating", priority: 3 },
    ]);
  });
});
