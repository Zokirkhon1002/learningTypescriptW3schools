/*
Type Casting
There are times when working with types 
where it's necessary to override the type of a variable, 
such as when incorrect types are provided by a library.

Casting is the process of overriding a type.

Casting with as
A straightforward way to cast a variable is using 
the as keyword, which will directly change the 
type of the given variable.
*/

let x1: unknown = "hello";

console.log((x1 as string).length);


/*
Casting with <>
Using <> works the same as casting with as.
*/

let x2: unknown = "hello2";
console.log((<string>x2).length);
/*
This type of casting will not work with TSX, 
such as when working on React files.
*/


/*
Force casting
To override type errors that TypeScript may throw when casting, 
first cast to unknown, then to the target type.
*/

// let x3 = "hello23";
// console.log(((x3 as unknown) as number).length) 
// Property 'length' does not exist on type 'number'.ts(2339)