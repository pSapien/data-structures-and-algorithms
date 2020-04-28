const BinarySearchTree = require('./binarySearchTree');

/**
 *               10
 *          5         13
 *      2      7    11    16
 */

const nodes = [10, 13, 5, 2, 7, 11, 16];

describe('BinarySearchTree spec', () => {
  test('insert', () => {
    const BST = new BinarySearchTree();
    nodes.forEach(n => BST.insert(n));

    expect(BST.root.value).toBe(10);

    // checking left
    expect(BST.root.left.value).toBe(5);
    expect(BST.root.left.left.value).toBe(2);
    expect(BST.root.left.right.value).toBe(7);

    // checking right
    expect(BST.root.right.value).toBe(13);
    expect(BST.root.right.right.value).toBe(16);
    expect(BST.root.right.left.value).toBe(11);
  })
})
