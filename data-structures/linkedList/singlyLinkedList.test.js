const SinglyLinkedList = require('./singlyLinkedList');

describe('testing SinglyLinkedList', () => {
  const SLL = new SinglyLinkedList();

  test('testing push implementation', () => {
    SLL.push('I');
    expect(SLL.size()).toBe(1);
    SLL.push('am');
    expect(SLL.size()).toBe(2);
    SLL.push('okay');
    expect(SLL.size()).toBe(3);

    expect(SLL.head).toBe('I');
    expect(SLL.tail).toBe('okay');
  });

  test('testing pop implementation', () => {
    SLL.pop();
    expect(SLL.size()).toBe(2);
    expect(SLL.tail).toBe('am');
    expect(SLL.pop()).toBe('am');
    expect(SLL.size()).toBe(1);
    expect(SLL.head).toBe('I');
    expect(SLL.tail).toBe('I');
    SLL.pop();
    expect(SLL.size()).toBe(0);
    expect(SLL.pop()).toBe(undefined);
  });

  test('testing shift implementation', () => {
    SLL.push('Hello');
    SLL.push('World');
    SLL.push('Again');

    expect(SLL.shift()).toBe('Hello');
    expect(SLL.head).toBe('World');
    expect(SLL.tail).toBe('Again');
    expect(SLL.size()).toBe(2);
    SLL.shift();
    expect(SLL.size()).toBe(1);
    expect(SLL.shift()).toBe('Again');

    expect(SLL.size()).toBe(0);
    expect(SLL.head).toBe(null);
    expect(SLL.tail).toBe(null);
  });
});