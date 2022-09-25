"use strict";
// cap06 Tuple
//// https://youtu.be/5q0VtzJjvNc
function add3DCoordinate(c1, c2) {
    return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}
console.log('add3DCoordinate() >> ', add3DCoordinate([2, 4, 6], [3, 2, 1]));
// a regular tuple is useState
function simpleStringState(initial) {
    var str = initial;
    return [
        function () { return str; },
        function (v) {
            str = v;
        }
    ];
}
var _a = simpleStringState("hello"), str1getter = _a[0], str1setter = _a[1];
var _b = simpleStringState("felipe"), str2getter = _b[0], str2setter = _b[1];
console.log('str1getter()', str1getter());
console.log('str2getter()', str2getter());
str1setter("goodbye");
console.log('str1getter()', str1getter());
console.log('str2getter()', str2getter());
