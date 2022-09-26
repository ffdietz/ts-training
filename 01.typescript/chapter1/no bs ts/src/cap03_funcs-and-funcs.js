"use strict";
// cap03 FUNCTIONS WITH FUNCTIONS
//// https://youtu.be/XnyZXNnWAOA
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdder = exports.newArrayMutate = exports.arrayMutate = exports.printToFile = void 0;
//functions that takes functions as a parameter and return void
function printToFile(text, callback) {
    console.log('text', text);
    callback();
}
exports.printToFile = printToFile;
//function takes function as parameter and return value
function arrayMutate(numbers, mutate) {
    return numbers.map(mutate);
}
exports.arrayMutate = arrayMutate;
function newArrayMutate(numbers, mutate) {
    return numbers.map(mutate);
}
exports.newArrayMutate = newArrayMutate;
//returning functions
function createAdder(num) {
    return function (val) { return num + val; };
}
exports.createAdder = createAdder;
console.log('arrayMutate([1, 2, 3]) >> ', arrayMutate([1, 2, 3], function (v) { return v * 10; }));
console.log('newArrayMutate([1, 2, 3]) >> ', newArrayMutate([1, 2, 3], function (v) { return v * 100; }));
var addOne = createAdder(1);
console.log('addOne(55) >> ', addOne(55));
