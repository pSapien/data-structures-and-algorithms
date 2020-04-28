const Queue = require('./queue');

describe('Queue spec', () => {
  const queue = new Queue();

  test('enqueue', () => {
    queue.enqueue(10);
    queue.enqueue(11);

    expect(queue.size()).toBe(2);

    queue.enqueue(12);
    expect(queue.size()).toBe(3);
  });

  test('dequeue', () => {
    queue.dequeue();
    expect(queue.size()).toBe(2);

    expect(queue.dequeue()).toBe(11);
    expect(queue.size()).toBe(1);
    expect(queue.peek()).toBe(12);
  });
})
