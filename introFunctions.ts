/*
TypeScript Functions
TypeScript has a specific syntax for typing function parameters and return values.
Return Type
The type of the value returned by the function can be explicitly defined.
*/

// the `:number` here specifies that this function returns a number;
function getTime(): number {
    return new Date().getTime();
}

console.log(getTime());


/*
Void Return Type
The type void can be used to indicate a function doesn't return any value.
*/
function printHello(): void {
    console.log("hello!");
}
printHello();



/*
Parameters
Function parameters are typed with a similar syntax as variable declarations.
*/
function multiply(a: number, b: number): number {
    return a * b;
}

console.log(multiply(2, 4))




/*
Optional Parametrs
By default TypeScript will assume all parametrs are required, but they can be explicity marked as optional.
*/

// the `?` operator here marks parametr `c` as optional
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}

console.log(add(2, 5, 5))


/*
Default Parameters
For parameters with default values, the default value goes after the type annotation:
*/
function power(value: number, exponent: number = 10) {
    return value ** exponent;
}

console.log(power(2))


/*
Named Parameters
Typing named parameters follows the same pattern as typing normal parameters.
*/

function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
}

console.log(divide({ dividend: 10, divisor: 2 }));



/*
Rest Parameters
Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
*/
function add2(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((a, c) => a += c, 0);
}

console.log(add2(10, 10, 10, 10, 10));


/*
Type Alias
Function types can be specified separately from functions with type aliases.

These types are written similarly to arrow functions
*/
type Negate = (value: number) => number;

// in this function, the parameter `value` 
// automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

const { log: print2 } = console;
print2(negateFunction(10));