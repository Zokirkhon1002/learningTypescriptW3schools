/*
TpyeScript Keyof
keyof is a keyword in TypeScript which is used to extract
the key type from an object type;

keyof with explicit keys
when used on an object type with explicit keys, keyof
creates a union type with those keys.
*/
// `keyof Person1` here creates a union type of 'name' and
// 'age', other strings will not be allowed 
function printPerson1Props(person, prop) {
    console.log("Printing person prop ".concat(prop, ": \"").concat(person[prop], "\""));
}
var person = {
    name: "Max",
    age: 27
};
printPerson1Props(person, "name");
function createStringPair(prop, value) {
    var _a;
    return _a = {}, _a[prop] = value, _a;
}
console.log(createStringPair('name', 'Zokirkhon'));
