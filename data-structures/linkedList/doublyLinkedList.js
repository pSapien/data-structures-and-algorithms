// @ts-check

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * push value to the end of the List 
   */
  push(value) {
    const newNode = new Node(value);

    if (this._isEmpty()) {
      /** when the list is empty, both head and tail should point at the same node */
      this._head = newNode;
      this._tail = newNode;
    } else {
      /** attach the newNode to the end of the list */

      /** point the next property of the tail to the newNode */
      this._tail.next = newNode;

      /** point the previous property of the newNode to the oldTail */
      newNode.prev = this._tail;

      /** update the tail */
      this._tail = newNode;
    }

    this._length++;
    return this;
  }

  _isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this._length;
  }

  get head() {
    if (this._isEmpty()) return this._head;
    return this._head;
  }

  get tail() {
    if (this._isEmpty()) return this._tail;
    return this._tail;
  }
}

module.exports = DoublyLinkedList;