class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if(this._isEmpty()) {
      /** if the list is empty, then the head and tail should point to the same node */

      /** add the newNode to the head of the list */
      this._head = newNode;

      /** point the tail to the newNode */
      this._tail = newNode;
    } else {

      /** attach the newNode to the end of the list */
      this._tail.next = newNode;

      /** update the tail to the newNode */
      this._tail = newNode;
    }
    this._length++;
    return this;
  }

  pop() {
    if (this._isEmpty()) return undefined;

    this._length--;

    if(this._head === this._tail) {
      const value = this._head;
      this._head = this._tail = null

      return value
    }

    /** keep track of the current value to be popped off */
    let current = this._head;

    /** keep track of second to last element */
    let newTail = null;

    /** 
     * loop through the list to find the tail
     * since the tail has no next value,
     * it only loops till the second to last element.
    */
    while(current.next) {
      newTail = current;
      current = current.next;
    }

    /** since previous.next gives us the end of the list. remove it. SAD */
    newTail.next = null;

    /** newTail becomes the tail. HURRAY */
    this._tail = newTail;

    return current.value;
  }

  shift() {
    if(this._isEmpty()) return undefined;

    /** keeping track of the old head */
    const oldHead = this._head;

    /** assign the new head to next value of the old head */
    this._head = oldHead.next;
 
    this._length--;

    /** if the list is empty, remove the value of the tail */
    if(this._isEmpty()) this._tail = null;

    return oldHead.value;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (this._isEmpty()) {
      /** if the list is empty, then both of the head and tail has the same node */
      this._head = newNode;
      this._tail = newNode;
    } else {
      /** attach old head to the newNode */
      newNode.next = this._head;

      /** replace old head with the newNode */
      this._head = newNode;
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
    if(this._isEmpty()) return this._head;
    return this._head.value;
  }

  get tail() {
    if(this._isEmpty()) return this._tail;
    return this._tail.value;
  }
}

module.exports = SinglyLinkedList;