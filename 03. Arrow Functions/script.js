"use strict";

// Function Declaration
function calcAgeDeclaration(birthYear) {
    return 2037 - birthYear;
}

const ageDeclaration = calcAgeDeclaration(1988);
console.log("Function Declaration ", ageDeclaration);

// Function Expression
const calcAgeExpression = function (birthYear) {
    return 2037 - birthYear;
};

const ageExpression = calcAgeExpression(1988);
console.log("Function Expression ", ageExpression);

// Arrow Function
// Simple syntax
/* NOTE: In simple form of arrow function we dont need to return the value. Arrow function implicitly returns the value.
 */
const calcAgeArrow = (birthYear) => 2037 - birthYear;

const ageArrow = calcAgeArrow(1988);
console.log("Arrow Function", ageArrow);

// Arrow function
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    return `${firstName} will retire in ${retirement} years`;
};

console.log(yearsUntilRetirement(1988, "Ephraim"));
console.log(yearsUntilRetirement(1980, "Bob"));
