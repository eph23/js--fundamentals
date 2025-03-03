"use strict";

const eph = {
    firstName: "Ephraim",
    lastName: "S",
    birthYear: 1988,
    job: "Web Dev",
    friends: ["Michael", "Steven", "Bob"],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummery: function () {
        return `${this.firstName} is a ${this.age}-years old ${
            this.job
        } and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
    },
};

/* NOTE: When a function is called as a method of an object, this refers to the object that the method is called on.
 */

console.log(eph);
console.log(eph.calcAge());
console.log(eph["calcAge"]());

console.log(eph.age);

// Challenge
/* Write a method getSummery that returns summery about Ephraim
 Ephraim is a 49-years old Web Dev and he has a drivers license */

console.log(eph.getSummery());
