"use strict";

// Objects
/* NOTE: An object is a collection of key-value pairs, where keys are strings (or symbols) and values can be any JavaScript data type. Objects are used to represent real-world entities or complex data structures.
 */

// Object literal
const eph = {
    firstName: "ephraim",
    lastName: "S",
    age: 2037 - 1988,
    job: "Web Dev",
    friends: ["Michael", "Steven", "Bob"],
};

console.log(eph);

// Object Constructor function
function PersonConstructor(name, age) {
    this.name = name;
    this.age = age;
}

let person1 = new PersonConstructor("Alice", 30);
let person2 = new PersonConstructor("Bob", 25);
console.log(person1);
console.log(person2);

// ES6 Method using class
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let person4 = new PersonClass("David", 35);
console.log(person4);
