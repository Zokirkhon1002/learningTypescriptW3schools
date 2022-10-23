/*
TpyeScript Keyof
keyof is a keyword in TypeScript which is used to extract 
the key type from an object type;

keyof with explicit keys
when used on an object type with explicit keys, keyof 
creates a union type with those keys.
*/

interface Person1 {
    name: string;
    age: number;
}

// `keyof Person1` here creates a union type of 'name' and
// 'age', other strings will not be allowed 
function printPerson1Props(person: Person1, prop: keyof Person1): void {
    console.log(`Printing person prop ${prop}: "${person[prop]}"`);
}

let person = {
    name: "Max",
    age: 27
}

printPerson1Props(person,"name");


/*
keyof with index signatures
keyof can also be used with index signatures to extract the index type
*/

type StrinMap = {[key: string]:unknown};

function createStringPair(prop:keyof StrinMap, value: string): StrinMap {
    return {[prop]: value};
}

console.log(createStringPair('name','Zokirkhon'))



