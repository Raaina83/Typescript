"use strict";
let username = "priya";
console.log(username);
//OBJECT
let myObj;
myObj = [];
const exampleObj = {
    prop1: 'Raaina',
    prop2: 19,
};
let hwasa = {
    name: 'Hwasa',
    age: 29,
    albums: ['Maria', 17, 'Im a B']
};
let jp = {
    name: "Raaina",
    age: 67,
    albums: ['Hello', 25]
};
hwasa = jp;
const greetingHuman = (human) => {
    if (human.name) {
        return `Hello ${human.name.toUpperCase()}!!`;
    }
    return 'Hello!!';
};
console.log(greetingHuman(jp));
//ENUMS
//Unlike most Typescript features, Enums are not a type-level addition to Javascript but something added to the language at run-time
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.B);
