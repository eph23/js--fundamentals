"use strict";

// Helper Function
/* NOTE: A helper function is a function that is designed to perform a specific task and is intended to be used by other functions or code blocks. Helper functions are often used to simplify complex code and to avoid repetition by encapsulating common functionality in a reusable function.
 */

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples); //Helper function call
    const orangePieces = cutFruitPieces(oranges); //Helper function call

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
}

console.log(fruitProcessor(2, 3));
