// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, "Coding is good"];
// // define our tuple
// let ourTuple2: [number, boolean, string];
// // initialized incorrectly which throws an error
// ourTuple2 = [false, 'Coding God was mistaken', 5];
// // Type 'boolean' is not assignable to type 'number'.
// // Type 'string' is not assignable to type 'boolean'.
// // Type 'number' is not assignable to type 'string'.
// Readonly Tuple
// A good practice is to make your tuple readonly.
// You see the new valueTuples only have strongly defined types for the initial values:
var ourReadonlyTuple = [5, true, "Coding is good"];
// Named Tuples
// Named tuples allow us to provide context for our values at each index.
var graph = [55.2, 41.3];
console.log(graph);
var x = graph[0], y = graph[1];
console.log(x, y);
