// @ts-check

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * push value to the end of the List 
   */
  push(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      /** if the list is empty, then the head and tail should point to the same node */

      /** add the newNode to the head of the list */
      this.head = newNode;

      /** point the tail to the newNode */
      this.tail = this.head;
    } else {

      /** attach the newNode to the end of the list */
      this.tail.next = newNode;

      /** update the tail to the newNode */
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * remove the last value of the List.
   */
  pop() {
    if (this.isEmpty()) return undefined;

    let removedNode = null;
    
    if (this.length === 1) {
      removedNode = this.head;
      this.head = this.tail = null
    } else {
      /** we just need to find the secondToLastNode */
      const secondToLastNode = this.get(this.length - 2);
      removedNode = secondToLastNode.next;

      /** dettach the last node */
      secondToLastNode.next = null;

      /** update the tail */
      this.tail = secondToLastNode;
    }
    
    this.length--;
    return removedNode.value;
  }

  /**w
   * remove the first value of the list
   */
  shift() {
    if (this.isEmpty()) return undefined;

    /** keeping track of the old head */
    const oldHead = this.head;

    /** assign the new head to next value of the old head */
    this.head = oldHead.next;

    this.length--;

    /** if the list is empty, remove the value of the tail */
    if (this.isEmpty()) this.tail = null;

    return oldHead.value;
  }

  /**
   * add the value from the start
   */
  unshift(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      /** if the list is empty, then both of the head and tail has the same node */
      this.head = newNode;
      this.tail = this.head;
    } else {
      /** attach old head to the newNode */
      newNode.next = this.head;

      /** replace old head with the newNode */
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  /**
   * get the value at the specified index
   */
  get(index) {
    if (index < 0 || index > this.length) return undefined;

    /** keep track of the current node in the list */
    let current = this.head;

    for (let i = 0; i < this.length; i++) {
      if (index === i) return current;

      /** set the new current to the next node of the current */
      current = current.next;
    }
  }

  /**
   * set the value at the specified index
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
   * insert the value at the specified index
   */
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return Boolean(this.push(value));
    if (index === 0) return Boolean(this.unshift(value));

    /** now, the index lies between the first and the last node */
    const newNode = new Node(value);

    /** keep track of previous and next node before insertion */
    const previous = this.get(index - 1);
    const next = previous.next;

    /** attach the newNode on the previous */
    previous.next = newNode;

    /** attach the next node to the newNode. VOILA! */
    newNode.next = next;

    this.length++;
    return true;
  }

  /**
   * remove value at the specified index
   */
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return Boolean(this.shift());
    if (index === this.length - 1) return Boolean(this.pop());

    /** now, the index lies between the first and the last node */

    /** keep track of previous, current and next node before removal w.r.t index */
    const previous = this.get(index - 1);
    const removed = previous.next;
    const next = removed.next;

    /** just add the next node to the previous node */
    previous.next = next;

    this.length--;
    return true;
  }


  reverse() {
    if (this.isEmpty()) return undefined;
    if (this.length === 1) return this;

    /** swap the head and the tail **/
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;

    let prev = null, next;

    while(curr !== null) {
      next = curr.next;
      
      /**
       * dettach the head from the part of the list
       * attach the prev part of the list to the curr.
       */
      curr.next = prev;
      prev = curr;

      curr = next;
    }

    return this;
  } 
  
  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.length;
  }
}

module.exports = SinglyLinkedList;