/*
TypeScript Null & Undefined
TypeScript has a powerfull system to deal with null or undefined
values.

By default null and undefined handling is disabled, 
and can be enabled by setting strictNullChecks to true
The rest of this page applies for when strictNullChecks is enabled.

Types
null and undefined are primitive tpyes and can be used like other types, 
such as strin.
*/

let value: string | undefined | null = null;
value = 'hello';
console.log(value);
value = undefined;
console.log(value);


/*
When strictNullChecks is enabled, TypeScript requires value to be set unless
undefined is explicitly added to the type.

Optional Chaining
Optional Chaining is JavaScript feature that works well with TypeScript's
null handling. It allows accessing proprties on an object, that may or may not
exist, with a compact syntax. It can be used with the ?. operator when accessing proporties.
*/

interface House {
    sqft: number;
    yard?: {
        sqft: number;
    };
}

function printYardSize(house: House): void {
    const yardSize = house.yard?.sqft;
    let x = yardSize === undefined;
    let result = `${x ? "No " : ""}Yard ${x ? "":("is " + yardSize + " sqft")}`;
    console.log(result)
}

let home: House = {
    sqft: 500,
}
printYardSize(home)

home.yard = { sqft: 24 };

printYardSize(home)


/**
 * Nullish Coalescence
 * Nullish Coalescence is another JavaScript feature that also works well with
 * TypeScript's null handling. It allows writing expressions that have a fallback
 * specifically when dealing with null or undefined. This is useful when other 
 * falsy values can occur in the expression but are still valid. It can be used
 * with the ?? operator in an expression, similar to using the && operator.
 */

function printMileage(mileage: number | null | undefined): void {
    console.log(`Mileage: ${mileage ?? "Not Available"}`);
}

printMileage(null);
printMileage(undefined);
printMileage(0);




/**
 * Null Assertion
 * TypeScript's inference system isn't perfect, there are times when it makes
 * sense to ignore a value's possibilty of being null or undefined. 
 * An easy way to do this is to use casting, but TypeScript also provide the !
 * operator as a convenient shortcut.
 */

function getValue(): string | undefined {
    return "Salom";
}

let value1 = getValue();

function getValue2(): string | undefined {
    return undefined;
}
let value2 = getValue2();
console.log("value1 length: " + value1!.length)



/**
 * Array bounds handling
Even with strictNullChecks enabled, by default TypeScript will assume array 
access will never return undefined (unless undefined is part of the array type).
The config noUncheckedIndexedAccess can be used to change this behavior.
 */

let array: number[] = [1,2,3,4];
let first = array[0];
console.log(first);