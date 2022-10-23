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
var value = null;
value = 'hello';
console.log(value);
value = undefined;
console.log(value);
function printYardSize(house) {
    var _a;
    var yardSize = (_a = house.yard) === null || _a === void 0 ? void 0 : _a.sqft;
    var x = yardSize === undefined;
    var result = "".concat(x ? "No " : "", "Yard ").concat(x ? "" : ("is " + yardSize + " sqft"));
    console.log(result);
}
var home = {
    sqft: 500
};
printYardSize(home);
home.yard = { sqft: 24 };
printYardSize(home);
/**
 * Nullish Coalescence
 * Nullish Coalescence is another JavaScript feature that also works well with
 * TypeScript's null handling. It allows writing expressions that have a fallback
 * specifically when dealing with null or undefined. This is useful when other
 * falsy values can occur in the expression but are still valid. It can be used
 * with the ?? operator in an expression, similar to using the && operator.
 */
function printMileage(mileage) {
    console.log("Mileage: ".concat(mileage !== null && mileage !== void 0 ? mileage : "Not Available"));
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
function getValue() {
    return "Salom";
}
var value1 = getValue();
function getValue2() {
    return undefined;
}
var value2 = getValue2();
console.log("value1 length: " + value1.length);
/**
 * Array bounds handling
Even with strictNullChecks enabled, by default TypeScript will assume array
access will never return undefined (unless undefined is part of the array type).
The config noUncheckedIndexedAccess can be used to change this behavior.
 */
var array = [1, 2, 3, 4];
var first = array[0];
console.log(first);
