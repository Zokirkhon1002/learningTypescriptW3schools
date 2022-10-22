/*
TypeScript Utility Types
TypeScript comes with a large number of types that can help with
some common type manipulation, usually referred to as utility types.
This chapter covers the most popular utility types.
*/


/*
Partial
Partial changes all the properties in an object to optional
*/

interface Point1 {
    x: number;
    y: number;
}

let pointPart1: Partial<Point1> = {};
// Partial allows x and y to be optional
pointPart1.x = 10;
console.log(pointPart1);


/*
Required
Required changes all the properties in an object to be required.
*/
interface Car1 {
    make: string;
    model: string;
    mileage?: number;
}

let myCar1: Required<Car1> = {
    make: "Ford",
    model: "Focus",
    mileage: 12000 // Required forces mileage to defined
}

console.log(myCar1)


/*
Record
Record is a shortcut to defining an object type a specific key type
and value type
*/
const nameAgeMap1: Record<string, number> = {
    "Zokirkhon": 23,
    "Khan": 24
}

console.log(nameAgeMap1)



/*
Omit
Omit removes keys from an object type
*/
interface Person1 {
    name2: string;
    age: number;
    location?: string;
}

const zokirkhon2: Omit<Person1, 'age' | 'location'> = {
    name2: "Zokirkhon1002"
}
console.log(zokirkhon2);


/*
Pick
Pick removes all but the specified keys from an object type.
*/

// used above interface Person1

const zokirkhon3: Pick<Person1, 'name2'> = {
    name2: "Khan"
}

console.log(zokirkhon3);


/*
Exlude
Exlude removes types from a union;
*/

type Primitive1 = string | number | boolean;

const primitiveValue1: Exclude<Primitive1,string> = true;
// a string cannot be used here since 
// Exclude removed it from the type.

console.log(primitiveValue1);
console.log(typeof primitiveValue1);



/*
ReturnType
ReturnType extracts the return type of a function type.
*/

type PointGenerator1 = () => {x: number; y: number};
const point1: ReturnType<PointGenerator1> = {
    x: 10,
    y: 20
}

console.log(point1);



/*
Parameters
Parameters extracts the parameter types of a function type as an array.
*/
type PoinPrinter1 = (p:{x: number; y:number;}) => void;
const pointPrint1: Parameters<PoinPrinter1>[0] = {
    x:10,
    y: 20
}

console.log(pointPrint1)