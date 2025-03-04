"use strict";

const eph = [
    "Ephraim",
    "S",
    2037 - 1988,
    "Web Dev",
    ["Michael", "Steven", "Bob"],
    true,
];

for (let i = eph.length - 1; i >= 0; i--) {
    console.log(eph[i]);
}

for (let exercise = 1; exercise <= 5; exercise++) {
    console.log(`==== Exercise - ${exercise} ====`);

    for (let rep = 1; rep <= 10; rep++) {
        console.log(`--- rep-${rep} ---`);
    }
}
