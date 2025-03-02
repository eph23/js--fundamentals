"use strict";

const friends = ["Michael", "Steven", "Bob"];
console.log(friends);
console.log(friends.length);

// the push method
/* Adds new element at the end of the array */
friends.push("Jay");
console.log(friends);
console.log(friends.length);

// the unshift method
/* Adds new elements at the beginning of the array */
friends.unshift("John");
console.log(friends);

// the pop method
/* Removes elements from the end of the array. It also returns the removed element */
const popped = friends.pop();
console.log("We removed from the array", popped);
console.log(friends);

// the shift method
/* Removes elements from the beginning of the array. It also returns the removed element */
const shifted = friends.shift();
console.log("We removed from the array", shifted);
console.log(friends);

// the indexOf method
/* returns the first index of the element */
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Antu"));

// the includes method
/* returns true if the array contains the element, else returns false */
console.log(friends.includes("Bob"));
console.log(friends.includes("Jay"));

if (friends.includes("Steven")) {
    console.log(`You have a friend named Steven`);
}
