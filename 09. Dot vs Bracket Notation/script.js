"use strict";

const eph = {
    firstName: "Ephraim",
    lastName: "S",
    age: 2037 - 1988,
    job: "Web Dev",
    friends: ["Michael", "Steven", "Bob"],
};

console.log(eph);

// Dot notation to access object value
console.log(eph.firstName);
console.log(eph.lastName);

// Bracket Notation
/* NOTE: While using bracket notation to access object value it should be an expression inside the bracket
 */
console.log(eph["job"]);

const nameKey = "Name";
console.log(eph["first" + nameKey]);
console.log(eph["last" + nameKey]);

/* const interestedIn = prompt(
    `What do you want to know about Ephraim? Choose between firstName, lastName, age, job and friends`
);

if (interestedIn) {
    console.log(eph[interestedIn]);
} else {
    console.log(
        `Wrong request... Choose between firstName, lastName, age, job and friends`
    );
} */

// Mutating object vale
eph.job = "Teacher";
console.log(eph);

// Add new property to the object
eph.location = "Bangladesh";
eph["facebook"] = "www.facebook.com/@userName";

// Challenge
/* Access object property using dot and bracket notations, and Print to the console
Ephraim has 3 friends and his best friend is called Steven
*/

console.log(
    `${eph.firstName} has ${eph.friends.length} friends and his best friend is called ${eph["friends"][1]}`
);
