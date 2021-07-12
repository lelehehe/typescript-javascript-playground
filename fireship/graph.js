// https://www.youtube.com/watch?v=cWNEl4HE2OE
// DATA
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// The graph
const adjacencyList = new Map(); // 👈 good usage

// Add node
function addNode(airport) {
  adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

// Create the Graph
airports.forEach(addNode); 
routes.forEach((route) => addEdge(...route));

adjacencyList;

function bfs(start, end) {
  const q = [start];
  const visited = new Set();

  while (q.length) {
    const airport = q.shift();

    const destinations = adjacencyList.get(airport);

    for (let destination of destinations) {
      if (destination === end) { 
        return true;
      }

      if (!visited.has(destination)){
        q.push(destination);
        visited.add(destination);
      }
    };
  }

  return false;
}

function dfs(start, end, visited = new Set()) {
  visited.add(start);
  const destinations = adjacencyList.get(start);

  for (const destination of destinations) {
    if (destination === end) return true;

    if (!visited.has(destination)) {
      if(dfs(destination, end, visited)) return true;
    }
  }
  return false;
} 

bfs("PHX", "BKK"); /*?+*/
dfs("PHX", "BKK"); /*?+*/
