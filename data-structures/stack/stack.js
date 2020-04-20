class Stack {
  constructor() {
    this._memory = {};
    this._length = 0;
  }

  push(value) {
    this._memory[this._length++] = value;
  }

  pop() {
    const popped = this._memory[this._length - 1];
    delete this._memory[this._length - 1];
    if (this._length) this._length--;
    return popped;
  }

  size() {
    return this._length;
  }

  peek() {
    return this._memory[this._length - 1];
  }
}

module.exports = Stack;