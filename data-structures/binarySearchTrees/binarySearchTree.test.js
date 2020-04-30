const BinarySearchTree = require('./binarySearchTree');

/**
 *               10
 *          5         13
 *      2      7    11    16
 */

const nodes = [10, 13, 5, 2, 7, 11, 16];
const nodesBFS = [10, 5, 13, 2, 7, 11, 16]; 
const nodesPreOderDFS = [10, 5, 2, 7, 13, 11, 16];
const nodesPostOrderDFS = [2, 7, 5, 11, 16, 13, 10];
const nodesInOrderDFS = [2, 5, 7, 10, 11, 13, 16];

function createBST() {
  const BST = new BinarySearchTree();
  nodes.forEach(node => BST.insert(node));
  return BST;
}

/**
 *                10
 *            8        20
 *         3        15
 *            6
 */

const anotherNodes = [10, 20, 8, 3, 15, 6];
const anotherNodesBFS = [10, 8, 20, 3, 15, 6];
const anotherNodesPreOrderDFS = [10, 8, 3, 6, 20, 15];
const anotherNodesPostOrderDFS = [6, 3, 8, 15, 20, 10];
const anotherNodesInOrderDFS = [6, 3, 8, 10, 20, 15];

function createAnotherBST() {
  const BST = new BinarySearchTree();
  anotherNodes.forEach(node => BST.insert(node));
  return BST;
}

describe('BinarySearchTree spec', () => {
  test('insert', () => {
    const BST = createBST();
    expect(BST.root.value).toBe(10);

    // checking left
    expect(BST.root.left.value).toBe(5);
    expect(BST.root.left.left.value).toBe(2);
    expect(BST.root.left.right.value).toBe(7);

    // checking right
    expect(BST.root.right.value).toBe(13);
    expect(BST.root.right.right.value).toBe(16);
    expect(BST.root.right.left.value).toBe(11);
  });

  test('contains', () => {
    const BST = new BinarySearchTree();
    expect(BST.contains(2)).toBe(undefined);

    nodes.forEach(n => BST.insert(n));
    expect(BST.contains(2)).toBe(true);
    expect(BST.contains(15)).toBe(false);
    expect(BST.contains(100)).toBe(false);
  });

  test('bfs - Breadth First Search', () => {
    expect(createBST().BFS()).toEqual(nodesBFS);
    expect(createAnotherBST().BFS()).toEqual(anotherNodesBFS);
  });

  test('dfs - Depth First Search, Preorder', () => {
    expect(createBST().DFSPreorder()).toEqual(nodesPreOderDFS);
    expect(createAnotherBST().DFSPreorder()).toEqual(anotherNodesPreOrderDFS);
  });

  test('dfs - Depth First Search, Postorder', () => {
    expect(createBST().DFSPostorder()).toEqual(nodesPostOrderDFS);
    expect(createAnotherBST().DFSPostorder()).toEqual(anotherNodesPostOrderDFS);
  });

  test('dfs - Depth First Search, Inorder', () => {
    expect(createBST().DFSInorder()).toEqual(nodesInOrderDFS);
    // expect(createAnotherBST().DFSInorder()).toEqual(anotherNodesInOrderDFS);
  });
})
