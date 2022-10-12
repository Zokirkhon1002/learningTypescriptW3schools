let tempArr: string[] = [];

tempArr.push("Khan");
// tempArr.push(123) //introArr.ts:4:14 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.


// The readonly keyword can prevent arrays from being changed.
// Readonly

const names: readonly string[] = ["Zokirkhon"];
// names.push("Ibrokhim") // Property 'push' does not exist on type 'readonly string[]'.


// Type Inference
// TypeScript can infer the type of an array if it has values.

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error

