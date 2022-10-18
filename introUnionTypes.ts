/*TypeScript Union Types
Union types are used when a value can be more than a single type.

Such as when a property would be string or number.

Union | (OR)
Using the | we are saying our parameter is a string or number:
*/

function printStatusCode(code: string | number): void {
    console.log(`My satus code is ${code}`);
}

printStatusCode(404);
printStatusCode("200");


