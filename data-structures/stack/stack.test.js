const Stack = require('./stack');

describe('Stack spec', () => {  
  const stack = new Stack();

  test('push', () => {
    stack.push('1');
    expect(stack.size()).toBe(1);

    stack.push('2');
    expect(stack.size()).toBe(2);

    stack.push(['hello word']);
    stack.push({ a: 1, b: 1 });
    expect(stack.size()).toBe(4);
  });

  test('pop', () => {
    expect(stack.pop()).toEqual({ a: 1, b: 1 });
    expect(stack.size()).toBe(3);
    stack.pop(); 
    expect(stack.size()).toBe(2);
    stack.pop(); 
    expect(stack.size()).toBe(1);
    stack.pop();
    expect(stack.size()).toBe(0);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.pop()).toBe(undefined);
    expect(stack.size()).toBe(0);
  });

  test('peek', () => {
    expect(stack.peek()).toBe(undefined);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(stack.peek()).toBe(4);
    stack.pop();
    expect(stack.peek()).toBe(3);
  });
});