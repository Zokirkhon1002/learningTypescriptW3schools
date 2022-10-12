// TypeScript Object Types
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2022
};
console.log('car1 - ', car);
// Type Inference
var car2 = {
    type: "Toyota"
};
car2.type = "Ford";
// car2.type = 2; //Type 'number' is not assignable to type 'string'.
console.log('car2 - ', car2);
// Optional Properties
// const car3: {type: string, mileage: number} = {
//     // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//     type: "Toyota",
// } 
// car.mileage = 2000;
var car3 = {
    type: "Toyota"
};
car3.mileage = 2000;
// Index Signature
// Index signature can be used for objects without a defined list of proporties.
var nameAgeMap = {};
nameAgeMap.JackAge = 25;
// nameAgeMap.MarkAge = "fifty" // Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);
