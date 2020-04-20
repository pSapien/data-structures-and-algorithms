class Stack {
  constructor() {
    this.memory = {};
    this.length = 0;
  }

  push(value) {
    this.length++;
    this.memory[this.length] = value;
  }

  pop() {
    if(!this.length) return undefined;

    const popped = this.memory[this.length];
    delete this.memory[this.length];
    this.length--;
    return popped;
  }

  peek() {
    return this.memory[this.length];
  }
}

module.exports = Stack;