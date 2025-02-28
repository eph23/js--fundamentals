"use strict";

/* NOTE: Parameters are like local variable only available to the particular function
 */

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

/* NOTE: In JavaScript functions are value, and can be stored in a variable.

Function expressions are anonymous functions stored in a variable 
 */
