"use strict";
// cap01 TYPESCRIPT SETUP & EVERYDAY TYPES
//// https://youtu.be/LKVHFHJsiO0
var userName = "Felipe";
var loggedIn = true;
// Type error adding string to boolean
// loggedIn += " Fierro";
// console.log('loggedIn:', loggedIn);
// // error TS2322: Type 'string' is not assignable to type 'boolean'.
var myNumber = 10;
var myRegex = /foo/;
// Array types
var names = userName.split(" ");
var myValues = [1, 2, 3];
// add string in a number array gives error
// myValues = [1, 2, 3, "error"]
// Objects
var myPerson = {
    first: 'Felipe',
    last: 'Fierro'
    // add a not declare type variable gives error
    // cool: true
};
var myInterfacedPerson = {
    first: 'Felipe',
    last: 'Fierro'
};
// Maps
// Record lets work with key types and value types
var ids = {
    10: 'a',
    20: 'b',
};
ids[30] = 'c';
if (ids[30] === 'D') { }
for (var i = 0; i < 10; i++) {
    console.log('i: ', i);
}
[1, 2, 3].forEach(function (v) { return console.log('v: ', v); });
// defining a number array doesn't allow add string elements
var out = [4, 5, 6].map(function (v) { return v * 10; });
// const out: number = [4, 5, 6].map((v) => `${v * 10}`);
