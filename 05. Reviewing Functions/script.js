"use strict";

const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} will retire in ${retirement} years`;
    } else {
        return `${firstName} has already retired`;
    }
};

/* NOTE: The return statement stops the execution of a function and returns a value.
 */

console.log(yearsUntilRetirement(1988, "Ephraim"));
console.log(yearsUntilRetirement(1980, "Bob"));
