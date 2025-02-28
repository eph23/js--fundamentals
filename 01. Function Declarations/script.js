"use strict";

/* NOTE: Function is simple piece of code that can be used over and over again
 */

// Function Declaration
function logger() {
    console.log("My name is Ephraim");
}

// Calling/invoking/running a function
logger();
logger();

/* NOTE: Function can receive data also return data
 */

// Function with parameters
/* NOTE: Parameters are the variables declared in the function's definition. They act as placeholders for input values.

Arguments are the actual values passed to the function when it is called.
 */

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

/* NOTE: Key Notes
1. Functions help us to write more maintainable codes
2. Reusable chunks of codes
3. Help us to maintain or codes DRY
*/
