// @ts-check

const DoublyLinkedList = require('./doublyLinkedList');

describe('DoublyLinkedList spec', () => {
  
  test('Push', () => {
    const DLL = new DoublyLinkedList();

    DLL.push(1);

    expect(DLL.size()).toBe(1);

    expect(DLL.head.prev).toBe(null);
    expect(DLL.head.value).toBe(1);
    expect(DLL.head.next).toBe(null);

    expect(DLL.tail.prev).toBe(null);
    expect(DLL.tail.value).toBe(1);
    expect(DLL.tail.next).toBe(null);

    DLL.push(2);

    expect(DLL.size()).toBe(2);

    expect(DLL.head.next.prev.value).toBe(1);
    expect(DLL.head.next.value).toBe(2);
    expect(DLL.head.next.next).toBe(null);

    expect(DLL.tail.prev.value).toBe(1);
    expect(DLL.tail.value).toBe(2);
    expect(DLL.tail.next).toBe(null);
  });

  test('Pop', () => {
    const DLL = new DoublyLinkedList();

    expect(DLL.pop()).toBe(undefined);

    DLL.push(1);
    DLL.pop();

    expect(DLL.size()).toBe(0);
    expect(DLL.head).toBe(null);
    expect(DLL.tail).toBe(null);

    DLL.push(1);
    DLL.push(2);
    DLL.push(3);

    expect(DLL.pop().value).toBe(3);
    expect(DLL.size()).toBe(2);
    expect(DLL.head.value).toBe(1);
    expect(DLL.head.next.value).toBe(2);
    expect(DLL.tail.value).toBe(2);
    expect(DLL.tail.prev.value).toBe(1);
  });

  test('shift', () => {
    const DLL = new DoublyLinkedList();

    expect(DLL.shift()).toBe(undefined);

    DLL.push(1);
    DLL.push(2);
    DLL.push(3);

    expect(DLL.shift().value).toBe(1);
    expect(DLL.size()).toBe(2);
    expect(DLL.head.value).toBe(2);
    expect(DLL.head.prev).toBe(null);
    expect(DLL.head.next.value).toBe(3);
  });

  test('unshift', () => {
    const DLL = new DoublyLinkedList();

    DLL.unshift(3);
    DLL.unshift(2);
    DLL.unshift(1);

    expect(DLL.size()).toBe(3);
    expect(DLL.tail.value).toBe(3);

    expect(DLL.head.value).toBe(1);
    expect(DLL.head.next.value).toBe(2);
    expect(DLL.head.next.next.value).toBe(3);
  });

  test('get', () => {
    const DLL = new DoublyLinkedList();

    DLL.push(1);
    DLL.push(2);
    DLL.push(3);
    DLL.push(4);

    expect(DLL.get(0).value).toBe(1);
    expect(DLL.get(1).value).toBe(2);
    expect(DLL.get(2).value).toBe(3);
    expect(DLL.get(3).value).toBe(4);
  });

  test('set', () => {
    const DLL = new DoublyLinkedList();

    DLL.push(1);
    DLL.push(2);
    DLL.push(3);
    DLL.push(4);

    expect(DLL.set(1, 22)).toBe(true);
    expect(DLL.head.next.value).toBe(22);
    expect(DLL.set(3, 44)).toBe(true);
    expect(DLL.head.next.next.next.value).toBe(44);
  });

  test('insert', () => {
    const DLL = new DoublyLinkedList();

    DLL.push(1);
    DLL.push(2);
    DLL.push(3);
    DLL.push(4);

    expect(DLL.insert(1, 1.5)).toBe(true);
    expect(DLL.size()).toBe(5);
    expect(DLL.head.next.prev.value).toBe(1);
    expect(DLL.head.next.value).toBe(1.5);
    expect(DLL.head.next.next.value).toBe(2);
    expect(DLL.head.next.next.prev.value).toBe(1.5);
  });

  test('remove', () => {
    const DLL = new DoublyLinkedList();

    DLL.push(1);
    DLL.push(2);
    DLL.push(3);
    DLL.push(4);

    expect(DLL.remove(1)).toBe(true);
    expect(DLL.size()).toBe(3);
    expect(DLL.head.next.value).toBe(3);
    expect(DLL.head.next.prev.value).toBe(1);
  });
})
