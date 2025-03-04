"use strict";

/* The while loop in JavaScript is a fundamental control flow statement that allows you to repeatedly execute a block of code as long as a specified condition remains true.
 */

let rep = 1;
while (rep <= 10) {
    console.log(`Rep - ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(dice);
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) {
        console.log(`You rolled a ${dice}`);
    }
}
