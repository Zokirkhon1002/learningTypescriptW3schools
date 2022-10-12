// @ts-nocheck
"use strict";
// When creating a variable, there are two main ways TypeScript assigns a type:
// Explicit
// Implicit
// 1. Explicit
let name1 = "Zokirkhon";
// 2. Imlicit
let name2 = "Zokirkhon";
// xato
// name1 = 33
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing... 
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);
// any is a type that disables type checking and effectively allows all types to be used.
// Setting any to the special type any disables type checking:
let temp1 = true;
temp1 = 'string';
Math.round(temp1);
// Type: unknown
// unknown is a similar, but safer alternative to any.
// TypeScript will prevent unknown types from being used, as shown in the below example:
let temp2 = 1;
temp2 = "string";
// temp2 = {
//     runANExistentMethod: () => {
//         console.log("I think therefore I am")
//     }
// }
if (typeof temp2 === 'object' && temp2 !== null) {
    temp2.runANonExistentMethod();
}
