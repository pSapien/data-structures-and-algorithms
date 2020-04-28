class Stack {
  constructor() {
    this.memory = {};
    this.length = 0;
  }

  push(value) {
    this.memory[this.length++] = value;
  }

  pop() {
    const popped = this.memory[this.length - 1];
    delete this.memory[this.length - 1];
    if (this.length) this.length--;
    return popped;
  }

  size() {
    return this.length;
  }

  peek() {
    return this.memory[this.length - 1];
  }
}

module.exports = Stack;