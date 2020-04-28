class Queue {
  constructor() {
    this.memory = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.memory[this.tail++] = value;
  }

  dequeue() {
    const value = this.memory[this.head];
    delete this.memory[this.head];
    if (this.head < this.tail) this.head++;
    return value;
  }

  size() {
    return this.tail - this.head;
  }

  peek() {
    return this.memory[this.head];
  }
}

module.exports = Queue;
