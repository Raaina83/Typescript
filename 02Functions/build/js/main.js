"use strict";
let raaina; //seems senseless
let a = ["hwnk", 67]; //not so senseless now
// interface UserIdTwo = stringOrNumber (won't work)
//LITERAL TYPES
let myName; //also a type alias but you can only assign Raaina to it
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
    return a + b + c;
};
logMsg(sumAll(4, 5, 8));
logMsg(sumAll(undefined, 4)); //(a-->undefined, b=4, c=no value)
//REST PARAMETERS
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 10));
//NEVER TYPE(usually for funcs that explicilty are for error throwing)
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// const infinite = () => {
//     let i: number = 1;
//     while(true) {
//         i++;
//     }
// }
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
logMsg(typeCheck("true"));
