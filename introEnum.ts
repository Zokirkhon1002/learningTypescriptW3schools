enum CardinalDirections { North, East, South, West };


let currentDirection = CardinalDirections.North;

// North is the first value so it logs '0';
console.log(currentDirection);

// changing value in order to see results;
currentDirection = CardinalDirections.East;

// East is the second value so it logs '1';
console.log(currentDirection);

// changing value in order to see results;
currentDirection = CardinalDirections.South;

// South is the third value so it logs '2';
console.log(currentDirection);

// changing value in order to see results;
currentDirection = CardinalDirections.West;

// West is the fourth value so it logs '3';
console.log(currentDirection);



// Seperating them
console.log("===================================")




// Numeric Enums - Initialized
// You can set the value of the first numeric enum 
// and have it auto increment from that:

enum CardinalDirections1 { North = 1, East, South, West };

let currentDirection1 = CardinalDirections1.North;

// logs 1 since we initialized 
// the first value to something other than '0'
console.log(currentDirection1);

// changing value in order to see results;
currentDirection1 = CardinalDirections1.East;

// East is the second value so it logs '2';
console.log(currentDirection1);

// changing value in order to see results;
currentDirection1 = CardinalDirections1.South;

// South is the third value so it logs '3';
console.log(currentDirection1);

// changing value in order to see results;
currentDirection1 = CardinalDirections1.West;

// logs 4 as it continued on from 
// the initial '1' value
console.log(currentDirection1);




// Seperating them
console.log("===================================")


// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. 
// Then the values will not incremented automatically:
enum StatusCodes { NotFound = 404, Success = 200, Accepted = 202, BadRequest = 400 }

// logs 404
console.log(StatusCodes.NotFound);

// logs 200
console.log(StatusCodes.Success);

// logs 202
console.log(StatusCodes.Accepted);

// logs 400
console.log(StatusCodes.BadRequest);




// String Enums
// String Enums
// String Enums
// Enums can also contain strings. 
// This is more common than numeric enums, 
// because of their readability and intent.

enum CardinalDirections2 {
    North = "North",
    East = "East",
    South = "South",
    West = "West"
}

// logs "North"
console.log(CardinalDirections2.North);

// logs "East"
console.log(CardinalDirections2.East);

// logs "South"
console.log(CardinalDirections2.South);

// logs "West"
console.log(CardinalDirections2.West);