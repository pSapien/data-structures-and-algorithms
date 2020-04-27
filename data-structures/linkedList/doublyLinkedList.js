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

  /**
   * remove the last value of the list
   */
  pop() {
    if (this._isEmpty()) return undefined;
    const oldTail = this._tail;

    if (this.size() === 1) {
      this._head = null;
      this._tail = null;
    } else {
      /** keep the track the prev node of the oldTail */
      const newTail = oldTail.prev;

      /** deattach the last item from the list */
      oldTail.prev = null;
      newTail.next = null;

      /** udpate the newTail */
      this._tail = newTail;
    }

    this._length--;
    return oldTail;
  }

  /**
   * remove the first value of the list
   */
  shift() {
    if (this._isEmpty()) return undefined;
    if (this.size() == 1) return this.pop();

    /** keep track of the value to be removed from the head */
    const oldHead = this._head;

    /** point the new head to the next value of the list */
    this._head = this._head.next;

    /** dettach the old head from the new head */
    this._head.prev = null;

    /** dettach the new head from the old head */
    oldHead.next = null;

    this._length--;
    return oldHead;
  }

  /**
   * pushes value from the start of the list
   */
  unshift(value) {
    if (this._isEmpty()) return this.push(value);

    const newNode = new Node(value);

    /** attach the new node to the old head */
    this._head.prev = newNode;
    newNode.next = this._head;

    /** update the head with the new node */
    this._head = newNode;

    this._length++;
    return this;
  }

  /**
   * get value specified at specified index
   */
  get(index) {
    if (this._isEmpty() || index < 0 || index >= this._length) return undefined;

    const mid = this._length / 2;

    /** if the index lies to the left side from the mid */
    if (index <= mid) {
      let curr = this._head;

      /** start the loop from first to the mid */
      for (let i = 0; i <= mid; i++) {
        if (i === index) return curr;
        curr = curr.next;
      }
    } else {
      /** if the index lies to the right side from the mid */
      let curr = this._tail;

      /** start the loop from the end to the next of the mid */
      for (let i = this._length - 1; i > mid; i--) {
        if (i === index) return curr;
        curr = curr.prev;
      }
    }
  }

  /**
   * set value at the specified index
   */
  set(index, value) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }

    return false;
  }

  /**
   * insert value at the specified index
   */
  insert(index, value) {
    if (index < 0 || index >= this._length) return undefined;
    if (index === 0) return Boolean(this.unshift(value));
    if (index === this._length - 1) return Boolean(this.push(value));

    const newNode = new Node(value);

    /** represents the right part of the list from the specified index */
    const rightNode = this.get(index);

    /** represents the left part of the list from the specified index */
    const leftNode = rightNode.prev;

    /** attach right part of the list to the right side of the newNode */
    newNode.next = rightNode;

    /** attach the left part of the list to the left side of the newNode */
    newNode.prev = rightNode.prev;

    /** attach the newNode to left part of the right side of the rightNode */
    rightNode.prev = newNode;

    /** attach the newNode to right part of the leftNode */
    leftNode.next = newNode;

    this._length++;
    return true;
  }

  /**
   * remove value at the specified index
   */
  remove(index) {
    if (index < 0 || index >= this._length) return undefined;
    if (index === 0) return Boolean(this.shift());
    if (index === this._length - 1) return Boolean(this.pop());

    const foundNode = this.get(index);

    /** represents the right part of the list from the specified index */
    const rightNode = foundNode.next;

    /** represents the left part of the list from the specified index */
    const leftNode = foundNode.prev;

    /** attach the right part of the list with the left */
    leftNode.next = rightNode;

    /** attach the left part of the list with the right */
    rightNode.prev = leftNode;

    this._length--;
    return true;
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