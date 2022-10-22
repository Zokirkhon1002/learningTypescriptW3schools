/*
TypeScript Utility Types
TypeScript comes with a large number of types that can help with
some common type manipulation, usually referred to as utility types.
This chapter covers the most popular utility types.
*/
var pointPart1 = {};
// Partial allows x and y to be optional
pointPart1.x = 10;
console.log(pointPart1);
var myCar1 = {
    make: "Ford",
    model: "Focus",
    mileage: 12000 // Required forces mileage to defined
};
console.log(myCar1);
/*
Record
Record is a shortcut to defining an object type a specific key type
and value type
*/
var nameAgeMap1 = {
    "Zokirkhon": 23,
    "Khan": 24
};
console.log(nameAgeMap1);
var zokirkhon2 = {
    name2: "Zokirkhon1002"
};
console.log(zokirkhon2);
/*
Pick
Pick removes all but the specified keys from an object type.
*/
// used above interface Person1
var zokirkhon3 = {
    name2: "Khan"
};
console.log(zokirkhon3);
var primitiveValue1 = true;
// a string cannot be used here since 
// Exclude removed it from the type.
console.log(primitiveValue1);
console.log(typeof primitiveValue1);
var point1 = {
    x: 10,
    y: 20
};
console.log(point1);
var pointPrint1 = {
    x: 10,
    y: 20
};
console.log(pointPrint1);
