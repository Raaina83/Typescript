"use strict";
// interface UserIdTwo = stringOrNumber (won't work)
//LITERAL TYPES
let myName; //also a type alias butu you can only assign Raaina to it
let userName; // more useful
userName = 'Raaina';
//FUNCTIONS
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello priya how are you?????');
logMsg(add(67, 78));
let subtract = function (a, b) {
    return (a - b);
};
logMsg(subtract(56, 23));
let multiply = (c, d) => {
    return c * d;
};
logMsg(multiply(12, 7));
//OPTIONAL PARAMETER
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 10, b, c = 7) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
logMsg(sumAll(4, 5, 8));
logMsg(sumAll(undefined, 4));
//REST PARAMETERS
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 10));
//NEVER TYPE
const createError = (errMsg) => {
    throw new Error(errMsg);
};
//CUSTOM TYPE CHECK
let isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const typeCheck = (value) => {
    if (isNumber(value))
        return "Number";
    if (!isNumber(value))
        return "String";
    return createError("Invalid arguments");
};
