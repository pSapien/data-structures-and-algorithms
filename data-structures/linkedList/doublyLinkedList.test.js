// @ts-check

const DoublyLinkedList = require('./doublyLinkedList');

describe('DoublyLinkedList spec', () => {
  
  test('Push implementation', () => {
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

  test('Pop implementation', () => {
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

  test('shift implementation', () => {
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
})
