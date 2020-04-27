// @ts-check

const DoublyLinkedList = require('./doublyLinkedList');

describe('DoublyLinkedList spec', () => {
  const DLL = new DoublyLinkedList();

  test('Push implementation', () => {
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
})
