const SinglyLinkedList = require('./singlyLinkedList');

describe('SinglyLinkedList spec', () => {
  const SLL = new SinglyLinkedList();

  test('push', () => {
    SLL.push('I');
  
    expect(SLL.head.value).toBe('I');
    expect(SLL.tail.value).toBe('I');
    expect(SLL.size()).toBe(1);

    SLL.push('am');
    expect(SLL.size()).toBe(2);

    SLL.push('okay');
    expect(SLL.size()).toBe(3);
    expect(SLL.head.value).toBe('I');
    expect(SLL.tail.value).toBe('okay');
  });

  test('pop', () => {
    SLL.pop();
    expect(SLL.size()).toBe(2);
    expect(SLL.tail.value).toBe('am');
    expect(SLL.pop()).toBe('am');
    expect(SLL.size()).toBe(1);
    expect(SLL.head.value).toBe('I');
    expect(SLL.tail.value).toBe('I');
    SLL.pop();
    expect(SLL.size()).toBe(0);
    expect(SLL.pop()).toBe(undefined);
  });

  test('shift', () => {
    SLL.push('Hello');
    SLL.push('World');
    SLL.push('Again');

    expect(SLL.shift()).toBe('Hello');
    expect(SLL.head.value).toBe('World');
    expect(SLL.tail.value).toBe('Again');
    expect(SLL.size()).toBe(2);
    SLL.shift();
    expect(SLL.size()).toBe(1);
    expect(SLL.shift()).toBe('Again');

    expect(SLL.size()).toBe(0);
    expect(SLL.head).toBe(null);
    expect(SLL.tail).toBe(null);
  });

  test('unshift', () => {
    SLL.unshift('Hello');
    expect(SLL.size()).toBe(1);
    expect(SLL.head.value).toBe('Hello');
    expect(SLL.tail.value).toBe('Hello');
  
    SLL.unshift('World');
    expect(SLL.size()).toBe(2);
    expect(SLL.head.value).toBe('World');
    expect(SLL.tail.value).toBe('Hello');
  });

  test('get', () => {
    expect(SLL.get(0).value).toBe('World');
    expect(SLL.get(1).value).toBe('Hello');
    expect(SLL.get(1000)).toBe(undefined);
  });

  test('set', () => {
    SLL.pop();
    SLL.pop();

    expect(SLL.set(0, 'Hello')).toBe(false);
    SLL.push('Hello');
    expect(SLL.get(0).value).toBe('Hello');

    SLL.push('World');
    SLL.push('Again'); 

    SLL.set(2, 'Nepal');
    expect(SLL.get(2).value).toBe('Nepal');
    expect(SLL.set(100, 'Lol')).toBe(false);
  });

  test('insert', () => {
    const SLL = new SinglyLinkedList();
    SLL.push(10);
    SLL.push(30);
    SLL.push(40);
    expect(SLL.insert(1, 20)).toBe(true);
    expect(SLL.insert(4, 50)).toBe(true);
    expect(SLL.get(0).value).toBe(10);
    expect(SLL.get(1).value).toBe(20);
    expect(SLL.get(2).value).toBe(30);
    expect(SLL.get(3).value).toBe(40);
    expect(SLL.get(4).value).toBe(50);
    expect(SLL.size()).toBe(5);
  });

  test('remove', () => {
    const SLL = new SinglyLinkedList();
    SLL.push(10);
    SLL.push(30);
    SLL.push(40);
    expect(SLL.remove(1)).toBe(true);
    expect(SLL.size()).toBe(2);
    expect(SLL.get(1).value).toBe(40);
  });

  test('reverse', () => {
    const SLL = new SinglyLinkedList();
    SLL.push(10);
    SLL.push(20);
    SLL.push(30);

    SLL.reverse();

    expect(SLL.get(0).value).toBe(30);
    expect(SLL.get(1).value).toBe(20);
    expect(SLL.get(2).value).toBe(10);
  })
});