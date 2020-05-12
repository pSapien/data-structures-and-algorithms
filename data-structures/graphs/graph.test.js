const Graph = require('./graph');

describe('Graph sec', () => {
  test('addVertex', () => {
    const g = new Graph();
    g.addVertex("Kathmandu");
    expect(g.adjacencyList).toHaveProperty("Kathmandu");
  });

  test('addEdge', () => {
    const g = new Graph();

    g.addVertex("Kathmandu");
    g.addVertex("Chitwan");
    g.addVertex("Simara");

    g.addEdge("Kathmandu", "Chitwan");
    g.addEdge("Chitwan", "Simara");

    expect(g.adjacencyList["Kathmandu"]).toEqual(["Chitwan"]);
    expect(g.adjacencyList["Chitwan"]).toEqual(["Kathmandu", "Simara"]);
    expect(g.adjacencyList["Simara"]).toEqual(["Chitwan"]);
  });

  test('removeVertex', () => {
    const g = new Graph();

    g.addVertex("Kathmandu");
    g.addVertex("Chitwan");
    g.addVertex("Simara");

    g.addEdge("Kathmandu", "Chitwan");
    g.addEdge("Chitwan", "Simara");
    g.addEdge("Simara", "Kathmandu");

    expect(g.adjacencyList).toHaveProperty("Kathmandu");
    g.removeVertex("Kathmandu");
    expect(g.adjacencyList).not.toHaveProperty("Kathmandu");
    expect(g.adjacencyList["Simara"]).toEqual(["Chitwan"]);
    expect(g.adjacencyList["Chitwan"]).toEqual(["Simara"]);
  });

  test('removeEdge', () => {
    const g = new Graph();
    g.addVertex("Kathmandu");
    g.addVertex("Chitwan");
    g.addVertex("Simara");
    g.addEdge("Kathmandu", "Chitwan");
    g.addEdge("Chitwan", "Simara");

    expect(g.adjacencyList["Chitwan"]).toEqual(["Kathmandu", "Simara"]);
    expect(g.adjacencyList["Simara"]).toEqual(["Chitwan"]);

    g.removeEdge("Chitwan", "Simara");
    expect(g.adjacencyList["Chitwan"]).toEqual(["Kathmandu"]);
    expect(g.adjacencyList["Simara"]).toEqual([]);
  });
});
