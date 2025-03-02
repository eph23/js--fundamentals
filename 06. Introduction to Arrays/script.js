"use strict";

/* NOTE: An array is an ordered collection of values. Each value in an array is called an element, and each element has a numerical position in the array, known as its index. Arrays can hold values of any data type, and they are dynamically sized.
 */
// Array literal
const friends = ["Michael", "Steven", "Bob"];
console.log(friends);

// Array constructor function
const yearsArray = new Array(1991, 1984, 2008, 2020);
console.log(yearsArray);

// Accessing array value
console.log(friends[0]);
console.log(friends[1]);

// Array property
console.log(friends.length);

// Accessing array value using array property
/* NOTE: Expression vs Statement
An expression is any piece of code that evaluates to a value.

A statement is a complete instruction that tells JavaScript to do something. It does not return a value by itself.

JavaScript arrays can accept an expression
*/
console.log(friends[friends.length - 1]);

// Mutating array value
friends[2] = "Jay";
console.log(friends);

/* NOTE: JavaScript arrays are dynamically typed, meaning they can store elements of any data type, including primitive types (numbers, strings, booleans, null, undefined, symbols) and object types (objects, other arrays, functions).  

An array in JavaScript can contain any valid JavaScript expression as an element. This means you can include variables, function calls, arithmetic operations, and more within the array's elements.
 */

const firstName = "Ephraim";
const eph = [firstName, "S", 2017 - 1988, "Web-Dev", friends];

console.log(eph);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];
const ages = [
    calcAge(years[0]),
    calcAge(years[1]),
    calcAge(years[2]),
    calcAge(years[3]),
    calcAge(years[years.length - 1]),
];

console.log(ages);
