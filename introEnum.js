var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
var currentDirection = CardinalDirections.North;
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
console.log("===================================");
// Numeric Enums - Initialized
// You can set the value of the first numeric enum 
// and have it auto increment from that:
var CardinalDirections1;
(function (CardinalDirections1) {
    CardinalDirections1[CardinalDirections1["North"] = 1] = "North";
    CardinalDirections1[CardinalDirections1["East"] = 2] = "East";
    CardinalDirections1[CardinalDirections1["South"] = 3] = "South";
    CardinalDirections1[CardinalDirections1["West"] = 4] = "West";
})(CardinalDirections1 || (CardinalDirections1 = {}));
;
var currentDirection1 = CardinalDirections1.North;
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
console.log("===================================");
// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. 
// Then the values will not incremented automatically:
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
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
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2["North"] = "North";
    CardinalDirections2["East"] = "East";
    CardinalDirections2["South"] = "South";
    CardinalDirections2["West"] = "West";
})(CardinalDirections2 || (CardinalDirections2 = {}));
// logs "North"
console.log(CardinalDirections2.North);
// logs "East"
console.log(CardinalDirections2.East);
// logs "South"
console.log(CardinalDirections2.South);
// logs "West"
console.log(CardinalDirections2.West);
