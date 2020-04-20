class Queue {
  constructor() {
    this._memory = {};
    this._head = 0;
    this._tail = 0;
  }

  enqueue(value) {
    this._memory[this._tail++] = value;
  }

  dequeue() {
    const value = this._memory[this._head];
    delete this._memory[this.head];
    if (this._head < this._tail) this._head++;
    return value;
  }

  size() {
    return this._tail - this._head;
  }

  peek() {
    return this._memory[this._head];
  }
}

module.exports = Queue;
