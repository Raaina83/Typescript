"use strict";
//convert to more specific or less specific
let a = 'hello';
let b = a; //less specific
let c = a; //more specific
let d = 'world'; //also a way to convert to specific types but can not be used in tsx files
let e = 'raaina';
let f = 45;
let addOrConact = (a, b, c) => {
    if (c === "add")
        return a + b;
    return '' + a + b;
};
let myVal = addOrConact(3, 4, 'concat'); //essentially we telling typescript that we know better than it does
let nextVal = addOrConact(5, 8, 'concat'); //actually is wrong but typescript now won't tell us
// 10 as string //wrong
10;
//DOM
const img = document.querySelector('img'); //non-null expression(we can just ! mark)
const imgTag = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
imgTag.src;
